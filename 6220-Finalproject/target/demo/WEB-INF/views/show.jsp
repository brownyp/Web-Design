<%--
  Created by IntelliJ IDEA.
  User: zhangzhiyong
  Date: 2018/2/6
  Time: 下午6:25
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<table>
    <c:forEach begin='${pageNum}' end='${pageNum+1}' var="item" items="${list}">
        <tr>
            <td>
                ${item.name}
            </td>
            <td>
                ${item.age}
            </td>
        </tr>
    </c:forEach>
</table>
<c:choose>
    <c:when test="${pageNum+2<list.size()}">
        <form action="/show2" method="post">
            <input type="hidden" name="input1" value="${pageNum+2}"/>
            <input type="submit" value="next"/>
        </form>
    </c:when>
</c:choose>
<c:choose>
    <c:when test="${pageNum>1}">
        <form action="/show2" method="post">
            <input type="hidden" name="input1" value="${pageNum-2}"/>
            <input type="submit" value="previous"/>
        </form>
    </c:when>
</c:choose>
</body>
</html>
