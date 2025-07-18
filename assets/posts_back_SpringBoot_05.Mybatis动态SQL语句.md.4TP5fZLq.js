import{_ as a,c as n,o as t,S as e}from"./chunks/framework.CxtrxKhu.js";const g=JSON.parse('{"title":"动态SQL","description":"","frontmatter":{},"headers":[],"relativePath":"posts/back/SpringBoot/05.Mybatis动态SQL语句.md","filePath":"posts/back/SpringBoot/05.Mybatis动态SQL语句.md"}'),p={name:"posts/back/SpringBoot/05.Mybatis动态SQL语句.md"};function l(i,s,o,c,u,d){return t(),n("div",null,s[0]||(s[0]=[e(`<h1 id="动态sql" tabindex="-1">动态SQL <a class="header-anchor" href="#动态sql" aria-label="Permalink to &quot;动态SQL&quot;">​</a></h1><h3 id="条件判断" tabindex="-1">条件判断 <a class="header-anchor" href="#条件判断" aria-label="Permalink to &quot;条件判断&quot;">​</a></h3><p><code>&lt;if&gt;</code>标签判断条件是否成立，如果条件为true，则拼接SQL;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;select id=&quot;findActiveBlogWithTitleLike&quot; resultType=&quot;Blog&quot;&gt;</span></span>
<span class="line"><span>  SELECT * FROM BLOG</span></span>
<span class="line"><span>  WHERE state = &#39;ACTIVE&#39;</span></span>
<span class="line"><span>  &lt;if test=&quot;title != null&quot;&gt;</span></span>
<span class="line"><span>    AND title like #{title}</span></span>
<span class="line"><span>  &lt;/if&gt;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><p><code>set</code>标签用于处理逗号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;update id=&quot;updateAuthorIfNecessary&quot;&gt;</span></span>
<span class="line"><span>  update Author</span></span>
<span class="line"><span>    &lt;set&gt;</span></span>
<span class="line"><span>      &lt;if test=&quot;username != null&quot;&gt;username=#{username},&lt;/if&gt;</span></span>
<span class="line"><span>      &lt;if test=&quot;password != null&quot;&gt;password=#{password},&lt;/if&gt;</span></span>
<span class="line"><span>      &lt;if test=&quot;email != null&quot;&gt;email=#{email},&lt;/if&gt;</span></span>
<span class="line"><span>      &lt;if test=&quot;bio != null&quot;&gt;bio=#{bio}&lt;/if&gt;</span></span>
<span class="line"><span>    &lt;/set&gt;</span></span>
<span class="line"><span>  where id=#{id}</span></span>
<span class="line"><span>&lt;/update&gt;</span></span></code></pre></div><p><code>&lt;where&gt;</code> 标签根据查询条件，来生成where关键字，并会自动去除条件前面多余的and或or;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;select id=&quot;findActiveBlogLike&quot; resultType=&quot;Blog&quot;&gt;</span></span>
<span class="line"><span>  SELECT * FROM BLOG</span></span>
<span class="line"><span>  &lt;where&gt;</span></span>
<span class="line"><span>    &lt;if test=&quot;state != null&quot;&gt;</span></span>
<span class="line"><span>         state = #{state}</span></span>
<span class="line"><span>    &lt;/if&gt;</span></span>
<span class="line"><span>    &lt;if test=&quot;title != null&quot;&gt;</span></span>
<span class="line"><span>        AND title like #{title}</span></span>
<span class="line"><span>    &lt;/if&gt;</span></span>
<span class="line"><span>    &lt;if test=&quot;author != null and author.name != null&quot;&gt;</span></span>
<span class="line"><span>        AND author_name like #{author.name}</span></span>
<span class="line"><span>    &lt;/if&gt;</span></span>
<span class="line"><span>  &lt;/where&gt;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h3><h3 id="迭代循环" tabindex="-1">迭代循环 <a class="header-anchor" href="#迭代循环" aria-label="Permalink to &quot;迭代循环&quot;">​</a></h3><p><code>&lt;forEach&gt;</code>标签用于迭代集合</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;select id=&quot;selectPostIn&quot; resultType=&quot;domain.blog.Post&quot;&gt;</span></span>
<span class="line"><span>  SELECT * FROM POST P</span></span>
<span class="line"><span>  WHERE ID in</span></span>
<span class="line"><span>  &lt;foreach item=&quot;item&quot; index=&quot;index&quot; collection=&quot;list&quot;</span></span>
<span class="line"><span>      open=&quot;(&quot; separator=&quot;,&quot; close=&quot;)&quot;&gt;</span></span>
<span class="line"><span>        #{item}</span></span>
<span class="line"><span>  &lt;/foreach&gt;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div>`,12)]))}const h=a(p,[["render",l]]);export{g as __pageData,h as default};
