# 事件处理

Spring 的事件处理机制是一种观察者模式的实现，允许组件之间进行松耦合通信。本文将介绍 Spring 事件处理的核心概念和使用方法。

## 事件机制概述

Spring 事件机制由三个主要组件组成：

1. **事件（Event）**：包含要传递的信息
2. **事件发布者（Publisher）**：发布事件
3. **事件监听器（Listener）**：接收并处理事件

## 内置事件

Spring 框架提供了一些内置事件：

- **ContextRefreshedEvent**：ApplicationContext 初始化或刷新时发布
- **ContextStartedEvent**：ApplicationContext 启动时发布
- **ContextStoppedEvent**：ApplicationContext 停止时发布
- **ContextClosedEvent**：ApplicationContext 关闭时发布

## 自定义事件

### 1. 创建自定义事件

自定义事件需要继承 ApplicationEvent 类：

```java
public class UserCreatedEvent extends ApplicationEvent {
    
    private final String username;
    
    public UserCreatedEvent(Object source, String username) {
        super(source);
        this.username = username;
    }
    
    public String getUsername() {
        return username;
    }
}
```

### 2. 发布事件

使用 ApplicationEventPublisher 发布事件：

```java
@Service
public class UserService {
    
    @Autowired
    private ApplicationEventPublisher eventPublisher;
    
    public void createUser(String username, String password) {
        // 创建用户的业务逻辑
        User user = new User(username, password);
        userRepository.save(user);
        
        // 发布事件
        eventPublisher.publishEvent(new UserCreatedEvent(this, username));
    }
}
```

### 3. 监听事件

有两种方式监听事件：

#### 使用 @EventListener 注解

```java
@Component
public class UserEventListener {
    
    @EventListener
    public void handleUserCreatedEvent(UserCreatedEvent event) {
        System.out.println("新用户已创建: " + event.getUsername());
        // 执行其他操作，如发送欢迎邮件
    }
}
```

#### 实现 ApplicationListener 接口

```java
@Component
public class UserCreatedListener implements ApplicationListener<UserCreatedEvent> {
    
    @Override
    public void onApplicationEvent(UserCreatedEvent event) {
        System.out.println("新用户已创建: " + event.getUsername());
        // 执行其他操作
    }
}
```

## 异步事件处理

默认情况下，事件处理是同步的。要启用异步处理，需要：

1. 在配置类上添加 @EnableAsync 注解
2. 在事件监听器方法上添加 @Async 注解

```java
@Configuration
@EnableAsync
public class AsyncConfig {
    // 可以配置自定义的任务执行器
    @Bean
    public Executor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(25);
        return executor;
    }
}

@Component
public class AsyncEventListener {
    
    @Async
    @EventListener
    public void handleUserCreatedEvent(UserCreatedEvent event) {
        // 异步处理事件
    }
}
```

## 事件顺序

如果需要控制多个监听器的执行顺序，可以使用 @Order 注解：

```java
@Component
public class OrderedEventListeners {
    
    @EventListener
    @Order(1)
    public void firstListener(UserCreatedEvent event) {
        // 首先执行
    }
    
    @EventListener
    @Order(2)
    public void secondListener(UserCreatedEvent event) {
        // 其次执行
    }
}
```

## 总结

Spring 事件机制提供了一种优雅的方式来实现应用程序组件之间的松耦合通信。通过事件驱动的设计，可以使代码更加模块化，提高系统的可维护性和扩展性。