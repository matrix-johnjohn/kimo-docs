import{_ as a,c as n,o as p,S as e}from"./chunks/framework.CxtrxKhu.js";const u=JSON.parse('{"title":"微服务项目搭建流程","description":"","frontmatter":{"sticky":99,"banner":{"type":"img","bgurl":"https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg","bannerText":"感谢你看我的教程"},"cover":"https://www.logosc.cn/uploads/resources/2018/11/29/1543459457_thumb.jpg","author":"kimo","singleColumn":true,"categories":"后端","tags":["Maven","SpringCloud"],"title":"微服务项目搭建流程"},"headers":[],"relativePath":"posts/back/SpringCloud/1.SpringCloud.md","filePath":"posts/back/SpringCloud/1.SpringCloud.md"}'),t={name:"posts/back/SpringCloud/1.SpringCloud.md"};function l(i,s,c,o,d,r){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="springcloud基础" tabindex="-1">SpringCloud基础 <a class="header-anchor" href="#springcloud基础" aria-label="Permalink to &quot;SpringCloud基础&quot;">​</a></h1><h3 id="_1-安装依赖" tabindex="-1">1.安装依赖 <a class="header-anchor" href="#_1-安装依赖" aria-label="Permalink to &quot;1.安装依赖&quot;">​</a></h3><p>在父工程中配置项目的<code>dependencyManagement</code>;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependencyManagement&gt;</span></span>
<span class="line"><span>        &lt;dependencies&gt;</span></span>
<span class="line"><span>            &lt;!--SpringBoot--&gt;</span></span>
<span class="line"><span>            &lt;dependency&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;spring-boot-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;version&gt;3.2.5&lt;/version&gt;</span></span>
<span class="line"><span>                &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span>                &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span>            &lt;/dependency&gt;</span></span>
<span class="line"><span>            &lt;!--SpringCloud--&gt;</span></span>
<span class="line"><span>            &lt;dependency&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;version&gt;2023.0.2&lt;/version&gt;</span></span>
<span class="line"><span>                &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span>                &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span>            &lt;/dependency&gt;</span></span>
<span class="line"><span>            &lt;!--SpringCloudAlibaba--&gt;</span></span>
<span class="line"><span>            &lt;dependency&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;version&gt;2023.0.1.2&lt;/version&gt;</span></span>
<span class="line"><span>                &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span>                &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span>            &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;/dependencies&gt;</span></span>
<span class="line"><span>&lt;/dependencyManagement&gt;</span></span></code></pre></div><h3 id="_2-拆分服务" tabindex="-1">2.拆分服务 <a class="header-anchor" href="#_2-拆分服务" aria-label="Permalink to &quot;2.拆分服务&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>直接瞎几把乱拆,先横着拆,再他妈的纵着拆;</span></span></code></pre></div><h3 id="_3-远程调用" tabindex="-1">3.远程调用 <a class="header-anchor" href="#_3-远程调用" aria-label="Permalink to &quot;3.远程调用&quot;">​</a></h3><h6 id="_1-resttemplate" tabindex="-1">(1)RestTemplate <a class="header-anchor" href="#_1-resttemplate" aria-label="Permalink to &quot;(1)RestTemplate&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    @Bean//注入RestTemplate到Spring容器</span></span>
<span class="line"><span>    public RestTemplate restTemplate(){</span></span>
<span class="line"><span>        return new RestTemplate();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>    void contextLoads() {</span></span>
<span class="line"><span>        CardListVo cardListVo=new CardListVo();//请求体</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        HttpHeaders headers=new HttpHeaders();//请求头</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        headers.set(&quot;Authorization&quot;, &quot;Bearer token&quot;);//设置请求头</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        HttpEntity&lt;CardListVo&gt;entity=new HttpEntity&lt;&gt;(cardListVo,headers);//请求实体预备</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ResponseEntity&lt;Result&gt;response=new RestTemplate().exchange(</span></span>
<span class="line"><span>                &quot;http://localhost:9002/cate/addToCart&quot;,</span></span>
<span class="line"><span>                HttpMethod.POST,</span></span>
<span class="line"><span>                entity,</span></span>
<span class="line"><span>                Result.class</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,10)]))}const h=a(t,[["render",l]]);export{u as __pageData,h as default};
