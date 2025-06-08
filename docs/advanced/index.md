# 高级特性

本节将介绍 Spring 框架的一些高级特性，帮助您构建更强大的应用程序。

## 面向切面编程 (AOP)

Spring AOP 允许您将横切关注点（如日志记录、事务管理）与业务逻辑分离：

```java
@Aspect
@Component
public class LoggingAspect {
    
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("执行方法: " + joinPoint.getSignature().getName());
    }
    
    @AfterReturning(pointcut = "execution(* com.example.service.*.*(..))", returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        System.out.println("方法返回: " + result);
    }
}
```

## 事件处理

Spring 的事件机制允许组件之间进行松耦合通信：

```java
// 定义事件
public class BookCreatedEvent extends ApplicationEvent {
    public BookCreatedEvent(Book book) {
        super(book);
    }
}

// 发布事件
@Service
public class BookService {
    @Autowired
    private ApplicationEventPublisher eventPublisher;
    
    public Book saveBook(Book book) {
        Book savedBook = bookRepository.save(book);
        eventPublisher.publishEvent(new BookCreatedEvent(savedBook));
        return savedBook;
    }
}

// 监听事件
@Component
public class BookEventListener {
    @EventListener
    public void handleBookCreatedEvent(BookCreatedEvent event) {
        Book book = (Book) event.getSource();
        System.out.println("新书已创建: " + book.getTitle());
    }
}
```

## 缓存

Spring 提供了简单的缓存抽象：

```java
@Configuration
@EnableCaching
public class CachingConfig {
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("books");
    }
}

@Service
public class BookService {
    @Cacheable("books")
    public Book findBookById(Long id) {
        // 此方法的结果将被缓存
        return bookRepository.findById(id).orElse(null);
    }
    
    @CacheEvict(value = "books", key = "#book.id")
    public Book updateBook(Book book) {
        // 更新后清除缓存
        return bookRepository.save(book);
    }
}
``` 