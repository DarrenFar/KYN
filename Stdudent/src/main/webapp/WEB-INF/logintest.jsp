<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>
    <form id="loginForm" method="post" action="/api/login">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" /><br/><br/>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" /><br/><br/>
        
        <input type="submit" value="Login" />
    </form>
    
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/login', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText);
                    // Handle success
                    // Redirect or perform other actions
                } else if (xhr.readyState === 4) {
                    console.error(xhr.responseText);
                    // Handle error
                }
            };
            
            var loginData = {
                username: username,
                password: password
            };
            
            xhr.send(JSON.stringify(loginData));
        });
    </script>
</body>
</html>
