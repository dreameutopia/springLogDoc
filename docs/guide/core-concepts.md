# Spring 核心概念

Spring 框架的核心理念是简化 Java 开发，本文将介绍 Spring 的核心概念。

## 控制反转 (IoC)

控制反转是 Spring 最基本的概念，它将对象的创建和依赖关系的维护从代码中转移到容器中：

```java
// 传统方式
public class UserService {
    private UserRepository userRepository = new UserRepositoryImpl();
}

// 使用 IoC
public class UserService {
    @Autowired
    private UserRepository userRepository;
}
```

## 依赖注入 (DI)

依赖注入是实现 IoC 的主要方式，Spring 提供了三种依赖注入方式：

1. **构造函数注入**：通过构造函数提供依赖
2. **Setter 方法注入**：通过 setter 方法提供依赖
3. **字段注入**：直接在字段上使用 @Autowired 注解

## Bean 生命周期

Spring 容器管理的对象称为 Bean，Bean 的生命周期包括：

1. 实例化
2. 属性赋值
3. 初始化前处理
4. 初始化
5. 初始化后处理
6. 使用
7. 销毁

## 注解驱动开发

Spring 提供了丰富的注解，简化了配置：

- **@Component**：标记类为 Spring 组件
- **@Service**：标记类为服务层组件
- **@Repository**：标记类为数据访问层组件
- **@Controller**：标记类为控制器组件
- **@Configuration**：标记类为配置类

## 面向切面编程 (AOP)

AOP 允许将横切关注点（如日志记录、事务管理）与业务逻辑分离：

```java
@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("执行方法: " + joinPoint.getSignature().getName());
    }
}
```

## 总结

理解这些核心概念对于掌握 Spring 框架至关重要，它们是构建 Spring 应用程序的基础。 