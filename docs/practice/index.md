# 案例概述

## 项目监控策略笔记



### 原因分析
1. 静态字段持有对象引用 ：静态集合（如 List、Map）或其他静态字段如果持有大量对象的引用，并且这些引用在对象不再需要后未被清除，将导致这些对象常驻内存 。例如，一个静态List 不断添加元素而从不移除。

2. 未关闭的资源 ：数据库连接、文件流、网络连接（如 InputStream、OutputStream、Connection、Session）等资源在使用完毕后若未显式关闭，它们所占用的内存及关联的本地资源将无法释放 。   

3. 不恰当的 equals() 和 hashCode() 实现 (Improper equals() and hashCode() Implementations)：在将对象存入基于哈希的集合（如 HashSet、HashMap）时，如果对象的 equals() 和 hashCode() 方法实现不正确（例如，仅依赖可变字段或未同时重写两者），可能导致集合中存在逻辑上重复但无法被识别移除的对象，从而造成内存累积 。

4. ThreadLocal 使用不当 (ThreadLocals)：ThreadLocal 变量为每个线程提供独立的副本。如果在线程池环境下，线程被复用，而 ThreadLocal 存储的对象在使用完毕后未通过 remove() 方法清理，这些对象将与线程生命周期绑定，导致内存泄漏，尤其是在线程池中线程长时间存活的情况下。


需要注意的是，并非所有 OutOfMemoryError 都意味着内存泄漏。有时可能是因为为 JVM 分配的堆内存（通过 -Xms 和 -Xmx 参数设置）不足以支撑应用的正常运行负载 。