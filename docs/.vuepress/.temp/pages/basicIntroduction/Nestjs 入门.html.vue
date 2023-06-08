<template><div><h1 id="nestjs-入门" tabindex="-1"><a class="header-anchor" href="#nestjs-入门" aria-hidden="true">#</a> Nestjs 入门</h1>
<h2 id="ioc-控制反转-di-依赖注入-没懂" tabindex="-1"><a class="header-anchor" href="#ioc-控制反转-di-依赖注入-没懂" aria-hidden="true">#</a> IOC 控制反转 DI 依赖注入 (<code v-pre>没懂</code>)</h2>
<h3 id="什么是强耦合" tabindex="-1"><a class="header-anchor" href="#什么是强耦合" aria-hidden="true">#</a> 什么是强耦合</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"小满"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，上面的代码，如果 <code v-pre>class A</code> constructor 改为参数传入 (如下面代码)</p>
<p>那么，<code v-pre>class B</code>、<code v-pre>class C</code> 也需要修改，他们的关系非常混乱，这就是一种<strong>强耦合</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"小满"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// 这里需要改</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// 这里需要改</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决这样的一个问题，我们需要使用一种<strong>依赖注入</strong>的方式来解决</p>
<p>下面是改造后的代码</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"小满"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Container</span> <span class="token punctuation">{</span>
  mo<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">provide</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> mo<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mo<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> mo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mo<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> mo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mo<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">"小米哈哈哈"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mo<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">"小名哈哈哈"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  c<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>mo<span class="token operator">:</span> Container<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> mo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>c <span class="token operator">=</span> mo<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h2>
<h3 id="controller-request" tabindex="-1"><a class="header-anchor" href="#controller-request" aria-hidden="true">#</a> Controller Request</h3>
<p>控制器的作用就是拿到从前端传过来的数据，Nestjs 提供了方法参数装饰器，用于帮助我们快速获取参数</p>
<table>
<thead>
<tr>
<th>@Request()</th>
<th>req</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Response()</td>
<td>res</td>
</tr>
<tr>
<td>@Next()</td>
<td>next</td>
</tr>
<tr>
<td>@Session()</td>
<td>req.session</td>
</tr>
<tr>
<td>@Param(key?: string)</td>
<td>req.params<code v-pre>/</code>req.params[key]</td>
</tr>
<tr>
<td>@Body(key?: string)</td>
<td>req.body<code v-pre>/</code>req.body[key]</td>
</tr>
<tr>
<td>@Query(key?: string)</td>
<td>req.query<code v-pre>/</code>req.query[key]</td>
</tr>
<tr>
<td>@Headers(name?: string)</td>
<td>req.headers<code v-pre>/</code>req.headers[name]</td>
</tr>
<tr>
<td>@HttpCode(code: Number)</td>
<td>状态码: 200、300、500 ...</td>
</tr>
<tr>
<td>@Headers()</td>
<td>headers</td>
</tr>
</tbody>
</table>
<p>具体代码演示</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Controller<span class="token punctuation">,</span>
  Get<span class="token punctuation">,</span>
  Query<span class="token punctuation">,</span>
  Post<span class="token punctuation">,</span>
  Request<span class="token punctuation">,</span>
  Headers<span class="token punctuation">,</span>
  HttpCode<span class="token punctuation">,</span>
  Body<span class="token punctuation">,</span>
  Param<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/common'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./user.service'</span><span class="token punctuation">;</span>
<span class="token comment">// import { CreateUserDto } from './dto/create-user.dto';</span>
<span class="token comment">// import { UpdateUserDto } from './dto/update-user.dto';</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Controller</span></span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Query</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> query<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//@request 的语法糖，不用写 req.query，可以简写为 query</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      message<span class="token operator">:</span> query<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// findAll(@Request() req) {</span>
  <span class="token comment">//   console.log(req.query);</span>

  <span class="token comment">//   return {</span>
  <span class="token comment">//     code: 200,</span>
  <span class="token comment">//     message: req.query.name,</span>
  <span class="token comment">//   };</span>
  <span class="token comment">// }</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">)</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token comment">// message: body.name,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// create(@Request() req) {</span>
  <span class="token comment">//   console.log(req.body);</span>

  <span class="token comment">//   return {</span>
  <span class="token comment">//     code: 200,</span>
  <span class="token comment">//     message: req.body.name,</span>
  <span class="token comment">//   };</span>
  <span class="token comment">// }</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token string">':id'</span><span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">HttpCode</span></span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token comment">// 状态码</span>
  <span class="token function">findId</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Param</span></span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span> params<span class="token punctuation">,</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">Headers</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// findId(@Request() req) {</span>
  <span class="token comment">//   console.log(req.params);</span>
  <span class="token comment">//   return {</span>
  <span class="token comment">//     code: 200,</span>
  <span class="token comment">//   };</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提供者-没懂" tabindex="-1"><a class="header-anchor" href="#提供者-没懂" aria-hidden="true">#</a> 提供者 <code v-pre>没懂</code></h2>
</div></template>


