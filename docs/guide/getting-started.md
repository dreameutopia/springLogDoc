# 快速开始

本指南将帮助您快速上手 Spring Boot，创建一个简单的 Web 应用程序。

## 前提条件

- JDK 17 或更高版本
- Maven 3.6+ 或 Gradle 7.x+
- 您喜欢的 IDE（推荐 IntelliJ IDEA 或 Spring Tool Suite）

## 创建 Spring Boot 项目

### 使用 Spring Initializr

访问 [Spring Initializr](https://start.spring.io/) 创建一个新项目：

1. 选择 Maven 或 Gradle 作为构建工具
2. 选择 Java 作为语言
3. 选择最新的 Spring Boot 版本
4. 填写项目元数据（Group、Artifact 等）
5. 添加依赖项：Spring Web
6. 点击"生成"下载项目压缩包

### 导入项目

将下载的项目解压并导入到您的 IDE 中：

- **IntelliJ IDEA**：选择 "File" > "Open"，然后选择项目文件夹
- **Eclipse/STS**：选择 "File" > "Import" > "Existing Maven/Gradle Project"

## 创建 REST 控制器

创建一个简单的 REST 控制器：

```java
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
```

## 运行应用程序

### 使用 IDE

在 IDE 中找到主类 `DemoApplication.java`，右键点击并选择"运行"。

### 使用命令行

```bash
# Maven
./mvnw spring-boot:run

# Gradle
./gradlew bootRun
```

## 测试应用程序

应用启动后，打开浏览器访问：

```
http://localhost:8080/hello
```

您应该能看到文本 "Hello, Spring Boot!"。

## 项目结构

一个典型的 Spring Boot 项目结构如下：

```
src
├── main
│   ├── java
│   │   └── com
│   │       └── example
│   │           └── demo
│   │               ├── DemoApplication.java
│   │               └── HelloController.java
│   └── resources
│       ├── application.properties
│       ├── static
│       └── templates
└── test
    └── java
        └── com
            └── example
                └── demo
                    └── DemoApplicationTests.java
```

## 下一步

- 学习如何[配置应用程序属性](/guide/core-concepts)
- 了解[Spring Boot 自动配置](/blog/spring-boot-intro)
- 探索[数据访问](/examples/data-access)与[安全性](/blog/spring-security-basics) 