# 缓存

Spring 框架提供了强大且灵活的缓存抽象，允许您轻松地将缓存功能集成到应用程序中，从而提高性能和响应速度。

## 缓存概述

缓存是一种临时存储机制，用于存储计算成本高或访问频率高的数据，以减少重复计算或数据库访问。Spring 的缓存抽象提供了一个统一的接口，可以集成各种缓存提供商。

## 启用缓存

要在 Spring 应用程序中启用缓存，首先需要添加 `@EnableCaching` 注解到配置类：

```java
@Configuration
@EnableCaching
public class CachingConfig {
    // 缓存配置
}
```

## 缓存管理器

Spring 支持多种缓存管理器，包括：

### 1. SimpleCacheManager

最简单的缓存管理器，适用于测试环境：

```java
@Bean
public CacheManager cacheManager() {
    SimpleCacheManager cacheManager = new SimpleCacheManager();
    cacheManager.setCaches(Arrays.asList(
        new ConcurrentMapCache("books"),
        new ConcurrentMapCache("authors")
    ));
    return cacheManager;
}
```

### 2. ConcurrentMapCacheManager

基于 `ConcurrentHashMap` 的缓存管理器，适用于单服务器环境：

```java
@Bean
public CacheManager cacheManager() {
    return new ConcurrentMapCacheManager("books", "authors");
}
```

### 3. EhCacheCacheManager

集成 EhCache 缓存：

```java
@Bean
public CacheManager cacheManager() {
    return new EhCacheCacheManager(ehCacheManager());
}

@Bean
public EhCacheManagerFactoryBean ehCacheManager() {
    EhCacheManagerFactoryBean factory = new EhCacheManagerFactoryBean();
    factory.setConfigLocation(new ClassPathResource("ehcache.xml"));
    return factory;
}
```

### 4. RedisCacheManager

使用 Redis 作为分布式缓存：

```java
@Bean
public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
    RedisCacheConfiguration cacheConfiguration = RedisCacheConfiguration.defaultCacheConfig()
        .entryTtl(Duration.ofMinutes(10))
        .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer()))
        .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer()));
    
    return RedisCacheManager.builder(redisConnectionFactory)
        .cacheDefaults(cacheConfiguration)
        .build();
}
```

## 缓存注解

Spring 提供了多种缓存注解：

### 1. @Cacheable

缓存方法的返回值：

```java
@Service
public class BookService {
    
    @Cacheable(value = "books", key = "#id")
    public Book findBookById(Long id) {
        // 此方法的结果将被缓存
        // 如果缓存中存在相同 id 的结果，则直接返回缓存值而不执行方法
        System.out.println("从数据库获取图书: " + id);
        return bookRepository.findById(id).orElse(null);
    }
    
    @Cacheable(value = "books", key = "#author", condition = "#author.length() > 3")
    public List<Book> findBooksByAuthor(String author) {
        // 只有当作者名长度大于 3 时才缓存结果
        System.out.println("从数据库获取作者图书: " + author);
        return bookRepository.findByAuthor(author);
    }
}
```

### 2. @CachePut

更新缓存，但始终执行方法：

```java
@CachePut(value = "books", key = "#book.id")
public Book updateBook(Book book) {
    // 此方法总是会执行，并将结果放入缓存
    System.out.println("更新图书: " + book.getId());
    return bookRepository.save(book);
}
```

### 3. @CacheEvict

从缓存中删除条目：

```java
@CacheEvict(value = "books", key = "#id")
public void deleteBook(Long id) {
    // 从缓存中删除指定 id 的图书
    System.out.println("删除图书: " + id);
    bookRepository.deleteById(id);
}

@CacheEvict(value = "books", allEntries = true)
public void clearAllBooks() {
    // 清除 "books" 缓存中的所有条目
    System.out.println("清除所有图书缓存");
}
```

### 4. @Caching

组合多个缓存操作：

```java
@Caching(
    evict = { @CacheEvict(value = "booksByTitle", key = "#book.title") },
    put = { @CachePut(value = "books", key = "#book.id") }
)
public Book updateBookTitle(Book book, String newTitle) {
    book.setTitle(newTitle);
    return bookRepository.save(book);
}
```

## 自定义键生成器

自定义缓存键的生成方式：

```java
@Configuration
@EnableCaching
public class CachingConfig {
    
    @Bean
    public KeyGenerator bookKeyGenerator() {
        return (target, method, params) -> {
            StringBuilder key = new StringBuilder();
            key.append(target.getClass().getSimpleName());
            key.append(":");
            key.append(method.getName());
            
            for (Object param : params) {
                key.append(":");
                key.append(param.toString());
            }
            
            return key.toString();
        };
    }
}

@Service
public class BookService {
    
    @Cacheable(value = "books", keyGenerator = "bookKeyGenerator")
    public Book findBookByIsbn(String isbn) {
        return bookRepository.findByIsbn(isbn);
    }
}
```

## 缓存同步

在分布式环境中，确保缓存同步非常重要。使用 Redis 或 Hazelcast 等分布式缓存可以解决这个问题。

## 最佳实践

1. **选择合适的缓存提供商**：根据应用程序的需求选择合适的缓存提供商（内存、Redis、Ehcache 等）
2. **设置合理的缓存过期时间**：避免缓存过期太快（降低缓存效果）或太慢（数据过时）
3. **使用有意义的缓存键**：确保缓存键能唯一标识缓存内容
4. **避免缓存过大对象**：大对象会占用大量内存，可能导致性能问题
5. **监控缓存性能**：跟踪缓存命中率和使用情况，及时调整缓存策略 