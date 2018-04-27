<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Qingchun Xia
  Date: 2018/4/10
  Time: 下午10:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script src="/js/validation.js"></script>
</head>
<body>
<input type="hidden" id="productSize" value="${productSize}">
<h1 class="welcome">Welcome To Second Hand Market</h1>
<jsp:include page="/WEB-INF/user/header.jsp" />
<form action="/ordernow" id="orderProduct">
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
                    <td>Amount: <input type="text" class="amounttest" name="amountInput${i}" id="amountInput${i}"}></td>
                </tr>
                <tr>
                    <td><a id="warn${i}"></a></td>
                </tr>
            </table>
        </div>
    </c:forEach>
<br>
    <div class="totalcharge">
        Total charge:<input name="chargeTotal" type="text" id="chargeTotal">
        <input name="calname" type="button" value="update" onclick="checkPInput('amounttest')">
    </div>
    <input type="hidden" name="chargeNum" id="chargeNum" >
    <br>
    <input type="submit" id="orderNow1" value="Order Now" disabled="true">
</form>

<jsp:include page="/WEB-INF/user/footer.jsp" />
</body>
</html>
