import{_ as t,c as l,o as e,a,S as p,b as n}from"./chunks/framework.CxtrxKhu.js";const h=JSON.parse('{"title":"Logback日志","description":"","frontmatter":{"sticky":0,"banner":{"type":"img","bgurl":"https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg","bannerText":"SpringBoot项目后端搭建流程"},"cover":"https://www.logosc.cn/uploads/resources/2018/11/29/1543459457_thumb.jpg","author":"kimo","singleColumn":true,"categories":"后端","tags":["SpringBoot","Logback"]},"headers":[],"relativePath":"posts/back/SpringBoot/07.Logback日志.md","filePath":"posts/back/SpringBoot/07.Logback日志.md"}'),o={name:"posts/back/SpringBoot/07.Logback日志.md"};function c(r,s,i,g,d,u){return e(),l("div",null,s[0]||(s[0]=[a("h1",{id:"logback日志",tabindex:"-1"},[n("Logback日志 "),a("a",{class:"header-anchor",href:"#logback日志","aria-label":'Permalink to "Logback日志"'},"​")],-1),a("h3",{id:"引入配置文件",tabindex:"-1"},[a("strong",null,"引入配置文件"),n(),a("a",{class:"header-anchor",href:"#引入配置文件","aria-label":'Permalink to "**引入配置文件**"'},"​")],-1),a("p",null,[n("在"),a("code",null,"resources"),n("文件夹下添加"),a("code",null,"logback.xml"),n("日志配置;")],-1),a("p",null,[a("img",{src:"https://cdn.nlark.com/yuque/0/2025/png/49812343/1741832045124-bf026b8f-02a3-453f-888e-73c0c367c2fc.png",alt:"","data-tag":"post-image",loading:"lazy",onload:"this.onload=null;this.style.opacity=1;"})],-1),p(`<h3 id="配置logback-xml文件" tabindex="-1">配置<code>logback.xml</code>文件 <a class="header-anchor" href="#配置logback-xml文件" aria-label="Permalink to &quot;配置\`logback.xml\`文件&quot;">​</a></h3><p><code>logback.xml</code>配置样例;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>  &lt;!-- 控制台输出 --&gt;</span></span>
<span class="line"><span>  &lt;appender name=&quot;STDOUT&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>    &lt;encoder&gt;</span></span>
<span class="line"><span>      &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}-%msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span>    &lt;/encoder&gt;</span></span>
<span class="line"><span>  &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- 文件输出 --&gt;</span></span>
<span class="line"><span>  &lt;appender name=&quot;FILE&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span>    &lt;file&gt;D:/tlias.log&lt;/file&gt;</span></span>
<span class="line"><span>    &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 日志文件输出的文件名, %i表示序号 --&gt;</span></span>
<span class="line"><span>      &lt;FileNamePattern&gt;D:/tlias-%d{yyyy-MM-dd}-%i.log&lt;/FileNamePattern&gt;</span></span>
<span class="line"><span>      &lt;!-- 最多保留的历史日志文件数量 --&gt;</span></span>
<span class="line"><span>      &lt;MaxHistory&gt;30&lt;/MaxHistory&gt;</span></span>
<span class="line"><span>      &lt;!-- 最大文件大小，超过这个大小会触发滚动到新文件，默认为 10MB --&gt;</span></span>
<span class="line"><span>      &lt;maxFileSize&gt;10MB&lt;/maxFileSize&gt;</span></span>
<span class="line"><span>      &lt;!-- 总日志文件的最大历史天数 --&gt;</span></span>
<span class="line"><span>      &lt;totalSizeCap&gt;1GB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span>    &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span>    &lt;encoder class=&quot;ch.qos.logback.classic.encoder.PatternLayoutEncoder&quot;&gt;</span></span>
<span class="line"><span>      &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}-%msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span>    &lt;/encoder&gt;</span></span>
<span class="line"><span>  &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- 日志输出级别 --&gt;</span></span>
<span class="line"><span>  &lt;root level=&quot;INFO&quot;&gt;</span></span>
<span class="line"><span>    &lt;appender-ref ref=&quot;STDOUT&quot; /&gt;</span></span>
<span class="line"><span>    &lt;appender-ref ref=&quot;FILE&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/root&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><h3 id="logback日志级别" tabindex="-1">Logback日志级别 <a class="header-anchor" href="#logback日志级别" aria-label="Permalink to &quot;Logback日志级别&quot;">​</a></h3><p>日志信息类型;</p><table tabindex="0"><thead><tr><th><strong>日志级别</strong></th><th><strong>说明</strong></th><th><strong>记录方式</strong></th></tr></thead><tbody><tr><td>trace</td><td>追踪，记录程序运行轨迹 【使用很少】</td><td>log.trace(&quot;...&quot;)</td></tr><tr><td>debug</td><td>调试，记录程序调试过程中的信息，实际应用中一般将其视为最低级别 【使用较多】</td><td>log.debug(&quot;...&quot;)</td></tr><tr><td>info</td><td>记录一般信息，描述程序运行的关键事件，如：网络连接、io操作 【使用较多】</td><td>log.info(&quot;...&quot;)</td></tr><tr><td>warn</td><td>警告信息，记录潜在有害的情况 【使用较多】</td><td>log.warn(&quot;...&quot;)</td></tr><tr><td>error</td><td>错误信息 【使用较多】</td><td>log.error(&quot;...&quot;)</td></tr></tbody></table>`,6)]))}const m=t(o,[["render",c]]);export{h as __pageData,m as default};
