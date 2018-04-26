<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/4/25
  Time: 下午6:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>

</head>
<body>
<form action="/createNewProduct" enctype="multipart/form-data" method="post" >
    <input type="file" name="productImg">
    <input name="productName">
    <input name="productPrice">
    <input type="submit" value="test">
</form>
</body>
</html>
