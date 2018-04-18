<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/4/10
  Time: 下午8:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Index</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
</head>


<body>
<h1 class="welcome">Welcome To Second Hand Market</h1>
<jsp:include page="/WEB-INF/else/header.jsp" />
<form class="orderConForm" action="/testConfirm">
    <table>
        <c:forEach var="i" begin="0" end="${productsNum.size()-1}">
            <input type="hidden" name="productsNum" value="${productsNum.get(i)}">
        </c:forEach>
        <tr><td>Name: <input name="username" id="username" type="text"></td></tr>
        <tr><td>Phone:<input name="userPhone" id="userPhone" type="text"></td></tr>
        <tr><td>Address:<input name="userAddress" id="userAddress" type="text"></td></tr>
        <tr><td>E-mail:<input name="userEmail" id="userEmail" type="text"></td></tr>
    </table>
    <input type="hidden" name="testProduct" value=${product}>
    <input type="hidden" name="testProduct1" value=${productsNum}>

    <input type="submit" value="Order Now">
</form>
<jsp:include page="/WEB-INF/else/footer.jsp" />
</body>
</html>
