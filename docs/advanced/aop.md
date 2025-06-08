# 面向切面编程 (AOP)

面向切面编程是 Spring 框架的核心功能之一，它允许将横切关注点（如日志记录、事务管理、安全控制）与业务逻辑分离，提高代码的模块化程度。

## AOP 核心概念

- **切面（Aspect）**：横切关注点的模块化，如事务管理
- **连接点（Join Point）**：程序执行过程中的某个特定点，如方法执行
- **通知（Advice）**：切面在特定连接点执行的动作
- **切入点（Pointcut）**：匹配连接点的表达式
- **引入（Introduction）**：向现有类添加新方法或属性
- **织入（Weaving）**：将切面应用到目标对象并创建新的代理对象的过程

## 实现方式

Spring AOP 支持两种实现方式：

### 1. 基于代理的 AOP

这是 Spring AOP 的默认实现方式，使用 JDK 动态代理或 CGLIB 代理。

```java
// 配置类
@Configuration
@EnableAspectJAutoProxy
public class AopConfig {
}
```

### 2. 基于 AspectJ 的 AOP

使用 AspectJ 编译器进行织入，功能更强大但配置更复杂。

## 通知类型

Spring AOP 提供了五种类型的通知：

1. **前置通知（@Before）**：在目标方法执行前执行
2. **后置通知（@After）**：在目标方法执行后执行，无论是否抛出异常
3. **返回通知（@AfterReturning）**：在目标方法成功执行后执行
4. **异常通知（@AfterThrowing）**：在目标方法抛出异常后执行
5. **环绕通知（@Around）**：包围目标方法，可以在执行前后添加自定义行为

## 完整示例

```java
@Aspect
@Component
public class LoggingAspect {
    
    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);
    
    // 定义一个切入点表达式，匹配 service 包中的所有方法
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceMethods() {}
    
    // 前置通知
    @Before("serviceMethods()")
    public void logBefore(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().getName();
        logger.info("准备执行方法: {}", methodName);
    }
    
    // 返回通知
    @AfterReturning(pointcut = "serviceMethods()", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        String methodName = joinPoint.getSignature().getName();
        logger.info("方法 {} 执行完成，返回结果: {}", methodName, result);
    }
    
    // 异常通知
    @AfterThrowing(pointcut = "serviceMethods()", throwing = "ex")
    public void logAfterThrowing(JoinPoint joinPoint, Exception ex) {
        String methodName = joinPoint.getSignature().getName();
        logger.error("方法 {} 执行异常: {}", methodName, ex.getMessage());
    }
    
    // 环绕通知
    @Around("execution(* com.example.service.BookService.findBookById(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        
        Object result = joinPoint.proceed();
        
        long endTime = System.currentTimeMillis();
        logger.info("方法 {} 执行时间: {} ms", 
                joinPoint.getSignature().getName(), 
                (endTime - startTime));
        
        return result;
    }
}
```

## 常见应用场景

1. **性能监控**：记录方法执行时间
2. **日志记录**：自动记录方法调用和返回值
3. **事务管理**：通过 `@Transactional` 注解实现
4. **安全控制**：验证用户权限
5. **缓存处理**：自动缓存方法结果

## 最佳实践

1. 保持切面简单，专注于单一职责
2. 避免在切面中包含业务逻辑
3. 使用有意义的命名，清晰表达切面的用途
4. 谨慎使用环绕通知，确保正确处理目标方法的返回值和异常
5. 考虑切面的执行顺序，使用 `@Order` 注解控制多个切面的优先级 