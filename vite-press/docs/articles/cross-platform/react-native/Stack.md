---
title: Stack
date: 2025-03-07 01:16:28
permalink: /articles/cross-platform/react-native/Stack
categories:
  - 跨平台
tags:
  - react-native
titleTag: 原生
sidebar: true
article: true
comment: true
description: 完整的安装,配置docker确保服务器能够正常的使用docker
coverImg: https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/articles/server/docker/00docker.png?raw=true
docAnalysis: true
inCatalogue: true
autoTitle: true
articleUpdate: true
inHomePost: true
---

## 配置页面路由
在页面的文件夹下的`_layout.tsx`配置路由

````tsx
import { Stack } from "expo-router";

export default function ViewLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="goods" options={{title:'Goods'}} />
        <Stack.Screen name="cate" options={{title:'Cate'}} />
      </Stack>
    </>
  );
}
````

## 根路由
在`app`的根目录下的`_layout.tsx`配置所有页面文件夹的路由

````tsx
import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{title:'Home',headerShown:false}} />
        <Stack.Screen name="view" options={{title:'View',headerShown:false}} />
      </Stack>
    </>
  );
}
````
