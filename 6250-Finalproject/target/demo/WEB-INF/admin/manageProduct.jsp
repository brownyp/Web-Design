<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/4/14
  Time: 下午5:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <title>Title</title>
    <h1 class="welcome">Welcome, Manager</h1>
    <jsp:include page="/WEB-INF/admin/header.jsp" />
</head>
<body>
<c:forEach var="i" begin="0" end="${product.size()-1}">
    <div style="float: left;text-align: center;margin-left: 30px">
    <form action="/updateProduct">
        <div class="product_container">
            <table class="product_table">
                <tr>
                    <td><img class="product_img" src="${product.get(i).image}"></td>
                </tr>
                <tr>
                    <td>Name:<input type="text" name="productNewName" value="${product.get(i).name}" id="price${i}"></td>
                    <input type="hidden" name="productName" value="${product.get(i).name}" id="price${i}">
                </tr>
                <tr>
                    <td>Price:<input type="text" name="productNewPrice" value="${product.get(i).price}" id="price${i}"></td>
                </tr>
            </table>
        </div>
        <br>
        <input type="submit" id="update" value="update">
    </form>
    <form action="deleteproduct">
        <input type="hidden" name="deleteCheck" value="${product.get(i).name}">
        <input type="submit" name="delete" id="delete" value="Delete">
    </form>
    </div>
</c:forEach>

</body>
<jsp:include page="/WEB-INF/else/footer.jsp" />
</html>
