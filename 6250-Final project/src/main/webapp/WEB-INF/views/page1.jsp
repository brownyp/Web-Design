<%--
  Created by IntelliJ IDEA.
  User: zhangzhiyong
  Date: 2018/2/19
  Time: 下午8:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

</head>
<body>
    Welcome to our Movie Store
    Please make your selection below
    <form action="/browseOrAdd" method="post">
        <select name="input1">
            <option value ="Browse">Browse Movies</option>
            <option value ="Add">Add movie to Database</option>
        </select>
        <input type="submit" value="send"/>
    </form>
</body>
</html>
