# DEVELOPER GUIDES

#### Local environment requirements
                
1. Php 7.2.5 + 
2. Composer 
3. Git 
4. Node
5. Npm 
6. linux *optional
7. Sqlite
8. PHP extc:
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
XML PHP Extension
---
#### App build commands

```
    git clone https://github.com/mikolajborowski/WSBGroupProject.git
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
```

---

#### FOR FRONT END
React is set up and ready in .\resources\js
Component mount .\resources\views\welcome.blade.php
---

#### REST API 

###### Authentication
---
1. Register
METHOD: POST 
Endpoint : 127.0.0.1:8000/api/register
Payload (Form data):
name: {user}
email: {email}
password: {password}
password_confirmation: {password}
Return: 
```
{
    "user": {
        "name": {user},
        "email": {email},
        "updated_at": {date},
        "created_at": {date},
        "id": {id}
    },
    "token": {token}
}
```

---

2. Login 
Endpoint : 127.0.0.1:8000/api/login
Method: POST
Payload (Form data):
email: {email}
password: {password}
Return:
```
{
    "token": {token}
}
```
###### User
1. Get info about user
Endpoint : 127.0.0.1:8000/api/user
Method: GET
HEADERS:
Authorization: Bearer {token}
Return:
```
{
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
```
---

2. Update info about user 
Endpoint : 127.0.0.1:8000/api/user
Method: POST
HEADERS:
Authorization: Bearer {token}
Payload (Form data):
name: {name}
email: {email}
Return:
```
{
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
```
---
#### RSS channels
1. Get all channels 
Endpoint : 127.0.0.1:8000/api/rss
Method: GET
HEADERS:
Authorization: Bearer {token}
Return: 
```
{

}
```