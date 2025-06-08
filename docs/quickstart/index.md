# 创建项目

本节将指导您创建第一个 Spring Boot 项目。

## 使用 Spring Initializr

Spring Initializr 是创建 Spring Boot 项目的最简单方法：

1. 访问 [https://start.spring.io/](https://start.spring.io/)
2. 选择项目类型（Maven/Gradle）
3. 选择 Java 版本
4. 添加依赖项（如 Spring Web）
5. 点击"生成"下载项目

## 使用命令行

您也可以使用 Spring Boot CLI 创建项目：

```bash
spring init --dependencies=web my-project
```

## 使用 IDE

大多数现代 IDE 都内置了 Spring 项目创建向导：

- IntelliJ IDEA: File > New > Project... > Spring Initializr
- Eclipse/STS: File > New > Spring Starter Project
- VS Code: 使用 Spring Initializr Java Support 扩展 