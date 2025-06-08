# Spring Boot RESTful API 开发实战

本文将指导您使用 Spring Boot 构建一个完整的 RESTful API。

## 项目设置

首先，创建一个新项目，包含以下依赖：

- Spring Web
- Spring Data JPA
- H2 Database
- Validation
- Lombok
- SpringDoc OpenAPI UI

## 创建领域模型

定义产品实体类，使用 JPA 注解。

## 创建数据传输对象 (DTO)

为了分离 API 契约和内部实体，创建 DTO 类。

## 创建存储库

使用 Spring Data JPA 创建存储库接口。

## 创建服务层

实现服务层，包含业务逻辑和数据转换。

## 创建异常处理

实现全局异常处理器，处理常见错误情况。

## 创建控制器

实现 RESTful API 控制器，使用 SpringDoc 注解生成文档。

## 配置 OpenAPI 文档

配置 OpenAPI 以生成 API 文档。

## 数据初始化

创建示例数据进行测试。

## 测试 API

编写单元测试和集成测试。

## 运行应用程序

运行应用程序并访问 API 端点和文档。

## 总结

本教程展示了如何使用 Spring Boot 构建一个生产级别的 API，遵循最佳实践。 