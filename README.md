Установка (консоль Shell):

npm install -g npm@8.19.2
npm install node@18.11.0
npm i

Настройка (Configs.json): 
https://oauth.vk.com/authorize?client_id=6121396&scope=1073737727&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1
- соглашаемся копируем в "token"

https://regvk.com/id/
- определяем ИД групп, копируем в "group_id"

- берем вебхук с интеграции сервера в дискорде и копируем в "webhook_urls"

- даем имя боту в "username"

- оповещение с упоминанием ролей редактируем тут "content"

- задаем цвет ембеда полоски тут "color":

-				"author": true,  - указивает подпись автора
				"copyright": true, - указивает копирайт
				"date": true, - уазивает время поста
				"exclude_content": [] - запрещает контент

Добавляем мониторинг на https://uptimerobot.com:
копируем ссылку "пример: https://VK-Addons.forsakenworld.repl.co"
Авторизуемся на https://uptimerobot.com/
жмем Add New Monitor
Monitor Type - HTTP(s)
Friendly Name - Вестник Феникса
URL (or IP) - https://VK-Addons.forsakenworld.repl.co (пример, копируется непосредственно с окна над терминалом)
Monitoring Interval - every 5 minutes
Monitor Timeout - in 30 seconds
HTTP Method - HEAD
Завершаем настройку - жмем "Create Monitor"
