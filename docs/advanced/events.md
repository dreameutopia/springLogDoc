# 事件处理

Spring 框架提供了一个强大的事件处理机制，允许应用程序中的组件以松耦合的方式进行通信。通过使用事件，您可以在不同组件之间传递信息，而无需直接依赖。

## 事件机制核心组件

Spring 事件系统基于观察者设计模式，包含以下核心组件：

1. **事件（Event）**：包含要传递的信息
2. **事件发布者（Event Publisher）**：发布事件的组件
3. **事件监听器（Event Listener）**：接收并处理事件的组件

## 内置事件

Spring 框架提供了几种内置事件：

- **ContextRefreshedEvent**：ApplicationContext 初始化或刷新时发布
- **ContextStartedEvent**：ApplicationContext 启动时发布
- **ContextStoppedEvent**：ApplicationContext 停止时发布
- **ContextClosedEvent**：ApplicationContext 关闭时发布
- **RequestHandledEvent**：HTTP 请求处理完成时发布（在 Web 应用中）

## 自定义事件

### 1. 创建自定义事件

自定义事件需要继承 `ApplicationEvent` 类：

```java
public class BookCreatedEvent extends ApplicationEvent {
    private final Book book;
    
    public BookCreatedEvent(Object source, Book book) {
        super(source);
        this.book = book;
    }
    
    public Book getBook() {
        return book;
    }
}
```

### 2. 发布事件

使用 `ApplicationEventPublisher` 发布事件：

```java
@Service
public class BookService {
    private final BookRepository bookRepository;
    private final ApplicationEventPublisher eventPublisher;
    
    @Autowired
    public BookService(BookRepository bookRepository, ApplicationEventPublisher eventPublisher) {
        this.bookRepository = bookRepository;
        this.eventPublisher = eventPublisher;
    }
    
    public Book createBook(Book book) {
        Book savedBook = bookRepository.save(book);
        // 发布事件
        eventPublisher.publishEvent(new BookCreatedEvent(this, savedBook));
        return savedBook;
    }
}
```

### 3. 监听事件

有两种方式可以监听事件：

#### 使用 @EventListener 注解（推荐）

```java
@Component
public class BookEventListener {
    private static final Logger logger = LoggerFactory.getLogger(BookEventListener.class);
    
    @EventListener
    public void handleBookCreatedEvent(BookCreatedEvent event) {
        Book book = event.getBook();
        logger.info("新书已创建: {} (作者: {})", book.getTitle(), book.getAuthor());
    }
}
```

#### 实现 ApplicationListener 接口

```java
@Component
public class BookCreatedListener implements ApplicationListener<BookCreatedEvent> {
    private static final Logger logger = LoggerFactory.getLogger(BookCreatedListener.class);
    
    @Override
    public void onApplicationEvent(BookCreatedEvent event) {
        Book book = event.getBook();
        logger.info("新书已创建: {} (作者: {})", book.getTitle(), book.getAuthor());
    }
}
```

## 异步事件处理

默认情况下，事件处理是同步的。要启用异步事件处理：

```java
@Configuration
@EnableAsync
public class AsyncConfig {
    // 配置异步执行器
    @Bean
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(25);
        executor.setThreadNamePrefix("EventExecutor-");
        executor.initialize();
        return executor;
    }
}

@Component
public class AsyncBookEventListener {
    private static final Logger logger = LoggerFactory.getLogger(AsyncBookEventListener.class);
    
    @Async
    @EventListener
    public void handleBookCreatedEvent(BookCreatedEvent event) {
        // 异步处理事件
        logger.info("异步处理新书创建事件: {}", event.getBook().getTitle());
    }
}
```

## 事件监听顺序

使用 `@Order` 注解控制多个监听器的执行顺序：

```java
@Component
public class BookEventListeners {
    
    @EventListener
    @Order(1) // 最高优先级
    public void logNewBook(BookCreatedEvent event) {
        System.out.println("1. 记录新书: " + event.getBook().getTitle());
    }
    
    @EventListener
    @Order(2)
    public void notifyAdmin(BookCreatedEvent event) {
        System.out.println("2. 通知管理员: " + event.getBook().getTitle());
    }
    
    @EventListener
    @Order(3) // 最低优先级
    public void updateStatistics(BookCreatedEvent event) {
        System.out.println("3. 更新统计信息");
    }
}
```

## 事件过滤

使用 `condition` 属性过滤事件：

```java
@Component
public class ConditionalEventListener {
    
    @EventListener(condition = "#event.book.price > 100")
    public void handleExpensiveBookEvent(BookCreatedEvent event) {
        System.out.println("昂贵图书已创建: " + event.getBook().getTitle());
    }
}
```

## 事务事件

Spring 提供了 `@TransactionalEventListener` 注解，可以将事件监听与事务绑定：

```java
@Component
public class TransactionalBookListener {
    
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void handleBookCreatedEvent(BookCreatedEvent event) {
        // 只有在事务成功提交后才会执行
        System.out.println("事务提交后: 新书已创建 " + event.getBook().getTitle());
    }
}
```

`TransactionPhase` 可以是：
- `BEFORE_COMMIT`：事务提交前
- `AFTER_COMMIT`：事务提交后（默认）
- `AFTER_ROLLBACK`：事务回滚后
- `AFTER_COMPLETION`：事务完成后（提交或回滚）