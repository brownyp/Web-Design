<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Qingchun Xia
  Date: 2018/4/10
  Time: 下午8:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Index</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script src="/js/validation.js"></script>
</head>


<body>
<h1 class="welcome">Welcome To Second Hand Market</h1>
<jsp:include page="/WEB-INF/user/header.jsp" />
<form class="orderConForm" id="orderConForm" action="/testConfirm">
    <table>
        <tr><td>Name: <input name="username" id="username" type="text"><span id="val1"></span></td></tr>
        <tr><td>Phone:<input name="userPhone" id="userPhone" type="text"><span id="val2"></span></td></tr>
        <tr><td>Address:<input name="userAddress" id="userAddress" type="text"><span id="val3"></span></td></tr>
        <tr><td>E-mail:<input name="userEmail" id="userEmail" type="text"><span id="val4"></span></td></tr>
    </table>
    <input type="hidden" name="productnum" value="${productnum1}">
    <input type="hidden" name="productnum" value="${productnum2}">
    <input type="hidden" name="productnum" value="${productnum3}">
    <input type="hidden" name="productnum" value="${productnum4}">
    <input type="hidden" name="productnum" value="${productnum5}">
    <input type="hidden" name="productPrice" value="${productPrice}">
    <input type="button" value="Order Now" onclick="checkInput('username','userPhone','userAddress','userEmail','orderConForm')">
</form>
<jsp:include page="/WEB-INF/user/footer.jsp" />
</body>
</html>
