# ng-button

## 概述
button 是按钮组件，触发业务逻辑时使用。

## 使用

### 基本样式

```html
<template>
    <button>Default</button>
    <button type="primary">Primary</button>
    <button type="ghost">Ghost</button>
    <button type="dashed">Dashed</button>
    <button type="text">Text</button>
    <br><br>
    <button type="info">信息按钮</button>
    <button type="success">成功按钮</button>
    <button type="warning">警告按钮</button>
    <button type="error">错误按钮</button>
    <br><br>
    <button>Default</button>
    <button disabled>Default(Disabled)</button>
    <br>
    <button type="primary">Primary</button>
    <button type="primary" disabled>Primary(Disabled)</button>
    <br>
    <button type="ghost">Ghost</button>
    <button type="ghost" disabled>Ghost(Disabled)</button>
    <br>
    <button type="dashed">Dashed</button>
    <button type="dashed" disabled>Dashed(Disabled)</button>
    <br>
    <button type="text">Text</button>
    <button type="text" disabled>Text(Disabled)</button>
</template>
```

### 带图标样式

```html
<template>
    <button type="primary" shape="circle" icon="ios-search"></button>
    <button type="primary" icon="ios-search">搜索</button>
    <button type="primary" shape="circle" icon="ios-search">搜索</button>
    <button type="primary" shape="circle">圆角按钮</button>
    <br><br>
    <button type="ghost" shape="circle" icon="ios-search"></button>
    <button type="ghost" icon="ios-search">搜索</button>
    <button type="ghost" shape="circle" icon="ios-search">搜索</button>
    <button type="ghost" shape="circle">圆角按钮</button>
</template>
```

### 按钮尺寸

```html
<template>
    <button type="primary" size="large">Large</button>
    <button type="primary">Default</button>
    <button type="primary" size="small">Small</button>
    <br><br>
    <button type="primary" shape="circle" size="large">Large</button>
    <button type="primary" shape="circle">Default</button>
    <button type="primary" shape="circle" size="small">Small</button>
    <br><br>
    <button type="success" long>确认提交</button>
    <br><br>
    <button type="error" long>确认删除</button>
</template>
```

### 加载状态

```html
<template>
    <button type="primary" loading>Loading...</button>
    <button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </button>
    <button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </button>
</template>
```

## 基本使用

```html
<template>
    <h4>基本</h4>
    <br><br>
    <button-group>
        <button>取消</button>
        <button type="primary">确定</button>
    </button-group>
    <button-group>
        <button disabled>昨日</button>
        <button disabled>今日</button>
        <button disabled>明日</button>
    </button-group>
    <button-group>
        <button type="primary">L</button>
        <button>M</button>
        <button type="ghost">M</button>
        <button type="dashed">R</button>
    </button-group>
    <br><br>
    <h4>配合图标</h4>
    <br><br>
    <button-group>
        <button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </button>
        <button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </button>
    </button-group>
    <button-group>
        <button type="primary" icon="ios-skipbackward"></button>
        <button type="primary" icon="ios-skipforward"></button>
    </button-group>
    <button-group>
        <button type="ghost" icon="ios-color-wand-outline"></button>
        <button type="ghost" icon="ios-sunny-outline"></button>
        <button type="ghost" icon="ios-crop"></button>
        <button type="ghost" icon="ios-color-filter-outline"></button>
    </button-group>
    <br><br>
    <h4>圆角</h4>
    <br><br>
    <button-group shape="circle">
        <button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </button>
        <button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </button>
    </button-group>
    <button-group shape="circle">
        <button type="primary" icon="ios-skipbackward"></button>
        <button type="primary" icon="ios-skipforward"></button>
    </button-group>
    <button-group shape="circle">
        <button type="ghost" icon="ios-color-wand-outline"></button>
        <button type="ghost" icon="ios-sunny-outline"></button>
        <button type="ghost" icon="ios-crop"></button>
        <button type="ghost" icon="ios-color-filter-outline"></button>
    </button-group>
    <br><br>
    <h4>尺寸</h4>
    <br><br>
    <button-group size="large">
        <button type="ghost">Large</button>
        <button type="ghost">Large</button>
    </button-group>
    <button-group>
        <button type="ghost">Default</button>
        <button type="ghost">Default</button>
    </button-group>
    <button-group size="small">
        <button type="ghost">Small</button>
        <button type="ghost">Small</button>
    </button-group>
    <br><br>
    <button-group size="large" shape="circle">
        <button type="ghost">Large</button>
        <button type="ghost">Large</button>
    </button-group>
    <button-group shape="circle">
        <button type="ghost">Default</button>
        <button type="ghost">Default</button>
    </button-group>
    <button-group size="small" shape="circle">
        <button type="ghost">Small</button>
        <button type="ghost">Small</button>
    </button-group>
</template>
```

## 竖向排列

```html
<template>
    <button-group vertical>
        <button type="ghost" icon="social-facebook"></button>
        <button type="ghost" icon="social-twitter"></button>
        <button type="ghost" icon="social-googleplus"></button>
        <button type="ghost" icon="social-tumblr"></button>
    </button-group>
</template>
```

## API
[查看实例](#/component/ng-button-shili)

