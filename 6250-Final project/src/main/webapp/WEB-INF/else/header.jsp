<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/4/14
  Time: 下午4:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div class="header-container">
     <div class="header_left">
     <a class="header_a" href="home">Home</a>
     <a class="header_a" href="productlist">Product List</a>
     <a class="header_a" href="Mycart">My Cart</a>
     </div >
     <div class="header_right">
     <form class="header_f" action="/admin" method="post"><input type="submit" value="login"></form>
     </div>
</div>