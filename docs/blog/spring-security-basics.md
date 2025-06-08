# Spring Security 基础指南

**发布日期：2024-01-20**

Spring Security 是 Spring 生态系统中的安全框架，为应用程序提供身份验证和授权功能。本文将介绍 Spring Security 的基本概念和常见用例。

## 什么是 Spring Security？

Spring Security 是一个功能强大且高度可定制的身份验证和访问控制框架。它是保护基于 Spring 的应用程序的事实标准。

Spring Security 专注于为 Java 应用程序提供身份验证和授权。与所有 Spring 项目一样，Spring Security 的真正强大之处在于它可以轻松扩展以满足自定义需求。

## 核心概念

### 1. 身份验证（Authentication）

身份验证是确认用户身份的过程。Spring Security 提供了多种身份验证机制：

- 表单登录
- HTTP 基本认证
- OAuth 2.0 / OpenID Connect
- LDAP
- SAML
- 记住我功能
- JWT（JSON Web Token）

### 2. 授权（Authorization）

授权决定用户可以执行哪些操作。Spring Security 提供了多种授权方式：

- 基于角色的访问控制（RBAC）
- 基于权限的访问控制
- 方法级安全性
- 域对象安全性（ACL）

### 3. 安全上下文（Security Context）

安全上下文存储当前经过身份验证的用户的详细信息。您可以在应用程序的任何部分访问这些信息：

```java
Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
String currentUsername = authentication.getName();
```

更多内容将在后续更新...

## 入门配置

### Maven 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

### 基本配置

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/", "/home").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin((form) -> form
                .loginPage("/login")
                .permitAll()
            )
            .logout((logout) -> logout
                .permitAll());
        
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();
        
        UserDetails admin = User.withDefaultPasswordEncoder()
            .username("admin")
            .password("admin")
            .roles("ADMIN", "USER")
            .build();
        
        return new InMemoryUserDetailsManager(user, admin);
    }
}
```

::: warning 注意
`User.withDefaultPasswordEncoder()` 仅用于示例，不应在生产环境中使用。生产环境应使用 `PasswordEncoder` Bean。
:::

## 身份验证

### 表单登录

```java
http
    .formLogin((form) -> form
        .loginPage("/login")              // 自定义登录页面
        .loginProcessingUrl("/perform_login")  // 处理登录的 URL
        .defaultSuccessUrl("/home")       // 登录成功后重定向
        .failureUrl("/login?error=true")  // 登录失败后重定向
        .permitAll()
    );
```

### HTTP 基本认证

```java
http
    .httpBasic(withDefaults());
```

### 记住我功能

```java
http
    .rememberMe((remember) -> remember
        .key("uniqueAndSecret")
        .tokenValiditySeconds(86400)
    );
```

## 授权

### URL 级授权

```java
http
    .authorizeHttpRequests((authorize) -> authorize
        .requestMatchers("/resources/**", "/signup", "/about").permitAll()
        .requestMatchers("/admin/**").hasRole("ADMIN")
        .requestMatchers("/db/**").access(new WebExpressionAuthorizationManager("hasRole('ADMIN') and hasRole('DBA')"))
        .anyRequest().authenticated()
    );
```

### 方法级授权

首先启用方法安全性：

```java
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {
    // ...
}
```

然后在方法上使用注解：

```java
@Service
public class UserService {
    
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getAllUsers() {
        // ...
    }
    
    @PreAuthorize("hasRole('ADMIN') or #username == authentication.principal.username")
    public User getUser(String username) {
        // ...
    }
    
    @PostAuthorize("returnObject.username == authentication.principal.username")
    public User loadUserDetail(String username) {
        // ...
    }
}
```

## 用户管理

### 内存用户存储

```java
@Bean
public UserDetailsService userDetailsService() {
    UserDetails user = User.builder()
        .username("user")
        .password("{bcrypt}$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG")
        .roles("USER")
        .build();
    
    UserDetails admin = User.builder()
        .username("admin")
        .password("{bcrypt}$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG")
        .roles("ADMIN", "USER")
        .build();
    
    return new InMemoryUserDetailsManager(user, admin);
}
```

### 数据库用户存储

```java
@Bean
public UserDetailsService userDetailsService(DataSource dataSource) {
    JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
    return users;
}
```

默认情况下，JdbcUserDetailsManager 期望特定的表结构。如果您的表结构不同，可以自定义查询：

```java
@Bean
public UserDetailsService userDetailsService(DataSource dataSource) {
    JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
    users.setUsersByUsernameQuery("select username, password, enabled from users where username = ?");
    users.setAuthoritiesByUsernameQuery("select username, authority from authorities where username = ?");
    return users;
}
```

### 自定义用户服务

```java
@Service
public class CustomUserDetailsService implements UserDetailsService {
    
    private final UserRepository userRepository;
    
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        
        return org.springframework.security.core.userdetails.User.builder()
            .username(user.getUsername())
            .password(user.getPassword())
            .roles(user.getRoles().toArray(new String[0]))
            .build();
    }
}
```

## 密码加密

Spring Security 提供了多种密码编码器：

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

其他可用的编码器包括：

- `Pbkdf2PasswordEncoder`
- `SCryptPasswordEncoder`
- `Argon2PasswordEncoder`

## CSRF 保护

跨站请求伪造（CSRF）保护默认启用：

```java
http
    .csrf(csrf -> csrf
        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
    );
```

在 Thymeleaf 模板中使用 CSRF 令牌：

```html
<form th:action="@{/logout}" method="post">
    <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
    <button type="submit">Log Out</button>
</form>
```

## CORS 配置

```java
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("https://example.com"));
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
    configuration.setAllowCredentials(true);
    configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
    
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
}

// 在 SecurityFilterChain 中启用 CORS
http.cors(cors -> cors.configurationSource(corsConfigurationSource()));
```

## OAuth 2.0 集成

### 客户端配置

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .oauth2Login(oauth2 -> oauth2
            .loginPage("/login")
            .defaultSuccessUrl("/home")
        );
    
    return http.build();
}
```

配置 OAuth 2.0 提供者：

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: your-client-id
            client-secret: your-client-secret
          github:
            client-id: your-client-id
            client-secret: your-client-secret
```

### 资源服务器配置

```java
@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
    
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/api/**").authenticated()
            );
    }
}
```

## JWT 认证

```java
@Configuration
public class JwtConfig {
    
    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withPublicKey(publicKey).build();
    }
    
    @Bean
    public JwtEncoder jwtEncoder() {
        JWK jwk = new RSAKey.Builder(publicKey).privateKey(privateKey).build();
        JWKSource<SecurityContext> jwks = new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwks);
    }
}

@RestController
public class AuthController {
    
    private final JwtEncoder jwtEncoder;
    
    public AuthController(JwtEncoder jwtEncoder) {
        this.jwtEncoder = jwtEncoder;
    }
    
    @PostMapping("/token")
    public String token(Authentication authentication) {
        Instant now = Instant.now();
        long expiry = 36000L;
        
        JwtClaimsSet claims = JwtClaimsSet.builder()
            .issuer("self")
            .issuedAt(now)
            .expiresAt(now.plusSeconds(expiry))
            .subject(authentication.getName())
            .claim("scope", createScope(authentication))
            .build();
        
        return jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }
    
    private String createScope(Authentication authentication) {
        return authentication.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.joining(" "));
    }
}
```

## 测试安全配置

### 单元测试

```java
@ExtendWith(SpringExtension.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"})
    public void testGetAllUsers() throws Exception {
        // 测试代码
        mockMvc.perform(get("/api/users"))
            .andExpect(status().isOk());
    }
    
    @Test
    @WithAnonymousUser
    public void testGetAllUsersAsAnonymous() throws Exception {
        mockMvc.perform(get("/api/users"))
            .andExpect(status().isUnauthorized());
    }
}
```

### 集成测试

```java
@SpringBootTest
@AutoConfigureMockMvc
public class SecurityIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    public void testLoginPage() throws Exception {
        mockMvc.perform(get("/login"))
            .andExpect(status().isOk());
    }
    
    @Test
    @WithMockUser(username = "user", roles = {"USER"})
    public void testAccessProtectedPageWithUser() throws Exception {
        mockMvc.perform(get("/user/profile"))
            .andExpect(status().isOk());
    }
    
    @Test
    @WithMockUser(username = "user", roles = {"USER"})
    public void testAccessAdminPageWithUser() throws Exception {
        mockMvc.perform(get("/admin"))
            .andExpect(status().isForbidden());
    }
}
```

## 最佳实践

1. **使用 HTTPS**：始终在生产环境中使用 HTTPS。

2. **安全密码存储**：使用强密码哈希算法，如 bcrypt、PBKDF2、Argon2。

3. **实施适当的密码策略**：强制使用强密码，实施密码过期和历史记录。

4. **限制失败的登录尝试**：实施账户锁定或延迟机制。

5. **使用内容安全策略（CSP）**：防止 XSS 攻击。

6. **定期更新依赖项**：确保您使用的是最新的安全补丁。

7. **遵循最小权限原则**：仅授予用户完成任务所需的最小权限。

8. **安全地处理敏感数据**：不要在日志中记录敏感信息。

9. **使用安全 HTTP 头**：实施适当的安全头，如 X-Content-Type-Options、X-Frame-Options 等。

10. **审计和日志记录**：记录安全相关事件以进行审计和分析。

## 常见问题解决

### 1. 登录失败但没有错误消息

确保您已配置失败处理程序：

```java
http
    .formLogin(form -> form
        .failureHandler((request, response, exception) -> {
            String errorMessage;
            if (exception instanceof BadCredentialsException) {
                errorMessage = "Invalid username or password";
            } else {
                errorMessage = "Unknown error: " + exception.getMessage();
            }
            request.getSession().setAttribute("error", errorMessage);
            response.sendRedirect("/login?error");
        })
    );
```

### 2. 无法访问受保护的资源

检查以下几点：
- 用户是否具有正确的角色/权限
- URL 模式是否正确配置
- 是否存在顺序问题（更具体的规则应该在前面）

### 3. CSRF 保护导致 POST 请求失败

确保包含 CSRF 令牌：

```html
<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
```

对于 REST API，考虑禁用特定端点的 CSRF 保护：

```java
http
    .csrf(csrf -> csrf
        .ignoringRequestMatchers("/api/**")
    );
```

## 结论

Spring Security 提供了一个全面的安全框架，可以保护您的应用程序免受各种威胁。通过理解其核心概念并遵循最佳实践，您可以确保您的应用程序既安全又用户友好。

随着安全威胁的不断发展，定期更新您的安全知识和实践至关重要。Spring Security 团队不断更新框架以应对新的安全挑战，因此请确保您使用的是最新版本。

## 相关资源

- [Spring Security 官方文档](https://docs.spring.io/spring-security/reference/index.html)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Spring Security 示例项目](https://github.com/spring-projects/spring-security-samples) 