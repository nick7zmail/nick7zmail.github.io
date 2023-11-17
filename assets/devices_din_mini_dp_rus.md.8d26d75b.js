import{_ as s,o as a,c as p,Q as l}from"./chunks/framework.f1c0562b.js";const h=JSON.parse('{"title":"Модуль управления координатным домофоном","description":"","frontmatter":{},"headers":[],"relativePath":"devices/din_mini_dp_rus.md","filePath":"devices/din_mini_dp_rus.md"}'),n={name:"devices/din_mini_dp_rus.md"},o=l(`<h1 id="модуль-управления-координатным-домофоном" tabindex="-1">Модуль управления координатным домофоном <a class="header-anchor" href="#модуль-управления-координатным-домофоном" aria-label="Permalink to &quot;Модуль управления координатным домофоном&quot;">​</a></h1><p>Устройство подключается в разрыв линии между домофоном и трубкой.</p><p>Выполняет функции:</p><ul><li>Детекция входящего вызова</li><li>Ответ на входящий вызов</li><li>Завершение вызова</li><li>Открытие двери</li></ul><p>Так же модуль содержит в себе два входа тип сухой контакт (Срабатывает при замыкании входа на GND)</p><h2 id="работа-без-абонентскои-трубки" tabindex="-1">Работа без абонентской трубки <a class="header-anchor" href="#работа-без-абонентскои-трубки" aria-label="Permalink to &quot;Работа без абонентской трубки&quot;">​</a></h2><p>Устройство может работать без подключения трубки, для этого необходио установить джампер J1</p><h2 id="назначение-клемников" tabindex="-1">Назначение клемников <a class="header-anchor" href="#назначение-клемников" aria-label="Permalink to &quot;Назначение клемников&quot;">​</a></h2><p>1: Вход 1</p><p>2: Вход 2</p><p>3: Линия (-)</p><p>4: Линия (+)</p><p>5: Трубка (-)</p><p>6: Трубка (+)</p><h2 id="распределение-gpio" tabindex="-1">Распределение GPIO <a class="header-anchor" href="#распределение-gpio" aria-label="Permalink to &quot;Распределение GPIO&quot;">​</a></h2><ul><li>Вход 1: GPIO32</li><li>Вход 2: GPIO25</li><li>Вход детектора звонка: GPIO26</li><li>Выход Реле ответа на входящий звонок: GPIO27</li><li>Выход Реле открытия двери : GPIO12</li><li>Выход Зуммер: GPIO13</li></ul><h2 id="выбор-программного-режима-работы-порта" tabindex="-1">Выбор программного режима работы порта <a class="header-anchor" href="#выбор-программного-режима-работы-порта" aria-label="Permalink to &quot;Выбор программного режима работы порта&quot;">​</a></h2><p>Выбор программного режима работы порта осуществляется через функции <em>gpio.mode(GPIO, mode)</em>, где mode может быть <em>gpio.INPUT</em> или <em>gpio.OUTPUT</em>.</p><p>Определение режима удобно прописать в файл <em>init.lua</em>, т.к. это требуется только однократно.</p><h2 id="инициализация-модуля" tabindex="-1">Инициализация модуля <a class="header-anchor" href="#инициализация-модуля" aria-label="Permalink to &quot;Инициализация модуля&quot;">​</a></h2><p>Для этого достаточно добавить в <em>init.lua</em> команду <em>dp.begin()</em> После этого, при входящем звонке будет вызывать скрипт <em>dp.lua</em></p><h2 id="таиминги" tabindex="-1">Тайминги <a class="header-anchor" href="#таиминги" aria-label="Permalink to &quot;Тайминги&quot;">​</a></h2><p>Для разных домофонов необходимы разные тайминги, по умолчанию они такие:</p><ol><li>DP_TIMING_CALL_TIMEOUT = 3*1000</li><li>DP_TIMING_ANSWER_TIMEOUT = 60*1000</li><li>DP_TIMING_OPEN_TIMEOUT = 1000</li><li>DP_TIMING_BEFORE_ANSWER = 400</li><li>DP_TIMING_BEFORE_OPEN = 1000</li></ol><h3 id="примеры-использования" tabindex="-1">Примеры использования <a class="header-anchor" href="#примеры-использования" aria-label="Permalink to &quot;Примеры использования&quot;">​</a></h3><p>Ответить на звонок и открыть дверь:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dp.</span><span style="color:#79B8FF;">answer</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">dp.</span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dp.</span><span style="color:#005CC5;">answer</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">dp.</span><span style="color:#005CC5;">open</span><span style="color:#24292E;">()</span></span></code></pre></div><p>Сбросить вызов:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dp.</span><span style="color:#79B8FF;">answer</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">dp.</span><span style="color:#79B8FF;">hangup</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dp.</span><span style="color:#005CC5;">answer</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">dp.</span><span style="color:#005CC5;">hangup</span><span style="color:#24292E;">()</span></span></code></pre></div><p>Проверить, что сейчас идет вызов:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> dp.</span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> dp.</span><span style="color:#B392F0;">CALL</span><span style="color:#E1E4E8;"> begin</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;CALL!&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> dp.</span><span style="color:#005CC5;">status</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> dp.</span><span style="color:#6F42C1;">CALL</span><span style="color:#24292E;"> begin</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;CALL!&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">end</span></span></code></pre></div><p>Добавить входы модуля в объекты:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">gpio.</span><span style="color:#79B8FF;">addInput</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, gpio.</span><span style="color:#B392F0;">INPUT_PULLUP</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;IN1&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">gpio.</span><span style="color:#79B8FF;">addInput</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, gpio.</span><span style="color:#B392F0;">INPUT_PULLUP</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;IN2&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">gpio.</span><span style="color:#005CC5;">addInput</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">32</span><span style="color:#24292E;">, gpio.</span><span style="color:#6F42C1;">INPUT_PULLUP</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;IN1&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">gpio.</span><span style="color:#005CC5;">addInput</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, gpio.</span><span style="color:#6F42C1;">INPUT_PULLUP</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;IN2&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>Установить таймаут открытия, для автозавершения в 2000мс:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">dp.</span><span style="color:#79B8FF;">setTiming</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">dp.</span><span style="color:#005CC5;">setTiming</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">)</span></span></code></pre></div>`,35),e=[o];function t(c,r,i,E,d,y){return a(),p("div",null,e)}const _=s(n,[["render",t]]);export{h as __pageData,_ as default};