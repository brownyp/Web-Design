<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Qingchun Xia
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
<c:if test="${product.size()==1}">
    <div class="product_container">
        <table class="product_table">
            <tr>
                <td><img class="product_img" src=${product.get(0).image}></td>
            </tr>
            <tr>
                <td>Name:<input type="text" name="productNewName" value="${product.get(0).name}"></td>
            </tr>
            <tr>
                <td>Price:<input type="text" name="productNewPrice" value="${product.get(0).price}" ></td>
            </tr>
        </table>
    </div>
    <br>
</c:if>

<c:if test="${product.size()>1}">
<c:forEach var="i" begin="0" end="${product.size()-1}">
    <div class="product_container">
        <table class="product_table">
            <tr>
                <td><img class="product_img" src=${product.get(i).image}></td>
            </tr>
            <tr>
                <td>Name:${product.get(i).name}</td>
            </tr>
            <tr>
                <td>Price:<input type="hidden" value="${product.get(i).price}" id="price${i}">${product.get(i).price}</td>
            </tr>
            <tr>
                <td>Amount: <input type="text" name="amountInput${i}" id="amountInput${i}"}></td>
            </tr>
        </table>
    </div>
</c:forEach>
</c:if>
</body>
<jsp:include page="/WEB-INF/else/footer.jsp" />
</html>
