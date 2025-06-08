# 数据访问

本节将介绍如何使用 Spring Data JPA 进行数据访问。

## 实体类

首先，定义实体类：

```java
@Entity
@Table(name = "books")
public class Book {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    private String title;
    
    private String author;
    
    private String isbn;
    
    @Column(length = 2000)
    private String description;
    
    // getter 和 setter
}
```

## 创建存储库

使用 Spring Data JPA 创建存储库接口：

```java
public interface BookRepository extends JpaRepository<Book, Long> {
    
    List<Book> findByAuthor(String author);
    
    Optional<Book> findByIsbn(String isbn);
    
    @Query("SELECT b FROM Book b WHERE b.title LIKE %:keyword% OR b.author LIKE %:keyword%")
    List<Book> search(@Param("keyword") String keyword);
}
```

## 服务层

创建服务层处理业务逻辑：

```java
@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;
    
    public List<Book> findAllBooks() {
        return bookRepository.findAll();
    }
    
    public Optional<Book> findBookById(Long id) {
        return bookRepository.findById(id);
    }
    
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }
    
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
    
    public List<Book> searchBooks(String keyword) {
        return bookRepository.search(keyword);
    }
} 