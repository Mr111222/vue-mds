# ui-checkbox

## 概述

```html
<template>
  <checkbox v-model="single">checkbox</checkbox>
</template>
<script>
  export default {
    data () {
      return {
        single: false
      }
    }
  }
</script>
```
组合使用
```html
<template>
  <checkbox-group v-model="social">
    <checkbox label="twitter">
      <icon type="social-twitter"></icon>
      <span>Twitter</span>
    </checkbox>
    <checkbox label="facebook">
      <icon type="social-facebook"></icon>
      <span>Facebook</span>
    </checkbox>
    <checkbox label="github">
      <icon type="social-github"></icon>
      <span>Github</span>
    </checkbox>
    <checkbox label="snapchat">
      <icon type="social-snapchat"></icon>
      <span>Snapchat</span>
    </checkbox>
  </checkbox-group>
  <checkbox-group v-model="fruit">
    <checkbox label="香蕉"></checkbox>
    <checkbox label="苹果"></checkbox>
    <checkbox label="西瓜"></checkbox>
  </checkbox-group>
</template>
<script>
  export default {
    data () {
      return {
        social: ['facebook', 'github'],
        fruit: ['苹果']
      }
    }
  }
</script>
```

## 示例工程

## 注意事项
[查看实例](#/component/ng-checkbox-shili)

## 已知问题
