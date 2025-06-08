# 基本结构

Spring Boot 项目具有标准的目录结构，了解这些结构有助于您更好地组织代码。

## 项目结构

```
my-project/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── myproject/
│   │   │               ├── MyProjectApplication.java
│   │   │               ├── controller/
│   │   │               ├── service/
│   │   │               ├── repository/
│   │   │               └── model/
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── static/
│   │       └── templates/
│   └── test/
│       └── java/
├── pom.xml (或 build.gradle)
└── README.md
```

## 主要组件

- **MyProjectApplication.java**: 应用程序入口点
- **controller/**: 处理 HTTP 请求
- **service/**: 业务逻辑
- **repository/**: 数据访问
- **model/**: 数据模型
- **application.properties**: 配置文件

## 依赖管理

Spring Boot 使用 Maven 或 Gradle 进行依赖管理：

- **pom.xml**: Maven 项目配置文件
- **build.gradle**: Gradle 项目配置文件 