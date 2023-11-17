import{_ as t,a as e}from"./chunks/slssetupmqtt.5a5285b1.js";import{_ as o,o as s,c as a,Q as p}from"./chunks/framework.f1c0562b.js";const c="/assets/zgw02.4a033405.png",r="/assets/zgw05.ee9e2b50.png",i="/assets/zgw2.204c2d7d.png",d="/assets/zgw03.6708b8cd.png",n="/assets/hw_setup.269bf993.png",z=JSON.parse('{"title":"Первый запуск","description":"","frontmatter":{},"headers":[],"relativePath":"firststart.md","filePath":"firststart.md"}'),_={name:"firststart.md"},g=p('<h1 id="первыи-запуск" tabindex="-1">Первый запуск <a class="header-anchor" href="#первыи-запуск" aria-label="Permalink to &quot;Первый запуск&quot;">​</a></h1><p>После прошивки и перезагрузки устройства, шлюз создает точку доступа без пароля в формате <code>zgwABCD</code>, где <code>ABCD</code> - последние символы MAC-адреса WiFi адаптера шлюза. К точке доступа можно подключиться с помощью мобильного телефона.</p><p><img src="'+c+'" alt=""></p><p>Некоторые телефоны будут пытаться восстановить соединение с интернетом через мобильный интернет, поэтому перед настройкой шлюза рекомендуется отключить встроенный мобильный интернет. После подключения телефона к точке доступа шлюза, нужно разрешить телефону использовать сеть без интернета, обычно возникает подобное предупреждение:</p><p><img src="'+r+'" alt=""></p><p>и разрешить использовать сеть:</p><p><img src="'+i+'" alt="zgw2"></p><p>После подключения к созданной шлюзом точке доступа, вашему телефону будет присвоен IP адрес из подсети <code>192.168.100.0/24</code>.</p><p>Далее, через браузер телефона следует перейти на страницу контроллера по адресу <code>192.168.100.1</code> и через меню <code>Settings -&gt; WiFi</code> настроить реквизиты вашей сети (SSID и пароль).</p><p>Тут же можно прописать имя mDNS.local, по которому можно будет обращаться к шлюзу внутри вашей локальной сети, например <code>sls.local</code>.</p><p><img src="'+d+'" alt="zgw03"></p><p>После сохранения настроек требуется перезагрузка шлюза. Если вы указали правильные параметры сети, в журнале роутера должен появиться MAC адрес шлюза и ему будет присвоен IP адрес из вашей локальной сети. Информация о том, как посмотреть IP адрес нового устройства можно найти в документации на ваш маршрутизатор.</p><p>Далее, по адресу sls.local или IP адресу вашего устройства через браузер можно зайти на домашнюю страницу шлюза.</p><p><img src="'+t+'" alt="captivate2"></p><p>Далее, через меню <code>Settings -&gt; Link -&gt; MQTT Setup</code> необходимо прописать адрес вашего MQTT сервера mosqutto. Не забудьте установить галочку <code>Enable</code> под <code>MQTT Setup</code>.</p><p><img src="'+e+'" alt="zigbee"></p><p>Далее, из меню вкладки <code>Settings -&gt; Hardware</code> необходимо выбрать подключенные gpio. Следует обязательно настроить GPIO <code>Zigbee</code> и <code>Service Button Pin</code> Ниже в примере указаны настройки для круглой платы</p><p><img src="'+n+'" alt="hw"></p><p>После сохранения настроек и перезагрузки шлюза, статус сети zigbee должен быть как на скрине выше (статус <code>9 [OK]</code>).</p><p>После этих манипуляций, можно приступить к настройке автоматизаций в соответствии с инструкциями на вашу систему (<a href="/integrations/majordomo">MajorDoMo</a>, <a href="/integrations/has">Home-Assistant</a>) и тд).</p>',20),m=[g];function l(f,h,S,u,T,P){return s(),a("div",null,m)}const A=o(_,[["render",l]]);export{z as __pageData,A as default};