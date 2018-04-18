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
    <script type="text/javascript">
        var input = [];
        function cal() {
            var test = 0;

            for(var k=0;k<5;k++)
            {
                var inputNum = document.getElementById("amountInput"+k).value;
                var priceNum = document.getElementById("price"+k).value;

                test += inputNum*priceNum;
                input[k]=inputNum;
            }

            document.getElementById("chargeTotal").value=test;
            document.getElementById("chargeNum").value=test;
            document.getElementById("chargeNum1").value=inputNum;

        }

    </script>
</head>
<body>
<h1 class="welcome">Welcome To Second Hand Market</h1>
<jsp:include page="/WEB-INF/else/header.jsp" />
<form action="/ordernow">
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
<br>
    <div class="totalcharge">
        Total charge:<input name="chargeTotal" type="text" id="chargeTotal">
        <input name="calname" type="button" value="update" onclick="cal()">
    </div>
    <input type="hidden" name="chargeNum" id="chargeNum" >
    <input type="submit" id="ordernow1" value="Order Now">
</form>



<button id="test1" type="button" onclick="">aaaa</button>


<jsp:include page="/WEB-INF/else/footer.jsp" />
</body>
</html>
