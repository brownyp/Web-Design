<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/4/26
  Time: 上午9:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <title>Title</title>
    <jsp:include page="/WEB-INF/admin/header.jsp" />
</head>
<body>
    <div class="product_container">
        <table class="product_table">
            <tr>
                <td><img class="product_img" src=${product.image}></td>
            </tr>
            <tr>
                <td>Name:<input type="text" name="productNewName" value="${product.name}"></td>
                <input type="hidden" name="productName" value="${product.name}">
            </tr>
            <tr>
                <td>Price:<input type="text" name="productNewPrice" value="${product.price}" ></td>
            </tr>
        </table>
    </div>
    <br>
</body>
<jsp:include page="/WEB-INF/else/footer.jsp" />
</html>
