<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/3/24
  Time: 下午5:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login Page</title>
</head>
<h1>Welcome To Second Hand Market</h1>
<body>
<h2>Only Manager Can login</h2>
<form name="loginform" method="post" action="j_security_check">

    <input name="j_username" type="text">

    <input name="j_password" type="password">

    <input type="submit" value="登 录" >

</form>
<a href="backtoUpage">back</a>
</body>
</html>
