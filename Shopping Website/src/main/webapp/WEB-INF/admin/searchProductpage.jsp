<%--
  Created by IntelliJ IDEA.
  User: Qingchun Xia
  Date: 2018/4/14
  Time: 下午5:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Welcome To Second Hand Market</h1>
<jsp:include page="/WEB-INF/admin/header.jsp" />
<form action="searchProduct">
<h3>Search Product:</h3>
Search by name:<input type="text" name="searchByName">
<input type="submit" value="Search">
</form>
</body>
<footer>
    <jsp:include page="/WEB-INF/else/footer.jsp" />
</footer>
</html>
