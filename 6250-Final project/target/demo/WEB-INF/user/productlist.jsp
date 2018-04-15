<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/4/10
  Time: 下午10:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script>
        function cal() {
            var test = 0;
            for(var k=0;k<5;k++)
            {
                var inputNum = document.getElementById("amountInput"+k).value;
                var priceNum = document.getElementById("price"+k).value;
                test += inputNum*priceNum;
            }

            document.getElementById("chargeTotal").value=test;

        }
    </script>
</head>
<body>
<h1 class="welcome">Welcome To Second Hand Market</h1>
<jsp:include page="/WEB-INF/else/header.jsp" />


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
                    <td>Amount: <input type="text" id="amountInput${i}"}></td>
                </tr>
            </table>
        </div>
    </c:forEach>
<br>
Total charge:<input type="text" id="chargeTotal"><button name="cal" type="submit" onclick="cal()">Update</button>


<jsp:include page="/WEB-INF/else/footer.jsp" />
</body>
</html>
