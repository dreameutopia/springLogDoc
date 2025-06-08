# 缓存

Spring 框架提供了强大的缓存抽象，可以轻松地将缓存集成到应用程序中，提高性能。本文将介绍 Spring 缓存的核心概念和使用方法。

## 缓存概述

缓存是一种临时存储机制，用于存储经常访问的数据，以减少数据库查询或复杂计算的次数，从而提高应用程序性能。

Spring 的缓存抽象具有以下特点：
- 提供统一的缓存 API
- 支持多种缓存实现
- 使用注解驱动的方式简化缓存操作

## 启用缓存

要在 Spring 应用程序中启用缓存，需要添加 `@EnableCaching` 注解到配置类：

```java
@Configuration
@EnableCaching
public class CachingConfig {
    
    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        cacheManager.setCaches(Arrays.asList(
            new ConcurrentMapCache("books"),
            new ConcurrentMapCache("authors")
        ));
        return cacheManager;
    }
}
```

## 缓存注解

Spring 提供了几个关键的缓存注解：

### @Cacheable

用于缓存方法的返回值。当调用带有此注解的方法时，Spring 首先检查缓存，如果找到匹配的结果，则直接返回缓存的结果，而不执行方法。

```java
@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;
    
    @Cacheable("books")
    public Book findBookById(Long id) {
        System.out.println("从数据库获取图书: " + id);
        return bookRepository.findById(id).orElse(null);
    }
    
    @Cacheable(value = "books", key = "#title")
    public List<Book> findBooksByTitle(String title) {
        System.out.println("从数据库获取图书，标题: " + title);
        return bookRepository.findByTitle(title);
    }
}
```

### @CachePut

用于更新缓存，但不影响方法执行。方法总是会被执行，其结果会被放入缓存。

```java
@CachePut(value = "books", key = "#book.id")
public Book updateBook(Book book) {
    System.out.println("更新图书: " + book.getId());
    return bookRepository.save(book);
}
```

### @CacheEvict

用于从缓存中删除一个或多个条目。

```java
@CacheEvict(value = "books", key = "#id")
public void deleteBook(Long id) {
    System.out.println("删除图书: " + id);
    bookRepository.deleteById(id);
}

@CacheEvict(value = "books", allEntries = true)
public void clearBooksCache() {
    System.out.println("清除所有图书缓存");
}
```

### @Caching

用于组合多个缓存操作。

```java
@Caching(
    evict = {
        @CacheEvict(value = "books", key = "#book.id"),
        @CacheEvict(value = "booksByAuthor", key = "#book.author.id")
    },
    put = {
        @CachePut(value = "books", key = "#result.id")
    }
)
public Book updateBookDetails(Book book) {
    // 更新图书
    return bookRepository.save(book);
}
```

## 条件缓存

可以使用 `condition` 和 `unless` 属性添加缓存条件：

```java
@Cacheable(
    value = "books", 
    key = "#id",
    condition = "#id > 0",           // 只有当 ID > 0 时才缓存
    unless = "#result == null"        // 如果结果为 null，则不缓存
)
public Book findBookById(Long id) {
    return bookRepository.findById(id).orElse(null);
}
```

## 缓存实现

Spring 支持多种缓存实现：

### 1. 简单内存缓存

```java
@Bean
public CacheManager cacheManager() {
    return new ConcurrentMapCacheManager("books", "authors");
}
```

### 2. Caffeine 缓存

```java
@Bean
public CacheManager cacheManager() {
    CaffeineCacheManager cacheManager = new CaffeineCacheManager("books");
    cacheManager.setCaffeine(Caffeine.newBuilder()
        .expireAfterWrite(60, TimeUnit.MINUTES)
        .maximumSize(100));
    return cacheManager;
}
```

### 3. Redis 缓存

```java
@Bean
public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
    RedisCacheManager cacheManager = RedisCacheManager.builder(redisConnectionFactory)
        .cacheDefaults(RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10)))
        .build();
    return cacheManager;
}
```

## 缓存键生成

Spring 默认使用方法参数作为缓存键，但可以自定义键生成策略：

```java
@Bean
public KeyGenerator keyGenerator() {
    return new KeyGenerator() {
        @Override
        public Object generate(Object target, Method method, Object... params) {
            return target.getClass().getSimpleName() + ":" + 
                   method.getName() + ":" + 
                   StringUtils.arrayToDelimitedString(params, "_");
        }
    };
}
```

使用自定义键生成器：

```java
@Cacheable(value = "books", keyGenerator = "keyGenerator")
public Book findBook(String isbn, String title) {
    // 方法实现
}
```

## 总结

Spring 缓存抽象提供了一种简单而强大的方式来集成缓存功能，可以显著提高应用程序性能。通过注解驱动的方式，开发人员可以专注于业务逻辑，而将缓存管理交给 Spring 框架。 