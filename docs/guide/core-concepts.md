# Spring 核心概念

Spring 框架建立在几个核心概念之上，理解这些概念对于有效使用 Spring 至关重要。

## 依赖注入 (DI) 和控制反转 (IoC)

依赖注入是 Spring 框架最基本的概念之一。它是一种设计模式，通过这种模式，对象接收它们的依赖项，而不是自己创建它们。

```java
// 不使用依赖注入
public class UserService {
    private UserRepository userRepository = new UserRepositoryImpl();
}

// 使用依赖注入
public class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
```

控制反转是一个更广泛的概念，其中对象的创建和生命周期管理被外部容器（在这种情况下是 Spring 容器）处理。

### 优势

- **松耦合**：组件之间的依赖性降低
- **可测试性**：更容易进行单元测试
- **模块化**：更容易替换实现

## Bean 和 Spring 容器

在 Spring 中，被框架管理的对象称为 "Bean"。Spring 容器负责实例化、配置和组装这些 Bean。

### Bean 定义方式

1. **使用 @Component 注解**：
   ```java
   @Component
   public class UserService {
       // ...
   }
   ```

2. **使用 @Bean 注解**：
   ```java
   @Configuration
   public class AppConfig {
       @Bean
       public UserService userService() {
           return new UserService(userRepository());
       }
       
       @Bean
       public UserRepository userRepository() {
           return new UserRepositoryImpl();
       }
   }
   ```

### Bean 的作用域

- **singleton**：默认作用域，每个 Spring IoC 容器只有一个实例
- **prototype**：每次请求都会创建新的实例
- **request**：每个 HTTP 请求都有一个实例（仅在 Web 应用中有效）
- **session**：每个 HTTP 会话都有一个实例（仅在 Web 应用中有效）
- **application**：每个 ServletContext 都有一个实例（仅在 Web 应用中有效）

## 面向切面编程 (AOP)

AOP 允许将横切关注点（如日志记录、事务管理、安全性）与业务逻辑分离。

```java
@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Before method: " + joinPoint.getSignature().getName());
    }
}
```

### 关键概念

- **切面 (Aspect)**：横切关注点的模块化
- **连接点 (Join Point)**：程序执行过程中的特定点
- **通知 (Advice)**：在特定连接点执行的动作
- **切入点 (Pointcut)**：匹配连接点的表达式
- **引入 (Introduction)**：向现有类添加新方法或属性
- **织入 (Weaving)**：将切面与应用程序类型或对象链接起来创建一个通知对象

## 配置管理

Spring Boot 提供了多种配置应用程序的方式：

### application.properties / application.yml

```properties
# application.properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
```

```yaml
# application.yml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: password
```

### @Value 注解

```java
@Component
public class DatabaseConfig {
    @Value("${spring.datasource.url}")
    private String url;
    
    // ...
}
```

### @ConfigurationProperties 注解

```java
@Component
@ConfigurationProperties(prefix = "database")
public class DatabaseProperties {
    private String url;
    private String username;
    private String password;
    
    // getters and setters
}
```

## 事件处理

Spring 提供了一个事件处理系统，允许 Bean 之间通过事件进行通信：

```java
// 自定义事件
public class UserCreatedEvent extends ApplicationEvent {
    public UserCreatedEvent(User user) {
        super(user);
    }
}

// 发布事件
@Service
public class UserService {
    private final ApplicationEventPublisher eventPublisher;
    
    public UserService(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }
    
    public void createUser(User user) {
        // 创建用户的逻辑
        eventPublisher.publishEvent(new UserCreatedEvent(user));
    }
}

// 监听事件
@Component
public class UserEventListener {
    @EventListener
    public void handleUserCreatedEvent(UserCreatedEvent event) {
        User user = (User) event.getSource();
        System.out.println("User created: " + user.getName());
    }
}
```

## 总结

掌握这些核心概念将帮助您更有效地使用 Spring 框架，构建可维护、可测试和松耦合的应用程序。在后续章节中，我们将更深入地探讨这些概念的应用。 