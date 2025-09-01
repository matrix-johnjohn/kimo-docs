# vscode的配置



## 执行策略

### 查看当前执行策略

在powershell中查看当前执行策略

````
Get-ExecutionPolicy
````



### 更改执行策略

更改执行策略为 `RemoteSigned`

````
Set-ExecutionPolicy RemoteSigned
````



## 侧边栏打开NPM脚本

进入`Settings`界面,然后再他妈的选中Enable running npm scripts contained in a folder from the Explorer context menu.这个复选框;

![](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/f4387fc4bf32439b98f02feec03253cb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55So5oi3MzI5NzUwNTk4MjE=:q75.awebp?rk3s=f64ab15b&x-expires=1757170875&x-signature=7a%2BdsL0cMNHG03TcHw3wOs5GHaY%3D)

点击`EXPLORER`的下拉框,选中`NPM Scripts`选项;

![](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/c18a3ddec16648a89b919ae84ed5656a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55So5oi3MzI5NzUwNTk4MjE=:q75.awebp?rk3s=f64ab15b&x-expires=1757170875&x-signature=la%2Bn%2FQxmGlvD1gpfruYth7LJHXc%3D)