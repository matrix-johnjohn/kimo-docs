# Node.Js换源





## 配置文件

使用npm指令打开本地的.npmrc配置文件

````
npm edit config
````



### 查看当前镜像源

使用指令查看当前镜像

````
npm config get registry
````



## 源

切换镜像源解决墙的问题,确保能够安装脚手架或依赖;



### 指令设置

使用淘宝镜像源加速`npm`

````
 npm config set registry https://registry.npmmirror.com
````

使用阿里云镜像源加速`npm`

````
npm config set registry https://npm.aliyun.com
````

使用腾讯云镜像源加速`npm`

````
npm config set registry http://mirrors.cloud.tencent.com/npm/
````

使用华为云镜像源加速`npm`

````
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
````



### 手动换源

在`.npmrc`文件中添加配置

````
registry=https://mirrors.huaweicloud.com/repository/npm/

#Electron镜像设置
electron_builder_binaries_mirror="https://mirrors.huaweicloud.com/electron-builder-binaries"

ELECTRON_MIRROR="https://mirrors.huaweicloud.com/electron"
````

