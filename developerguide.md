<h1>DEVELOPER GUIDES</h1>
<h4>Local environment requirements</h4>
<ol>
<li>Php 7.2.5 +</li>
<li>Composer</li>
<li>Git</li>
<li>Node</li>
<li>Npm</li>
<li>linux *optional</li>
<li>Sqlite</li>
<li>PHP extc:
BCMath PHP Extension
Ctype PHP Extension
Fileinfo PHP extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP ExtensionBCMath PHP Extension
Ctype PHP Extension
Fileinfo PHP extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP Extension</li>
</ol>
<hr>
<h4>App build commands</h4>
<pre><code>    git clone https://github.com/mikolajborowski/WSBGroupProject.git
    cd WSBGroupProject
    composer install 
    touch .env
    cp .env.example .env 
    touch database/database.sqlite
    php artisan migrate 
    npm install 
    npm run dev 
    php artisan serve 
    Site available on http://127.0.0.1:8000/
</code></pre>
<hr>
<h4>FOR FRONT END</h4>
<p>React is set up and ready in .\resources\js
Component mount .\resources\views\welcome.blade.php</p>
<hr>
<h4>REST API</h4>
<h6>Authentication</h6>
<hr>
<ol>
<li>Register <br/>
METHOD: POST <br/>
Endpoint : 127.0.0.1:8000/api/register <br/>
Payload (Form data): <br/>
name: {user} <br/>
email: {email} <br/>
password: {password} <br/>
password_confirmation: {password} <br/>
Return:</li> <br/>
</ol>
<pre><code>{
    "user": {
        "name": {user},
        "email": {email},
        "updated_at": {date},
        "created_at": {date},
        "id": {id}
    },
    "token": {token}
}
</code></pre>
<hr>
<ol start="2">
<li>Login
Endpoint : 127.0.0.1:8000/api/login <br/>
Method: POST <br/>
Payload (Form data): <br/>
email: {email} <br/>
password: {password} <br/>
Return:</li> <br/>
</ol>
<pre><code>{
    "token": {token}
}
</code></pre>
<h6>User</h6>
<ol>
<li>Get info about user <br/>
Endpoint : 127.0.0.1:8000/api/user <br/>
Method: GET <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Return:</li> <br/>
</ol>
<pre><code>{
    "user": {
        "id": {id},
        "name": {name},
        "email": {email},
        "email_verified_at": {date},
        "is_user_admin": {boolean or null},
        "created_at": {date},
        "updated_at": {date}
    }
}
</code></pre>
<hr>
<ol start="2">
<li>Update info about user <br/>
Endpoint : 127.0.0.1:8000/api/user <br/>
Method: POST <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Payload (Form data): <br/>
name: {name} <br/>
email: {email} <br/>
Return:</li> <br/>
</ol>
<pre><code>{
    "user": {
        "id": {id},
        "name": {updated name},
        "email": {updated email},
        "email_verified_at": {date},
        "is_user_admin": {boolean or null},
        "created_at": {date},
        "updated_at": {date}
    }
}
</code></pre>
<hr>
<h4>RSS channels</h4>
<ol>
<li>Save channel <br/>
METHOD: POST <br/>
Endpoint : 127.0.0.1:8000/api/channels/save <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Payload (Form data): <br/>
name: {user} <br/>
link: {link} <br/>
Return:</li> <br/>
</ol>
<pre><code>
updated list of user channels
</code></pre>
<hr>
<li>Delete channel <br/>
METHOD: POST <br/>
Endpoint : 127.0.0.1:8000/api/channels/delete/{id} <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Return:</li> <br/>
</ol>
<pre><code>
updated list of user channels
</code></pre>
<hr>
<li>Users channels list<br/>
METHOD: get <br/>
Endpoint : 127.0.0.1:8000/api/channels/list <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Return:</li> <br/>
</ol>
<pre><code>
List of user channels
</code></pre>
<hr>

<li>Users channels list content formated to html<br/>
METHOD: get <br/>
Endpoint : 127.0.0.1:8000/api/channels/format <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Return:</li> <br/>
</ol>
<pre><code>
HTML ready to use
</code></pre>
<hr>
<h4>ADMIN</h4>
<ol>
<h5>Rule: when database is empty admin is user with id 1!</h5><br/>
<li>Set user as admin<br/>
Endpoint : 127.0.0.1:8000/api/admin/set/{id} <br/>
Method: POST <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Return: Information about permission. <br/>

<li>Delete user as admin<br/>
Endpoint : 127.0.0.1:8000/api/user/delete/{id} <br/>
Method: POST <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Return: info. 

<li>Get list of users as admin<br/>
Endpoint : 127.0.0.1:8000/api/admin/list<br/>
Method: GET <br/>
HEADERS: <br/>
Authorization: Bearer {token} <br/>
Return: List of users


