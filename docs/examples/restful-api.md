# Spring Boot RESTful API 开发实战

本文将指导您使用 Spring Boot 构建一个完整的 RESTful API，包括 CRUD 操作、异常处理、数据验证和文档生成。

## 项目设置

首先，让我们使用 Spring Initializr 创建一个新项目，包含以下依赖：

- Spring Web
- Spring Data JPA
- H2 Database
- Validation
- Lombok
- SpringDoc OpenAPI UI

### Maven 依赖

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    <dependency>
        <groupId>org.springdoc</groupId>
        <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
        <version>2.2.0</version>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### 配置应用程序

```yaml
# application.yml
spring:
  datasource:
    url: jdbc:h2:mem:productdb
    driver-class-name: org.h2.Driver
    username: sa
    password: password
  h2:
    console:
      enabled: true
      path: /h2-console
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
    hibernate:
      ddl-auto: update
    show-sql: true

springdoc:
  api-docs:
    path: /api-docs
  swagger-ui:
    path: /swagger-ui.html
    operations-sorter: method
```

## 创建领域模型

让我们创建一个简单的产品管理 API，首先定义产品实体：

```java
package com.example.restapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "产品名称不能为空")
    private String name;
    
    private String description;
    
    @Positive(message = "价格必须大于0")
    private Double price;
    
    private String category;
    
    private Integer stockQuantity;
}
```

## 创建数据传输对象 (DTO)

为了分离 API 契约和内部实体，我们创建 DTO：

```java
package com.example.restapi.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    
    private Long id;
    
    @NotBlank(message = "产品名称不能为空")
    private String name;
    
    private String description;
    
    @Positive(message = "价格必须大于0")
    private Double price;
    
    private String category;
    
    private Integer stockQuantity;
}
```

## 创建存储库

```java
package com.example.restapi.repository;

import com.example.restapi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    List<Product> findByCategory(String category);
    
    List<Product> findByNameContaining(String name);
}
```

## 创建服务层

```java
package com.example.restapi.service;

import com.example.restapi.dto.ProductDTO;
import com.example.restapi.exception.ResourceNotFoundException;
import com.example.restapi.model.Product;
import com.example.restapi.repository.ProductRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    
    private final ProductRepository productRepository;
    
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public ProductDTO getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("未找到ID为 " + id + " 的产品"));
        return convertToDTO(product);
    }
    
    public List<ProductDTO> getProductsByCategory(String category) {
        return productRepository.findByCategory(category).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public List<ProductDTO> searchProducts(String name) {
        return productRepository.findByNameContaining(name).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = convertToEntity(productDTO);
        Product savedProduct = productRepository.save(product);
        return convertToDTO(savedProduct);
    }
    
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("未找到ID为 " + id + " 的产品"));
        
        // 不更新 ID
        productDTO.setId(id);
        BeanUtils.copyProperties(productDTO, existingProduct);
        
        Product updatedProduct = productRepository.save(existingProduct);
        return convertToDTO(updatedProduct);
    }
    
    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("未找到ID为 " + id + " 的产品"));
        productRepository.delete(product);
    }
    
    private ProductDTO convertToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }
    
    private Product convertToEntity(ProductDTO productDTO) {
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        return product;
    }
}
```

## 创建异常处理

```java
package com.example.restapi.exception;

public class ResourceNotFoundException extends RuntimeException {
    
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
```

创建全局异常处理器：

```java
package com.example.restapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> handleResourceNotFoundException(ResourceNotFoundException ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                ex.getMessage(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> handleGlobalException(Exception ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "发生内部服务器错误",
                LocalDateTime.now()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

错误响应类：

```java
package com.example.restapi.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    
    private int status;
    private String message;
    private LocalDateTime timestamp;
}
```

## 创建控制器

```java
package com.example.restapi.controller;

import com.example.restapi.dto.ProductDTO;
import com.example.restapi.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@Tag(name = "产品管理", description = "产品管理 API")
public class ProductController {
    
    private final ProductService productService;
    
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    
    @GetMapping
    @Operation(summary = "获取所有产品", description = "返回所有产品的列表")
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "通过ID获取产品", description = "根据产品ID返回单个产品")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "找到产品",
                    content = @Content(schema = @Schema(implementation = ProductDTO.class))),
            @ApiResponse(responseCode = "404", description = "产品不存在", content = @Content)
    })
    public ResponseEntity<ProductDTO> getProductById(
            @Parameter(description = "产品ID", required = true)
            @PathVariable Long id) {
        ProductDTO product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }
    
    @GetMapping("/category/{category}")
    @Operation(summary = "按类别获取产品", description = "返回指定类别的所有产品")
    public ResponseEntity<List<ProductDTO>> getProductsByCategory(
            @Parameter(description = "产品类别", required = true)
            @PathVariable String category) {
        List<ProductDTO> products = productService.getProductsByCategory(category);
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/search")
    @Operation(summary = "搜索产品", description = "根据名称搜索产品")
    public ResponseEntity<List<ProductDTO>> searchProducts(
            @Parameter(description = "产品名称（部分匹配）", required = true)
            @RequestParam String name) {
        List<ProductDTO> products = productService.searchProducts(name);
        return ResponseEntity.ok(products);
    }
    
    @PostMapping
    @Operation(summary = "创建产品", description = "创建一个新产品")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ProductDTO> createProduct(
            @Parameter(description = "产品信息", required = true)
            @Valid @RequestBody ProductDTO productDTO) {
        ProductDTO createdProduct = productService.createProduct(productDTO);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "更新产品", description = "根据ID更新产品信息")
    public ResponseEntity<ProductDTO> updateProduct(
            @Parameter(description = "产品ID", required = true)
            @PathVariable Long id,
            @Parameter(description = "更新后的产品信息", required = true)
            @Valid @RequestBody ProductDTO productDTO) {
        ProductDTO updatedProduct = productService.updateProduct(id, productDTO);
        return ResponseEntity.ok(updatedProduct);
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "删除产品", description = "根据ID删除产品")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteProduct(
            @Parameter(description = "产品ID", required = true)
            @PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}
```

## 配置 OpenAPI 文档

```java
package com.example.restapi.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("产品管理 API")
                        .description("Spring Boot RESTful API 示例，用于产品管理")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("开发团队")
                                .email("dev@example.com")
                                .url("https://example.com"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("http://www.apache.org/licenses/LICENSE-2.0.html")));
    }
}
```

## 数据初始化

创建一个数据加载器，以便在应用程序启动时添加一些示例数据：

```java
package com.example.restapi.config;

import com.example.restapi.model.Product;
import com.example.restapi.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {
    
    @Bean
    public CommandLineRunner loadData(ProductRepository productRepository) {
        return args -> {
            productRepository.save(new Product(null, "iPhone 13", "Apple iPhone 13 128GB", 799.99, "电子产品", 100));
            productRepository.save(new Product(null, "Galaxy S21", "Samsung Galaxy S21 5G", 699.99, "电子产品", 85));
            productRepository.save(new Product(null, "MacBook Pro", "Apple MacBook Pro 14-inch", 1999.99, "电子产品", 50));
            productRepository.save(new Product(null, "iPad Air", "Apple iPad Air 64GB", 599.99, "电子产品", 75));
            productRepository.save(new Product(null, "PlayStation 5", "Sony PlayStation 5 Console", 499.99, "游戏", 30));
            productRepository.save(new Product(null, "Xbox Series X", "Microsoft Xbox Series X", 499.99, "游戏", 25));
            productRepository.save(new Product(null, "Kindle Paperwhite", "Amazon Kindle Paperwhite", 139.99, "电子产品", 60));
            productRepository.save(new Product(null, "AirPods Pro", "Apple AirPods Pro", 249.99, "电子产品", 120));
            productRepository.save(new Product(null, "Dyson V11", "Dyson V11 Vacuum Cleaner", 599.99, "家用电器", 40));
            productRepository.save(new Product(null, "Nike Air Max", "Nike Air Max 270 Shoes", 150.0, "服装", 200));
        };
    }
}
```

## 测试 API

### 单元测试

创建服务层的单元测试：

```java
package com.example.restapi.service;

import com.example.restapi.dto.ProductDTO;
import com.example.restapi.exception.ResourceNotFoundException;
import com.example.restapi.model.Product;
import com.example.restapi.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {
    
    @Mock
    private ProductRepository productRepository;
    
    @InjectMocks
    private ProductService productService;
    
    private Product product1;
    private Product product2;
    
    @BeforeEach
    void setUp() {
        product1 = new Product(1L, "iPhone 13", "Apple iPhone 13", 799.99, "电子产品", 100);
        product2 = new Product(2L, "Galaxy S21", "Samsung Galaxy S21", 699.99, "电子产品", 85);
    }
    
    @Test
    void getAllProducts_ShouldReturnAllProducts() {
        // Arrange
        when(productRepository.findAll()).thenReturn(Arrays.asList(product1, product2));
        
        // Act
        List<ProductDTO> result = productService.getAllProducts();
        
        // Assert
        assertEquals(2, result.size());
        assertEquals("iPhone 13", result.get(0).getName());
        assertEquals("Galaxy S21", result.get(1).getName());
    }
    
    @Test
    void getProductById_WithValidId_ShouldReturnProduct() {
        // Arrange
        when(productRepository.findById(1L)).thenReturn(Optional.of(product1));
        
        // Act
        ProductDTO result = productService.getProductById(1L);
        
        // Assert
        assertNotNull(result);
        assertEquals("iPhone 13", result.getName());
    }
    
    @Test
    void getProductById_WithInvalidId_ShouldThrowException() {
        // Arrange
        when(productRepository.findById(99L)).thenReturn(Optional.empty());
        
        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> {
            productService.getProductById(99L);
        });
    }
    
    @Test
    void createProduct_ShouldReturnCreatedProduct() {
        // Arrange
        ProductDTO productDTO = new ProductDTO();
        productDTO.setName("New Product");
        productDTO.setPrice(299.99);
        
        Product newProduct = new Product();
        newProduct.setName("New Product");
        newProduct.setPrice(299.99);
        
        Product savedProduct = new Product();
        savedProduct.setId(3L);
        savedProduct.setName("New Product");
        savedProduct.setPrice(299.99);
        
        when(productRepository.save(any(Product.class))).thenReturn(savedProduct);
        
        // Act
        ProductDTO result = productService.createProduct(productDTO);
        
        // Assert
        assertNotNull(result);
        assertEquals(3L, result.getId());
        assertEquals("New Product", result.getName());
    }
    
    @Test
    void updateProduct_WithValidId_ShouldReturnUpdatedProduct() {
        // Arrange
        ProductDTO productDTO = new ProductDTO();
        productDTO.setName("Updated iPhone");
        productDTO.setPrice(899.99);
        
        when(productRepository.findById(1L)).thenReturn(Optional.of(product1));
        
        Product updatedProduct = new Product();
        updatedProduct.setId(1L);
        updatedProduct.setName("Updated iPhone");
        updatedProduct.setPrice(899.99);
        
        when(productRepository.save(any(Product.class))).thenReturn(updatedProduct);
        
        // Act
        ProductDTO result = productService.updateProduct(1L, productDTO);
        
        // Assert
        assertNotNull(result);
        assertEquals("Updated iPhone", result.getName());
        assertEquals(899.99, result.getPrice());
    }
    
    @Test
    void deleteProduct_WithValidId_ShouldDeleteProduct() {
        // Arrange
        when(productRepository.findById(1L)).thenReturn(Optional.of(product1));
        
        // Act
        productService.deleteProduct(1L);
        
        // Assert
        verify(productRepository, times(1)).delete(product1);
    }
}
```

### 集成测试

创建控制器的集成测试：

```java
package com.example.restapi.controller;

import com.example.restapi.dto.ProductDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void getAllProducts_ShouldReturnAllProducts() throws Exception {
        mockMvc.perform(get("/api/products"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(greaterThan(0))))
                .andExpect(jsonPath("$[0].name", is(notNullValue())));
    }
    
    @Test
    void getProductById_WithValidId_ShouldReturnProduct() throws Exception {
        // 首先获取所有产品，然后选择第一个产品的 ID
        MvcResult result = mockMvc.perform(get("/api/products"))
                .andExpect(status().isOk())
                .andReturn();
        
        String content = result.getResponse().getContentAsString();
        ProductDTO[] products = objectMapper.readValue(content, ProductDTO[].class);
        
        Long productId = products[0].getId();
        
        mockMvc.perform(get("/api/products/{id}", productId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(productId.intValue())))
                .andExpect(jsonPath("$.name", is(notNullValue())));
    }
    
    @Test
    void getProductById_WithInvalidId_ShouldReturn404() throws Exception {
        mockMvc.perform(get("/api/products/999"))
                .andExpect(status().isNotFound());
    }
    
    @Test
    void createProduct_WithValidData_ShouldReturnCreatedProduct() throws Exception {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setName("Test Product");
        productDTO.setDescription("Test Description");
        productDTO.setPrice(199.99);
        productDTO.setCategory("测试");
        productDTO.setStockQuantity(50);
        
        mockMvc.perform(post("/api/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(productDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id", is(notNullValue())))
                .andExpect(jsonPath("$.name", is("Test Product")));
    }
    
    @Test
    void createProduct_WithInvalidData_ShouldReturn400() throws Exception {
        ProductDTO productDTO = new ProductDTO();
        // 缺少必填字段 name
        productDTO.setPrice(-10.0); // 无效价格
        
        mockMvc.perform(post("/api/products")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(productDTO)))
                .andExpect(status().isBadRequest());
    }
}
```

## 运行应用程序

运行应用程序后，您可以访问以下 URL：

- API 端点：http://localhost:8080/api/products
- Swagger UI：http://localhost:8080/swagger-ui.html
- H2 控制台：http://localhost:8080/h2-console

## 总结

在本教程中，我们构建了一个完整的 RESTful API，具有以下功能：

1. CRUD 操作
2. 数据验证
3. 异常处理
4. API 文档
5. 单元测试和集成测试

这个示例展示了如何使用 Spring Boot 构建一个生产级别的 API，遵循最佳实践，如分层架构、DTO 模式、适当的错误处理和全面的测试。 