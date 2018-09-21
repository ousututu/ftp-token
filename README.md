# tqfe vue project 

To start:

```bash
$ npm install
```

To develop:

```bash
$ npm run dev
```

To build for production:

```bash
$ npm run build
```

To lint you code:

```bash
$ npm run lint
```


---
## 项目结构
```
+-- build -> webpack配置文件 代理配置
|
+-- client
|   +-- assets -> 资源目录
|   |   +-- css -> 样式资源文件
|   |   +-- img -> 图片资源文件
|   |   +-- lib -> 第三方库资源文件
|   |
|   +-- components -> 全局组件目录
|   |   +-- Component -> 组件
|   |       +-- index.vue -> 组件模版文件
|   |       +-- cell -> 组件下子组件文件夹
|   |
|   +-- router -> 路由配置
|   |   +-- fatherA -> 拥有子路由的页面A
|   |   |   +--> index.js -> 页面A模块路由的配置
|   |   +-- fatherB -> 拥有子路由的页面B
|   |   |   +--> index.js -> 页面B模块路由的配置
|   |   |
|   |   +-- index.js -> 各级路由的汇总配置
|   |
|   +-- store  -> vuex配置
|   |   +-- modules -> vuex模块文件夹
|   |   +-- index.js
|   |
|   +-- views -> 视图文件夹
|   |   +-- moduleA -> 功能模块A
|   |   |   +-- homeA -> 视图 homeA
|   |   |       +-- index.vue
|   |   |       +-- components -> 组件文件夹
|   |   |           +-- index.vue -> 组件模版文件
|   |   |           +-- cell -> 组件下子组件文件夹
|   |   +-- moduleB -> 功能模块B
|   |       +-- homeB -> 视图 homeB
|   |           +-- index.vue
|   |           +-- components -> 组件文件夹
|   |               +-- index.vue -> 组件模版文件
|   |               +-- cell -> 组件下子组件文件夹
|   |
|   +-- app.js -> 应用配置
|   |
|   +-- index.js -> root
|
+-- static -> 静态资源目录
```