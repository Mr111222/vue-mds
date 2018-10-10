# ng-grid

## 概述

栅格布局组件。


## 使用

```html
<row class-name="item" type="flex" justify="center" align="middle">
  <col span="2"></col>
  <col span=20>hello world</col>
  <col span="2"></col>
</row>
```
```html
<!--
 - 注意：
 - 1、默认响应式布局是关闭的，需要在皮肤中打开
 - 2、响应式布局跟默认布局(span指定的)是两套并行的系统，当某种尺寸样式没指定时，则使用默认布局
-->
<row class-name="item" type="flex" justify="center" align="middle">
  <col :md="2" :xs="{span:1}" :lg="{span:4}"></col>
  <col :md=20 :xs="{span:22}" :lg="{span:16}">hello world</col>
  <col :md="2" :xs="{span:1}" :lg="{span:4}"></col>
</row>
```

## 示例工程

## 注意事项
[查看实例](#/component/ng-grid-shili)

## 已知问题
