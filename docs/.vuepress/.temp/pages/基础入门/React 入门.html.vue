<template><div><h1 id="react-入门" tabindex="-1"><a class="header-anchor" href="#react-入门" aria-hidden="true">#</a> React 入门</h1>
<p>[扩展]</p>
<p><a href="https://www.yuque.com/fechaichai/qeamqf/xbai87#e3638cf5-2" target="_blank" rel="noopener noreferrer">React基础<ExternalLinkIcon/></a></p>
<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2>
<h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3>
<p><code v-pre>Create-React-App</code> 创建, 官网推荐, 比较稳定</p>
<ol>
<li>安装</li>
</ol>
<p>如果不加 <code v-pre>--template typescript</code> 项目会默认使用 <code v-pre>javascript</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx create-react-app my-app <span class="token parameter variable">--template</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>进入到目录中, 运行项目即可</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>安装 <code v-pre>prettier</code>规范代码风格</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> prettier eslit-config-prettier eslint-plugin-prettier --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>Vite</code> 创建</p>
<ol>
<li>安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> create vite@latest react-dome-vite <span class="token parameter variable">--template</span> react-ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>进行目录, 安装依赖</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>运行</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码规则" tabindex="-1"><a class="header-anchor" href="#代码规则" aria-hidden="true">#</a> 代码规则</h2>
<p>高质量代码的特点</p>
<ul>
<li><strong>严格编码规范</strong>（靠工具、流程，而非自觉）</li>
<li>合理、规范的注释</li>
<li>代码合理拆分</li>
</ul>
<h3 id="两者区别" tabindex="-1"><a class="header-anchor" href="#两者区别" aria-hidden="true">#</a> 两者区别</h3>
<p>eslint prettier</p>
<ul>
<li>eslint 编码规范，如变量未定义（语法语义）</li>
<li>prettier 编码风格，如末尾是否用 <code v-pre>;</code></li>
<li>eslint 也有编码风格的功能，两者可能会有冲突</li>
</ul>
<h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h3>
<p>安装插件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化配置文件 <code v-pre>.eslint.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// .eslint.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"eslint: recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin: react/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:@typescript-eslint/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:prettier/recommended"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">"@typescript-eslint/parser"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">"latest"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"atypescript-eslint"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npx eslint <span class="token parameter variable">--init</span>    <span class="token comment">## 然后根据引导一步一步走</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解释：eslint <code v-pre>plugin</code> 与 <code v-pre>extend</code> 的区别：</p>
<ul>
<li><code v-pre>extend</code> 提供的是 eslint 现有规则的一系列预设</li>
<li><code v-pre>plugin</code> 则提供了除预设之外的自定义规则，当你在 eslint 的规则里找不到合适的的时候就可以借用插件来实现了</li>
</ul>
<p>安装 vscode 插件 <code v-pre>eslint</code> ，此时就可以看到代码 <code v-pre>App.txs</code> 中的错误提示（如定义一个未使用的变量）</p>
<p>在 <code v-pre>package.json</code> 中增加 scripts <code v-pre>&quot;lint&quot;: &quot; eslint 'src/**/*.+(js|ts|jsx|tsx)' &quot;</code> <br>
控制台运行 <code v-pre>npm run lint</code> 也可以看到错误提示。如果要自动修复，可以加 <code v-pre>--fix</code> 参数</p>
<h3 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> prettier</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install prettier eslint-config-prettier eslint-plugin-prettier -save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>eslint-config-prettier</code> 禁用所有和 Prettier 产生<strong>冲突</strong>的规则</li>
<li><code v-pre>eslint-plugin-prettier</code> 把 Prettier 应用到 Eslint，配合 rules <code v-pre>&quot;prettier/prettier&quot;: &quot;error&quot;</code> 实现 Eslint 提醒。</li>
</ul>
<p>在 eslint 配置文件的 <code v-pre>extends</code> <strong>最后</strong> 增加 <code v-pre>'plugin:prettier/recommended'</code></p>
<p>安装 vscode 插件 <code v-pre>prettier</code> ，此时可以看到代码 <code v-pre>App.txs</code> 中的格式提示（如末尾是否使用 <code v-pre>;</code> ，或单引号、双引号）</p>
<p>在 <code v-pre>package.json</code> 中增加 scripts <code v-pre>&quot;format&quot;: &quot; prettier --write 'src/**/*.+(js|ts|jsx|tsx)' &quot;</code> <br>
控制台运行 <code v-pre>npm run format</code> 可以修复所有的格式错误</p>
<p>设置 vscode <code v-pre>.vscode/settings.json</code> 自动保存格式，可以在文件保存时，自动保留格式</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加配置文件 <code v-pre>.prettierrc.js</code> 规定自己的编码格式，运行 <code v-pre>npm run format</code> 可以看到效果，保存文件也可以看到效果。<br>
【注意】如果此处没效果，可以<strong>重启 vscode</strong> 再重试。</p>
<hr>
<p>一直搞不定，重启 vscode 就好了。
在 vscode 搜“prettier” 插件时，发现一个 “reload required” 的提示，于是就重启了</p>
<p>CRA 创建的项目，配置文件是 <code v-pre>js</code> 格式
vite 创建的项目，配置文件是 <code v-pre>cjs</code> 格式</p>
<h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2>
<h3 id="jsx-与-标签的区别" tabindex="-1"><a class="header-anchor" href="#jsx-与-标签的区别" aria-hidden="true">#</a> JSX 与 标签的区别</h3>
<ol>
<li>首字母大小写的区分，大写是自定义组件</li>
<li>每段 JSX 只能有一个根节点 (其中为 <code v-pre>&lt;&gt;&lt;/&gt;</code> 空标签，空标签无法添加 <code v-pre>class</code> 等修饰)</li>
</ol>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>return (
	&lt;&gt;
  	&lt;div&gt;hello world&lt;/div&gt;
  &lt;/&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-的属性" tabindex="-1"><a class="header-anchor" href="#jsx-的属性" aria-hidden="true">#</a> JSX 的属性</h3>
<ol>
<li>类型的变化，<code v-pre>class</code> 在 react 中需要写成 <code v-pre>className</code></li>
</ol>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>return (
	&lt;div className=&quot;App&quot;&gt;hello world&lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么？</p>
<p>因为 JSX 是写在 ts 或者 js 中的，那么 <code v-pre>class</code> 已经是一个关键字了 (类)</p>
<p>所以，只能将名称改为 <code v-pre>className</code></p>
<ol start="2">
<li><code v-pre>style</code> 要使用 JS 对象 (不能是 <code v-pre>string</code>) 而且 <code v-pre>key</code> 用驼峰写法</li>
</ol>
<p>错误写法</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>return (
  &lt;a style=&quot;color:red; background-color:white;&quot;&gt;&lt;/a&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确写法</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>return (
	&lt;a style={{ color: 'red', backgroundColor: 'white' }}&gt;&lt;/a&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注意]</strong></p>
<p>有两点需要注意</p>
<ul>
<li>
<p><code v-pre>style</code> 必须用 <code v-pre>{}</code> 包起来并使用 对象的方式去写</p>
</li>
<li>
<p><code v-pre>background-color</code> 这样的属性，只能在 css 中使用，JSX 或 TSX 需要写成这样 <code v-pre>backgroundColor</code>，即采用 驼峰写法</p>
</li>
</ul>
<ol start="3">
<li>for 要改为 htmlFor</li>
</ol>
<p>for 属性规定 label 与 哪个表单元素绑定，for 绑定的名称 与 表单 id 相同</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Male<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>JSX 中的写法</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>return (
  &lt;&gt;
  	&lt;label htmlFor=&quot;male&quot;&gt;Male&lt;/label&gt;
		&lt;input type=&quot;radio&quot; name=&quot;sex&quot; id=&quot;male&quot; /&gt;
  &lt;/&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-中监听-dom-事件" tabindex="-1"><a class="header-anchor" href="#jsx-中监听-dom-事件" aria-hidden="true">#</a> JSX 中监听 DOM 事件</h3>
<ol>
<li>使用 <code v-pre>onXxx</code> 的形式，定义事件</li>
</ol>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>return (
	&lt;div&gt;
      &lt;button
        onClick={() =&gt; {
          console.log('clicked')
        }}
      &gt;
        click
      &lt;/button&gt;
   &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>必须传入一个函数 ( 是fn 而非 fn() ，fn() 是执行结果, fn 才是一个函数)</li>
</ol>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>const fn = () =&gt; {
  console.log('clicked...')
}
return (
	&lt;div&gt;
    &lt;button onClick={fn}&gt;click&lt;/button&gt;
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数传递-额外参数" tabindex="-1"><a class="header-anchor" href="#函数传递-额外参数" aria-hidden="true">#</a> 函数传递 额外参数</h3>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>const fn = (event: MouseEvent&lt;HTMLButtonElement&gt;, name: string) =&gt; {
  event.preventDefault()
  event.stopPropagation()
  console.log('clicked...', name)
}

return (
	&lt;div&gt;
    &lt;button
      onClick={event =&gt; {
        fn(event, 'Lin')
      }}
    &gt;
      click
    &lt;/button&gt;
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-中变量与表达式的插入" tabindex="-1"><a class="header-anchor" href="#jsx-中变量与表达式的插入" aria-hidden="true">#</a> JSX 中变量与表达式的插入</h3>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>const style = { color: 'red', backgroundColor: 'white' }

return (
  &lt;div style={ style }&gt;{ true ? 'true' : 'false' }&lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-中的注释" tabindex="-1"><a class="header-anchor" href="#jsx-中的注释" aria-hidden="true">#</a> JSX 中的注释</h3>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>{/* 这个是注释 */}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jsx-中条件判断" tabindex="-1"><a class="header-anchor" href="#jsx-中条件判断" aria-hidden="true">#</a> JSX 中条件判断</h3>
<p>简单使用</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>const flag = true

return (
	&lt;div&gt;
  	&lt;div&gt;{flag &amp;&amp; &lt;p&gt;Hello&lt;/p&gt;}&lt;/div&gt; {/* 单个元素的隐藏 */}
    &lt;div&gt;{flag ? &lt;p&gt;Hello&lt;/p&gt; : &lt;p&gt;你好&lt;/p&gt;}&lt;/div&gt; {/* 两个元素的要显示哪个一个 */}
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的封装</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>function Hello() {
  if (flag) return &lt;p&gt;hello1&lt;/p&gt;
  return &lt;p&gt;你好1&lt;/p&gt;
}

return (
	&lt;div&gt;
  	&lt;Hello&gt;&lt;/Hello&gt; {/* 首字母大写才是 自定义组件 */}
  &lt;/div&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-循环的使用" tabindex="-1"><a class="header-anchor" href="#jsx-循环的使用" aria-hidden="true">#</a> JSX 循环的使用</h3>
<ul>
<li>使用数组 map，来执行循环</li>
<li>每个 item 元素需要 key 属性</li>
<li>key 在同级别唯一</li>
<li><strong>[注意]</strong> 不要使用 index 作为 key</li>
</ul>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>const list = [
  { userName: 'shuangyue', name: '双越' },
  { userName: 'zhangsan', name: '张三' },
  { userName: 'lisi', name: '李四' },
]

return (
	&lt;ul&gt;
    {list.map(user =&gt; {
      const { userName, name } = user
      return &lt;li key={userName}&gt;{name}&lt;/li&gt;
    })} 
  &lt;/ul&gt;
  {/* 不要使用 index 作为 key，下面做法是错误的 */}
  {/*&lt;ul&gt;
    {list.map((user, index) =&gt; {
      const { userName, name } = user
      return &lt;li key={index}&gt;{name}&lt;/li&gt;
    })} 
  &lt;/ul&gt;
  */}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx-与-vue-设计理念的区别" tabindex="-1"><a class="header-anchor" href="#jsx-与-vue-设计理念的区别" aria-hidden="true">#</a> JSX 与 Vue 设计理念的区别</h3>
<ul>
<li>
<p>判断 Vue 采用 v-if，React 使用 三元表达式，或者 &amp;&amp;</p>
</li>
<li>
<p>循环 Vue 采用 v-for，React 使用 map 进行循环，但是两者同样需要 key</p>
</li>
<li>
<p>React - 能用 js 的就用 js</p>
</li>
<li>
<p>Vue - 自定义很多指令，方便初学者学习和记忆</p>
</li>
</ul>
<p><strong>[注意]</strong></p>
<p>Vue3 也能很好的支持 JSX 语法</p>
<h3 id="jsx-中使用-html" tabindex="-1"><a class="header-anchor" href="#jsx-中使用-html" aria-hidden="true">#</a> JSX 中使用 html</h3>
<p><code v-pre>dangerouslySetInnerHTML</code> 属性能将 文本转换为 <code v-pre>html</code></p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState<span class="token punctuation">,</span> ChangeEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>event<span class="token operator">:</span> ChangeEvent<span class="token operator">&lt;</span>HTMLTextAreaElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setText</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> __html<span class="token operator">:</span> text<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">,</span> <span class="token string">'&lt;br>'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">getHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text"> // 将文本转化为 html
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<ul>
<li>
<p>标签</p>
</li>
<li>
<p>属性</p>
</li>
<li>
<p>事件</p>
</li>
<li>
<p>JS 变量或表达式</p>
</li>
<li>
<p>条件判断</p>
</li>
<li>
<p>循环</p>
</li>
</ul>
<h2 id="增、删、改、查" tabindex="-1"><a class="header-anchor" href="#增、删、改、查" aria-hidden="true">#</a> 增、删、改、查</h2>
<h3 id="基本操作的语法" tabindex="-1"><a class="header-anchor" href="#基本操作的语法" aria-hidden="true">#</a> 基本操作的语法</h3>
<p>增加 <code v-pre>concat</code></p>
<p>删除、查询 <code v-pre>filter</code></p>
<p>修改 <code v-pre>map</code></p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> QuestionCard <span class="token keyword">from</span> <span class="token string">'./components/QuestionCard'</span>

<span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>questionList<span class="token punctuation">,</span> setQuestionList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q1'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷1'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q2'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷2'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q3'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷3'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q4'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷4'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token comment">// 添加 concat</span>
      questionList<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">'qs'</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'问卷'</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
        isPublished<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">deleteQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不可变数据</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token comment">// 删除/查询 filter</span>
      questionList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>q <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">publishQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token comment">// 修改 map</span>
      questionList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>q <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span> <span class="token keyword">return</span> q

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>q<span class="token punctuation">,</span>
          isPublished<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">问卷列表页2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>questionList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>question <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> isPublished <span class="token punctuation">}</span> <span class="token operator">=</span> question
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QuestionCard</span></span>
              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span>
              <span class="token attr-name">isPublished</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isPublished<span class="token punctuation">}</span></span>
              <span class="token attr-name">deleteQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>deleteQuestion<span class="token punctuation">}</span></span>
              <span class="token attr-name">publishQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>publishQuestion<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">新增问卷</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> List2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="immer" tabindex="-1"><a class="header-anchor" href="#immer" aria-hidden="true">#</a> immer</h3>
<p><code v-pre>immer</code> 是第三库，用来实现更方便的 增、删、改、查</p>
<p>增加 <code v-pre>push</code></p>
<p>删除/查找 <code v-pre>findIndex</code> 、<code v-pre>splice</code></p>
<p>修改 <code v-pre>find</code>，直接修改属性 <code v-pre>.属性名</code></p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> QuestionCard <span class="token keyword">from</span> <span class="token string">'./components/QuestionCard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> produce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'immer'</span>

<span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>questionList<span class="token punctuation">,</span> setQuestionList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q1'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷1'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q2'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷2'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q3'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷3'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'q4'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'问卷4'</span><span class="token punctuation">,</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token comment">// setQuestionList(</span>
    <span class="token comment">//   // 添加 concat</span>
    <span class="token comment">//   questionList.concat({</span>
    <span class="token comment">//     id: 'qs' + r,</span>
    <span class="token comment">//     title: '问卷' + r,</span>
    <span class="token comment">//     isPublished: false,</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// )</span>

    <span class="token comment">// immer 增加</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token function">produce</span><span class="token punctuation">(</span>draft <span class="token operator">=></span> <span class="token punctuation">{</span>
        draft<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          id<span class="token operator">:</span> <span class="token string">'q'</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
          title<span class="token operator">:</span> <span class="token string">'问卷'</span> <span class="token operator">+</span> r<span class="token punctuation">,</span>
          isPublished<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">deleteQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不可变数据</span>
    <span class="token comment">// setQuestionList(</span>
    <span class="token comment">//   // 删除/查询 filter</span>
    <span class="token comment">//   questionList.filter(q => {</span>
    <span class="token comment">//     if (q.id === id) return false</span>
    <span class="token comment">//     else return true</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// )</span>

    <span class="token comment">// immer 删除</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token function">produce</span><span class="token punctuation">(</span>draft <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> draft<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>q <span class="token operator">=></span> q<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
        draft<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">publishQuestion</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// setQuestionList(</span>
    <span class="token comment">//   // 修改 map</span>
    <span class="token comment">//   questionList.map(q => {</span>
    <span class="token comment">//     if (q.id !== id) return q</span>

    <span class="token comment">//     return {</span>
    <span class="token comment">//       ...q,</span>
    <span class="token comment">//       isPublished: true,</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//   })</span>
    <span class="token comment">// )</span>

    <span class="token comment">// immer 修改</span>
    <span class="token function">setQuestionList</span><span class="token punctuation">(</span>
      <span class="token function">produce</span><span class="token punctuation">(</span>draft <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> q <span class="token operator">=</span> draft<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q<span class="token punctuation">)</span> q<span class="token punctuation">.</span>isPublished <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">问卷列表页2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>questionList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>question <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> isPublished <span class="token punctuation">}</span> <span class="token operator">=</span> question
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QuestionCard</span></span>
              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span></span>
              <span class="token attr-name">isPublished</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isPublished<span class="token punctuation">}</span></span>
              <span class="token attr-name">deleteQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>deleteQuestion<span class="token punctuation">}</span></span>
              <span class="token attr-name">publishQuestion</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>publishQuestion<span class="token punctuation">}</span></span>
            <span class="token punctuation">/></span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">新增问卷</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> List2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-类型基础知识补充" tabindex="-1"><a class="header-anchor" href="#typescript-类型基础知识补充" aria-hidden="true">#</a> Typescript 类型基础知识补充</h2>
<p><a href="https://www.tslang.cn/play/index.html" target="_blank" rel="noopener noreferrer">TypeScript 转 JavaScript 在线工具<ExternalLinkIcon/></a></p>
<h3 id="t-泛型的使用" tabindex="-1"><a class="header-anchor" href="#t-泛型的使用" aria-hidden="true">#</a> <code v-pre>&lt;T&gt;</code> 泛型的使用</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">print</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token generic-function"><span class="token function">print</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;T&gt;</code> 的含义就是等待类型被定义，也就是说可以在使用的时候再去定义类型</p>
<p>通常你在 typescript 中看到 <code v-pre>&lt;&gt;</code> 尖括号基本都是 <strong>泛型</strong></p>
<p><code v-pre>class</code> 中加 泛型</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>function print&lt;T&gt;(info: T) {
    console.log(info)
}

print&lt;string&gt;('hello')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="泛型定义一个数组" tabindex="-1"><a class="header-anchor" href="#泛型定义一个数组" aria-hidden="true">#</a> 泛型定义一个数组</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 泛型定义 字符类型的数组</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 直接命名定义数组类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ts-中获取一个类型" tabindex="-1"><a class="header-anchor" href="#ts-中获取一个类型" aria-hidden="true">#</a> TS 中获取一个类型</h3>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>import type { MouseEvent } from 'react'

function App() {
  const fn = (event: MouseEvent&lt;HTMLButtonElement&gt;) =&gt; {
    event.preventDefault() // 阻止默认行为
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子就是引入了类型 <code v-pre>MouseEvent</code> ，并且使用</p>
<h3 id="函数返回值类型定义" tabindex="-1"><a class="header-anchor" href="#函数返回值类型定义" aria-hidden="true">#</a> 函数返回值类型定义</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'xx'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构重命名" tabindex="-1"><a class="header-anchor" href="#解构重命名" aria-hidden="true">#</a> 解构重命名</h3>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> run<span class="token operator">:</span> handleCreateClick<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">handleCreateClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 相当于 执行 run()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partial-的妙用" tabindex="-1"><a class="header-anchor" href="#partial-的妙用" aria-hidden="true">#</a> Partial 的妙用</h3>
<p>定义复杂数据类型，可用 <code v-pre>?:</code> 定义一些可能不必有的属性</p>
<p>这样是话，b、c 可有，也可无，都不会报错</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ObjType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span>
  b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  c<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj1<span class="token operator">:</span> ObjType <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token string">'x'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果要定义的复杂数据类型过多，那就显得不灵活啦</p>
<p>那么，有没有什么 API 语法可以简化呢，答案是有的，<code v-pre>partial</code></p>
<p><code v-pre>partial</code> 有部分的意思</p>
<p>也就是说有 <code v-pre>partial</code> 用这个关键字定义后，定义的数据，只需要有预先定义的复杂数据类型的一部分即可</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ObjType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span>
  b<span class="token operator">:</span> <span class="token builtin">number</span>
  c<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj1<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>ObjType<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token string">'x'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件-与-props" tabindex="-1"><a class="header-anchor" href="#组件-与-props" aria-hidden="true">#</a> 组件 与 props</h2>
<h3 id="react-一切皆组件" tabindex="-1"><a class="header-anchor" href="#react-一切皆组件" aria-hidden="true">#</a> React 一切皆组件</h3>
<ul>
<li>组件就是一个 UI 片段</li>
<li>拥有独立的逻辑和显示</li>
<li>组件可大可小，可嵌套</li>
</ul>
<p>react 有两种组件，class 组件 和 函数组件</p>
<p>React16 以后，React 推崇 函数组件 和 Hooks</p>
<p>组件是一个函数（执行放回 JSX 片段），组件初次渲染执行这个函数</p>
<p>任何 state 更新，都会触发组件的更新（重新执行函数）</p>
<h3 id="状态提升" tabindex="-1"><a class="header-anchor" href="#状态提升" aria-hidden="true">#</a> 状态提升</h3>
<p>状态提升 <code v-pre>state</code></p>
<p>数据源在父组件里面，每个子组件只需要执行父组件传过来的数据和方法，这就是 <strong>状态提升</strong></p>
<h3 id="outlet" tabindex="-1"><a class="header-anchor" href="#outlet" aria-hidden="true">#</a> Outlet</h3>
<p>类似于 vue 中 slot 插槽</p>
<h3 id="受控组件-与-非受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件-与-非受控组件" aria-hidden="true">#</a> 受控组件 与 非受控组件</h3>
<ul>
<li>受控组件：值同步到 state，使用 value 属性</li>
<li>非受控组件：值不同步 state，使用 defaultValue 属性</li>
<li>React 推荐使用受控组件，看似繁琐，实则更加可控</li>
</ul>
<h2 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h2>
<h3 id="为什么-react-需要使用到-usestate-这样的钩子函数呢" tabindex="-1"><a class="header-anchor" href="#为什么-react-需要使用到-usestate-这样的钩子函数呢" aria-hidden="true">#</a> 为什么 react 需要使用到 useState 这样的钩子函数呢</h3>
<p>因为普通 js 变量，无法触发组件的更新，useState 可以触发这样的更新</p>
<p>触发条件就是使用，setCount 进行更新</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }
  // 列表页
  return (
    &lt;&gt;
      &lt;div&gt;
        &lt;button onClick={add}&gt;add {count}&lt;/button&gt;
      &lt;/div&gt;
    &lt;/&gt;
  )
}

export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="state-有哪些特点" tabindex="-1"><a class="header-anchor" href="#state-有哪些特点" aria-hidden="true">#</a> state 有哪些特点?</h3>
<ol>
<li>state 的更新是异步的，所以无法拿到最新的 state 值</li>
</ol>
<blockquote>
<p>[注意]</p>
<p>如果说一个变量 不用于 JSX 中显示，那就不要用 setState 来管理它 (因为 useState 会触发组件更新，所以没必要)，用 useRef</p>
</blockquote>
<ol start="2">
<li>state 可能会被合并</li>
</ol>
<p>add 函数执行结果一次的结果只加 1</p>
<p>因为，每次执行 <code v-pre>setCount(count + 1)</code> ，使用值进行更新，都被合并了</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>import React, { FC, useState } from 'react'

const Demo: FC = () =&gt; {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    // setCount(count =&gt; count + 1) setCount 的第二种写法
  }

  return (
    &lt;div&gt;
      &lt;button onClick={add}&gt;add {count}&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是使用函数来更新就不会被合并，因为函数是一个比较复杂的结构</p>
<p>add 函数执行结果一次的结果加 5</p>
<div class="language-react line-numbers-mode" data-ext="react"><pre v-pre class="language-react"><code>import React, { FC, useState } from 'react'

const Demo: FC = () =&gt; {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    setCount(count =&gt; count + 1)
    // setCount(count =&gt; count + 1) setCount 的第二种写法
  }

  return (
    &lt;div&gt;
      &lt;button onClick={add}&gt;add {count}&lt;/button&gt;
    &lt;/div&gt;
  )
}

export default Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>不可变数据 ！！！</li>
</ol>
<h3 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h3>
<p><code v-pre>useEffect</code> 能监听组件的生命周期，创建、更新、销毁</p>
<p>函数是一个组件，<code v-pre>useEffect</code> 在函数中执行</p>
<ol>
<li>只执行一次，数组中为空，只执行一次</li>
</ol>
<p>谁引用了 List2，谁就执行 useEffect 一次</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'加载 ajax 网络请求'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>监听 <code v-pre>useState</code> 数据变化</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> List2<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'count change'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>监听函数 创建 与 销毁</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'question card mounted'</span><span class="token punctuation">)</span> <span class="token comment">// 监听创建</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'question card unmounted'</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token comment">// 监听销毁</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注]</strong></p>
<p><code v-pre>useEffect</code> 在开发环境下会执行两次?</p>
<p>先创建一次，销毁一次，再次创建</p>
<p>从 React 18 开始，useEffect 在开发环境下会执行两次</p>
<p>这样做的目的，模拟组件创建、销毁，再创建的完整流程，及早暴露问题</p>
<p>生产环境下会执行一次</p>
<h3 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h3>
<p>一般用于操作 DOM</p>
<p>也可传入普通 JS 变量, 但更新不会触发 <code v-pre>rerender</code></p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nameRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token string">'lin'</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nameRef<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token string">'linjk'</span> <span class="token comment">// 修改 ref 值, 不会触发 rerender (state 修改组件会触发组件的 rerender)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">name </span><span class="token punctuation">{</span>nameRef<span class="token punctuation">.</span>current<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>changeName<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">change name</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h3>
<ul>
<li>函数组件, 每次 state 更新都会重新执行函数</li>
<li>useMemo 可以缓存数据, 不用每次执行函数都重新生成</li>
<li>可用于计算量较大的场景，缓存提高性能</li>
</ul>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> setNum1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>num2<span class="token punctuation">,</span> setNum2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'gen sum ...'</span><span class="token punctuation">)</span> <span class="token comment">// 缓存</span>
    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h3>
<p>类似与 <code v-pre>useDemo</code> 同样是用来缓存组件</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fn2 text:'</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>text<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义-hooks" tabindex="-1"><a class="header-anchor" href="#自定义-hooks" aria-hidden="true">#</a> 自定义 hooks</h3>
<p>类似于，定义一个外部函数，可以引入使用</p>
<p>外部 hooks</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// hooks/useTitle.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">useTitle</span><span class="token punctuation">(</span>title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> title
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useTitle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 hooks</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token comment">// index.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> useTitle <span class="token keyword">from</span> <span class="token string">'./hooks/useTitle'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useTitle</span><span class="token punctuation">(</span><span class="token string">'App page 2'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">App page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><strong>自定义 hooks (获取鼠标位置)</strong></li>
</ol>
<p>外部 hooks</p>
<p>下面 <code v-pre>mouseMoveHandler</code> 每次执行这个函数都会创建一次，我们鼠标移动一次就会创建一次，可以使用 <code v-pre>useCallback</code> 进行缓存起来</p>
<p>比较大量的计算可以使用 <code v-pre>useCallback</code>，比较小的计算可以不同，根据具体情况而定</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token comment">// hooks/useMouse.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// 获取鼠标位置</span>
<span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> setX<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> setY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> mouseMoveHandler <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setX</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientX<span class="token punctuation">)</span>
    <span class="token function">setY</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 监听鼠标事件</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>

    <span class="token comment">// 组件销毁时，一定要解绑 DOM 事件 !!! 可能出现内存泄漏问题</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useMouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用 hooks</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> useMouse <span class="token keyword">from</span> <span class="token string">'./hooks/useMouse'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 列表页</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        App page </span><span class="token punctuation">{</span>x<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token punctuation">{</span>y<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>模拟 hooks 异步加载数据</strong></li>
</ol>
<p>外部 hooks</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// hooks/getInfo.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token comment">// Promsie 模拟请求</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useGetInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>info<span class="token punctuation">,</span> setInfo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>info <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
      <span class="token function">setInfo</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> info <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useGetInfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用 hooks</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> useGetInfo <span class="token keyword">from</span> <span class="token string">'./hooks/useGetInfo'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> info <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useGetInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">App page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>loading <span class="token operator">?</span> <span class="token string">'加载中...'</span> <span class="token operator">:</span> info<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3>
<p>函数组件的 销毁阶段</p>
<p>下面例子的组件销毁阶段，就在于 <code v-pre>useEffect</code> 中 return 返回的函数，就是组件销毁阶段要执行的东西</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// 获取鼠标位置</span>
<span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> setX<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> setY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> mouseMoveHandler <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setX</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientX<span class="token punctuation">)</span>
    <span class="token function">setY</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 监听鼠标事件</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>

    <span class="token comment">// 组件销毁时，一定要解绑 DOM 事件 !!! 可能出现内存泄漏问题</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> mouseMoveHandler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useMouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三方-hooks-的使用" tabindex="-1"><a class="header-anchor" href="#第三方-hooks-的使用" aria-hidden="true">#</a> 第三方 Hooks 的使用</h3>
<ul>
<li>国内流行 <a href="https://ahooks.gitee.io/zh-CN/guide" target="_blank" rel="noopener noreferrer">ahooks<ExternalLinkIcon/></a></li>
<li>国外流行 <a href="https://github.com/streamich/react-use" target="_blank" rel="noopener noreferrer">React Hooks<ExternalLinkIcon/></a></li>
</ul>
<p><code v-pre>ahooks</code> 的使用案例，<code v-pre>useTitle</code>、<code v-pre>useMouse</code> 的使用</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTitle<span class="token punctuation">,</span> useMouse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ahooks'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useTitle</span><span class="token punctuation">(</span><span class="token string">'App page 3'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> clientX<span class="token punctuation">,</span> clientY <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 列表页</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">App page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>clientX<span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token punctuation">{</span>clientY<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hooks-使用规则" tabindex="-1"><a class="header-anchor" href="#hooks-使用规则" aria-hidden="true">#</a> Hooks 使用规则</h3>
<ul>
<li>必须用 useXxxx 格式来命名</li>
<li>只能在两个地方调用 Hook (组件内，其他 Hook 内)</li>
<li>必须保证每次的调用顺序一致 (不能放在 if for 内部)</li>
</ul>
<h3 id="hooks-闭包陷阱" tabindex="-1"><a class="header-anchor" href="#hooks-闭包陷阱" aria-hidden="true">#</a> Hooks 闭包陷阱</h3>
<ul>
<li>当异步函数获取 state 时，可能不是当前最新的 state</li>
</ul>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">alertFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token comment">// count 5 闭包</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">闭包陷阱</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">add</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alertFn<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">alert</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token comment">// 点击 alert 后，多次点击 add，弹窗出来的接口，不等于 count</span>
    <span class="token comment">// 也就所谓的 闭包陷阱</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决的办法，使用 <code v-pre>useRef</code>，因为它的值是引用类型，根据原值的改变而改变</p>
<p>原先用 <code v-pre>useState</code> 定的值是值类型，所以点击 <code v-pre>alert</code> 的时候，<code v-pre>count</code> 是 5 的话，那么弹窗的值也是 5</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> countRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    countRef<span class="token punctuation">.</span>current <span class="token operator">=</span> count
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">alertFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// alert(counr) // count 值类型</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>countRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token comment">// ref 引用类型</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">闭包陷阱</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">add</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alertFn<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">alert</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token comment">// 点击 alert 后，多次点击 add，弹窗出来的接口，不等于 count</span>
    <span class="token comment">// 也就所谓的 闭包陷阱</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2>
<h3 id="内联样式条件判断怎么写" tabindex="-1"><a class="header-anchor" href="#内联样式条件判断怎么写" aria-hidden="true">#</a> 内联样式条件判断怎么写</h3>
<p>基础写法</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> isPublished <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">let</span> itemClassName <span class="token operator">=</span> <span class="token string">'list-item'</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPublished<span class="token punctuation">)</span> itemClassName <span class="token operator">+=</span> <span class="token string">' published'</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemClassName<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用第三方插件 <code v-pre>classnames</code> 进行条件判断</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> isPublished <span class="token operator">=</span> <span class="token boolean">true</span>
  
  <span class="token keyword">const</span> itemClassName <span class="token operator">=</span> <span class="token function">classnames</span><span class="token punctuation">(</span><span class="token string">'list-item'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> published<span class="token operator">:</span> isPublished <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> itemClassName <span class="token operator">=</span> <span class="token function">classnames</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">'list-item'</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    published<span class="token operator">:</span> isPublished<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>itemClassName<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  )
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决-clasname-可能重复的问题" tabindex="-1"><a class="header-anchor" href="#解决-clasname-可能重复的问题" aria-hidden="true">#</a> 解决 clasName 可能重复的问题</h3>
<p>使用 <code v-pre>CSS Module</code> 进行解决</p>
<ul>
<li>每个 CSS 文件都当做单独的模块，命令 <code v-pre>xxx.module.css</code></li>
<li>为每个 <code v-pre>className</code> 增加后缀名，不让它们重复</li>
<li><code v-pre>Create-React-App</code> 原生支持 <code v-pre>CSS Module</code></li>
</ul>
<p>使用方法就是 将需要引入的 css 命名后缀 <code v-pre>.css</code> 改为 <code v-pre>.module.css</code></p>
<p>那么在构建的是时候，就会为该组件的类名等，添加前后缀来进行区别！</p>
<h3 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS-in-JS</h3>
<p>使用 js 的方式写 css</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'styled-components'</span>

<span class="token comment">// Button 组件</span>
<span class="token keyword">type</span> <span class="token class-name">ButtonPropsType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  primary<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">// 定义属性类型</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义组件</span>
<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>props<span class="token operator">:</span> ButtonPropsType<span class="token punctuation">)</span> <span class="token operator">=></span>
    props<span class="token punctuation">.</span>primary <span class="token operator">&amp;&amp;</span> <span class="token comment">// 当属性 primary 存在的时候，css 中的内容生效</span>
    css<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      background: palevioletred;
      color: white;
    </span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">`</span></span>

<span class="token comment">// Container 组件，定义 div 的元素居中显示</span>
<span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  text-align: center;
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">style-component</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Container</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Normal Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">primary</span><span class="token punctuation">></span></span><span class="token plain-text">primary Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Container</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>[注]</strong></p>
<p>关于 div`` 这个语法的解释</p>
<p>div`` 类似一个函数执行</p>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  text-align: center;
</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/基础入门/assets/image-20230603223211437.png" alt="image-20230603223211437"></p>
<p>可以看到 类似函数的调用，但是返回的是一个数组，且有一些属性信息</p>
<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<h3 id="路由跳转的三种方式" tabindex="-1"><a class="header-anchor" href="#路由跳转的三种方式" aria-hidden="true">#</a> 路由跳转的三种方式</h3>
<ol>
<li>直接通过 函数的方式 跳转</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token keyword">const</span> Home<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nav <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">nav</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">返回</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text"> // 返回上一级
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>通过 <code v-pre>nav</code> 进行 跳转</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token keyword">const</span> Home<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nav <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">clickHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// nav('/login?b=20')</span>
    <span class="token function">nav</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      pathname<span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
      search<span class="token operator">:</span> <span class="token string">'b=21'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>通过 <code v-pre>Link</code> 插件进行 跳转</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token keyword">const</span> Home<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/register?a=10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">注册</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取参数" tabindex="-1"><a class="header-anchor" href="#获取参数" aria-hidden="true">#</a> 获取参数</h3>
<ol>
<li>获取动态路由的动态参数</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span> <span class="token comment">// 通过 useParams 获取</span>

<span class="token keyword">const</span> Edit<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token string">''</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Edit </span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Edit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>获取当前 <code v-pre>url</code> 的参数</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token keyword">const</span> List<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchParams<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'keyword'</span><span class="token punctuation">,</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'keyword'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> List
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>获取当前路由路径的方法</li>
</ol>
<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>

<span class="token keyword">const</span> ManageLayout<span class="token operator">:</span> <span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'pathname'</span><span class="token punctuation">,</span> pathname<span class="token punctuation">)</span> <span class="token comment">// /manage/list</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
      <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/manage/list'</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">'default'</span> <span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">}</span></span> <span class="token comment">// pathname.startsWith('/manage/list') 用于判断路径是匹配</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
      <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BarsOutlined</span></span> <span class="token attr-name">rev</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">undefined</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">nav</span><span class="token punctuation">(</span><span class="token string">'/manage/list'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span><span class="token plain-text">
  )
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> Mock</h2>
<h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h3>
<p>mock.js 两大功能：劫持 Ajax + 全面的 Random 能力</p>
<p>把 mock.js 用于 nodejs 服务端，使用 Random 能力</p>
<h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3>
<p>通常使用的话，主要使用另开一个服务运行 <code v-pre>mockjs</code></p>
<p>如果使用原项目的话，请求路径被劫持，如果这个 mock 上线了，会导致相同的线上接口返回的是 mock 数据，而无法得到真实数据</p>
<p>重新写一个 mock 服务花不了多少时间，能重新开一个服务就开一个服务</p>
<h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2>
<p>使用 <code v-pre>craco</code> 进行跨域代理</p>
<h3 id="具体使用方法" tabindex="-1"><a class="header-anchor" href="#具体使用方法" aria-hidden="true">#</a> 具体使用方法</h3>
<ol>
<li>安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @craco/craco
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>使用方法、根目录下建一个 <code v-pre>craco.config.js</code> 文件</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 根目录下建一个 </span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// common.js</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token string">'http://localhost:3001'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restful-api" tabindex="-1"><a class="header-anchor" href="#restful-api" aria-hidden="true">#</a> Restful API</h2>
<h3 id="设计规范" tabindex="-1"><a class="header-anchor" href="#设计规范" aria-hidden="true">#</a> 设计规范</h3>
<ul>
<li>method 按照，对资源的操作类型，get、post、patch (或者 put 修改)、delete，进行操作</li>
<li>path 按照，每个路径代表某一类资源，加上 id 就代表这一类资源 <code v-pre>/api/question/:id</code></li>
</ul>
<h3 id="状态码规范" tabindex="-1"><a class="header-anchor" href="#状态码规范" aria-hidden="true">#</a> 状态码规范</h3>
<p>总结：</p>
<p>1xx：相关信息
2xx：操作成功
3xx：重定向
4xx：客户端错误
5xx：服务器错误</p>
<p>详细：</p>
<p>200 <code v-pre>OK - [GET]</code>：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）
201 <code v-pre>CREATED - [POST/PUT/PATCH]</code>：用户新建或修改数据成功
202 <code v-pre>Accepted - [*]</code>：表示一个请求已经进入后台排队（异步任务）
204 <code v-pre>NO CONTENT - [DELETE]</code>：用户删除数据成功。
400 <code v-pre>INVALID REQUEST - [POST/PUT/PATCH]</code>：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的
401 <code v-pre>Unauthorized - [*]</code>：表示用户没有权限（令牌、用户名、密码错误）
403 <code v-pre>Forbidden - [*]</code> 表示用户得到授权（与401错误相对），但是访问是被禁止的
404 <code v-pre>NOT FOUND - [*]</code>：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的
406 <code v-pre>Not Acceptable - [GET]</code>：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）
410 <code v-pre>Gone -[GET]</code>：用户请求的资源被永久删除，且不会再得到的
422 <code v-pre>Unprocesable entity - [POST/PUT/PATCH]</code> 当创建一个对象时，发生一个验证错误
500 <code v-pre>INTERNAL SERVER ERROR - [*]</code>：服务器发生错误，用户将无法判断发出的请求是否成功</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status" target="_blank" rel="noopener noreferrer">HTTP 响应状态码 参考<ExternalLinkIcon/></a></p>
<h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h2>
</div></template>


