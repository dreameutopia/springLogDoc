# Spring Boot 入门指南

**发布日期：2023-11-15**

Spring Boot 是 Spring 生态系统中的一个重要框架，它极大地简化了 Spring 应用程序的初始设置和开发过程。本文将介绍 Spring Boot 的核心特性以及如何开始使用它。

## 什么是 Spring Boot？

Spring Boot 是一个用于简化 Spring 应用程序开发的框架。它采用"约定优于配置"的方法，减少了开发人员的决策数量，同时仍保持 Spring 的灵活性。

Spring Boot 的主要目标是：

- 提供更快、更广泛的入门体验
- 开箱即用，提供默认配置
- 提供一系列非功能性特性（如嵌入式服务器、安全性、指标等）
- 避免代码生成和 XML 配置

## Spring Boot 的核心特性

### 1. 自动配置

Spring Boot 的自动配置尝试根据添加的依赖项自动配置 Spring 应用程序。例如，如果 HSQLDB 在类路径上，并且您没有手动配置任何数据库连接 bean，那么 Spring Boot 将自动配置一个内存数据库。

```java
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

`@SpringBootApplication` 注解等同于使用 `@Configuration`、`@EnableAutoConfiguration` 和 `@ComponentScan`。

### 2. 起步依赖

Spring Boot 提供了一系列"起步依赖"，这些依赖项简化了构建配置。起步依赖是特殊的 Maven/Gradle 依赖，它们将常用的库聚合在一起，形成单一的依赖项。

例如，如果您想使用 Spring 和 JPA 进行数据库访问，只需包含 `spring-boot-starter-data-jpa` 依赖项即可。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

### 3. 嵌入式服务器

Spring Boot 包含嵌入式 Tomcat、Jetty 或 Undertow 服务器，无需部署 WAR 文件。只需创建一个包含 `main()` 方法的 Java 应用程序，它就会运行一个 Web 应用程序。

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}
```

### 4. 生产就绪功能

Spring Boot 包含许多生产就绪功能，如健康检查、指标和外部化配置。

```yaml
# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
```

## 创建第一个 Spring Boot 应用

### 使用 Spring Initializr

1. 访问 [https://start.spring.io/](https://start.spring.io/)
2. 选择项目类型（Maven/Gradle）和语言（Java/Kotlin/Groovy）
3. 选择 Spring Boot 版本
4. 添加项目元数据（Group、Artifact 等）
5. 添加依赖项（如 Web、JPA、Security 等）
6. 点击"生成"下载项目

### 项目结构

```
myproject/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── myproject/
│   │   │               └── MyprojectApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── static/
│   │       └── templates/
│   └── test/
│       └── java/
│           └── com/
│               └── example/
│                   └── myproject/
│                       └── MyprojectApplicationTests.java
├── pom.xml
└── README.md
```

### 编写代码

创建一个简单的 REST 控制器：

```java
package com.example.myproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }
}
```

### 运行应用程序

```bash
# 使用 Maven
./mvnw spring-boot:run

# 使用 Gradle
./gradlew bootRun
```

访问 `http://localhost:8080/hello` 查看结果。

## Spring Boot 配置

Spring Boot 提供了多种配置应用程序的方式：

### 1. application.properties/application.yml

```properties
# 服务器配置
server.port=8080
server.servlet.context-path=/api

# 数据源配置
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=user
spring.datasource.password=password

# 日志配置
logging.level.root=INFO
logging.level.org.springframework.web=DEBUG
```

### 2. 环境特定配置

Spring Boot 允许您为不同的环境（如开发、测试、生产）创建特定的配置文件：

- `application-dev.properties`
- `application-test.properties`
- `application-prod.properties`

通过设置 `spring.profiles.active` 属性来激活特定的配置文件：

```bash
java -jar myapp.jar --spring.profiles.active=prod
```

### 3. 外部化配置

Spring Boot 还允许您使用外部配置，如环境变量或命令行参数：

```bash
java -jar myapp.jar --server.port=8081
```

## 结论

Spring Boot 极大地简化了 Spring 应用程序的开发过程，通过消除样板代码和配置，让开发人员能够专注于业务逻辑。它的自动配置、起步依赖和嵌入式服务器等特性使得构建生产级应用程序变得更加容易。

无论您是 Spring 新手还是有经验的开发人员，Spring Boot 都能帮助您更快、更高效地开发应用程序。

## 相关资源

- [Spring Boot 官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [Spring Initializr](https://start.spring.io/)
- [Spring Boot 示例项目](https://github.com/spring-projects/spring-boot/tree/main/spring-boot-samples) 