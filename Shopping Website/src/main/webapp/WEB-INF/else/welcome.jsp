<%--
  Created by IntelliJ IDEA.
  User: Qingchun Xia
  Date: 2018/4/26
  Time: 下午12:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/user">
    <input type="submit" value="User">
</form>
<form action="/admin">
    <input type="submit" value="admin">
</form>
</body>
<jsp:include page="/WEB-INF/else/footer.jsp" />
</html>
