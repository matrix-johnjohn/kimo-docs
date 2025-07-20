import{_ as s,c as a,o as e,S as p}from"./chunks/framework.CxtrxKhu.js";const g=JSON.parse('{"title":"AliyunOSS文件上传","description":"","frontmatter":{"sticky":0,"banner":{"type":"img","bgurl":"https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg","bannerText":"SpringBoot项目后端搭建流程"},"cover":"https://www.logosc.cn/uploads/resources/2018/11/29/1543459457_thumb.jpg","author":"kimo","singleColumn":true,"categories":"后端","tags":["SpringBoot","OSS"]},"headers":[],"relativePath":"posts/back/SpringBoot/08.文件上传.md","filePath":"posts/back/SpringBoot/08.文件上传.md"}'),t={name:"posts/back/SpringBoot/08.文件上传.md"};function i(l,n,o,r,c,u){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="aliyunoss文件上传" tabindex="-1">AliyunOSS文件上传 <a class="header-anchor" href="#aliyunoss文件上传" aria-label="Permalink to &quot;AliyunOSS文件上传&quot;">​</a></h1><h3 id="接收文件" tabindex="-1">接收文件 <a class="header-anchor" href="#接收文件" aria-label="Permalink to &quot;接收文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public static void upload(MultipartFile file) throws IOException, ClientException {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String endpoint = &quot;https://oss-cn-hangzhou.aliyuncs.com&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String bucketName = &quot;web-tlias-von&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    String region = &quot;cn-hangzhou&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();</span></span>
<span class="line"><span>    clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);</span></span>
<span class="line"><span>    OSS ossClient = OSSClientBuilder.create()</span></span>
<span class="line"><span>    .endpoint(endpoint)</span></span>
<span class="line"><span>    .credentialsProvider(credentialsProvider)</span></span>
<span class="line"><span>    .clientConfiguration(clientBuilderConfiguration)</span></span>
<span class="line"><span>    .region(region)</span></span>
<span class="line"><span>    .build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    InputStream inputStream = file.getInputStream();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, file.getOriginalFilename(), inputStream);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    PutObjectResult result = ossClient.putObject(putObjectRequest);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3)]))}const b=s(t,[["render",i]]);export{g as __pageData,b as default};
