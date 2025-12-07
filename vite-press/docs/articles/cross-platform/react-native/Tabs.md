---
title: Tabs
date: 2025-03-07 01:16:28
permalink: /articles/cross-platform/react-native/Tabs
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
在`(tabs)`下_layout.tsx中配置底部导航栏的路由
```` tsx
import { FontAwesome } from '@expo/vector-icons';
import { Stack, Tabs } from "expo-router";


export default function TabsLayout() {

  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'coral' }}>
        {/** 首页 */}
        <Stack.Screen name="index" options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            return <>
              {<FontAwesome name="home" size={size} color={color} />}
            </>
          }
        }}
        />
        {/** 登录页 */}
        <Stack.Screen name="login" options={{
          title: 'Login',
          tabBarIcon: ({ color, size, focused }) => {
            return <FontAwesome name="user" size={size} color={color} />
          }
        }}
        />
      </Tabs>
    </>
  );
}
````

## 配置Root路由
在`app`根目录下配置路由跳转

```` tsx
import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{title:'Home',headerShown:false}} />
      </Stack>
    </>
  );
}
````