<%--
  Created by IntelliJ IDEA.
  User: yupei
  Date: 2018/2/20
  Time: 下午12:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/putbook" >
    <table>
        <tr>
            <th>
                ISBN
            </th>
            <th>
                Book Title
            </th>
            <th>
                Authors
            </th>
            <th>
                Price
            </th>
        </tr>
        <c:forEach begin="1" end="${booknum}">
            <tr>
                <td><input name="book"></td>
                <td><input name="book"></td>
                <td><input name="book"></td>
                <td><input name="book"></td>
            </tr>
        </c:forEach>
    </table>
    <input type="hidden" name="booknum" value="${booknum}">
    <input type="submit" value="Submit">
</form>
</body>
</html>
