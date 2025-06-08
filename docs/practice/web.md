# Web 应用

本节将介绍如何使用 Spring MVC 构建 Web 应用程序。

## 创建控制器

控制器负责处理 HTTP 请求并返回响应：

```java
@Controller
public class BookController {
    
    @Autowired
    private BookService bookService;
    
    @GetMapping("/books")
    public String listBooks(Model model) {
        model.addAttribute("books", bookService.findAllBooks());
        return "books/list";
    }
    
    @GetMapping("/books/{id}")
    public String viewBook(@PathVariable Long id, Model model) {
        model.addAttribute("book", bookService.findBookById(id));
        return "books/view";
    }
    
    // 其他方法...
}
```

## 视图模板

使用 Thymeleaf 创建视图模板：

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>图书列表</title>
</head>
<body>
    <h1>图书列表</h1>
    <table>
        <tr>
            <th>标题</th>
            <th>作者</th>
            <th>操作</th>
        </tr>
        <tr th:each="book : ${books}">
            <td th:text="${book.title}">标题</td>
            <td th:text="${book.author}">作者</td>
            <td>
                <a th:href="@{/books/{id}(id=${book.id})}">查看</a>
            </td>
        </tr>
    </table>
</body>
</html>
```

## 表单处理

处理表单提交：

```java
@PostMapping("/books/add")
public String addBook(@Valid @ModelAttribute("book") Book book, 
                      BindingResult result) {
    if (result.hasErrors()) {
        return "books/add";
    }
    
    bookService.saveBook(book);
    return "redirect:/books";
}
``` 