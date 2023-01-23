# 开始

# 文章资料

- pnpm [官网](https://pnpm.io/) | [中文网](https://pnpm.io/zh/)
- monorepo 相关文章

  - [从 Multirepo 到 Monorepo 袋鼠云数栈前端研发效率提升探索之路](https://cloud.tencent.com/developer/article/2082443)
  - ["分"与"合"的哲学碰撞，Monorepo vs Multirepo](https://juejin.cn/post/6949882490324516894)
  - [Element Plus 组件库相关技术揭秘：2. 组件库工程化实战之 Monorepo 架构搭建](https://juejin.cn/post/7146183222425518093)

- 使用 monorepo 的项目

  - [vue3](https://github.com/vuejs/core)
  - [element-plus](https://github.com/element-plus/element-plus)

- monorepo 视频资源

  - [三十分钟实战 pnpm monorepo](https://www.bilibili.com/video/BV1vf4y1Z753/)
  - [使用了两个月的 monorepo 前方段方案，它还有哪些提升呢？](https://www.bilibili.com/video/BV1Rt4y1T7wM/)

- git submodule 相关文章
  - [Git 工具 - 子模块](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)
  - [Git: submodule 子模块简明教程](https://iphysresearch.github.io/blog/post/programing/git/git_submodule/)

# 必要环境

## 安装全局依赖

```
npm install pnpm commitizen -g
```

## 下载依赖

```
pnpm install
```

# 模块相关

> 以操作一个名为 demo 的模块为例

---

### 创建模块

1. 在根目录下创建 demo 文件夹
2. cd demo
3. pnpm init
4. 建立 index.js 文件
5. 修改 package.json 文件的 name 字段为 @common/demo
6. 修改 package.json 文件的 main 字段为 index.js
7. 修改 pnpm-workspace.yaml 文件的 packages 字段,新增一条数据
8. 修改根目录下的 package.json 文件的 workspaces 字段,新增一条数据

### 更新模块

1. cd demo
2. 修改代码提交之后，执行 npm version patch | minor | major
3. 进入根目录
4. pnpm up @common/demo -r

### 删除模块

1. 进入根目录
2. pnpm remove @common/demo -r
3. 编辑根目录 pnpm-workspace.yaml 文件,删除对应的模块
4. 编辑根目录 package.json 文件,删除对应的模块
5. 删除模块文件夹

---

## 模块依赖

### 使用模块依赖

1. 进入需要使用模块的目录
2. pnpm add @common/demo -w
3. 在需要使用模块的文件中引入模块

### 更新模块依赖

1. cd demo
2. 手动修改 `package.json` 中的 `version` 字段
3. 进入使用到该模块的目录
4. pnpm up "@common/demo"

### 删除模块依赖

1. 进入根目录
2. pnpm remove @common/demo -r

# commit 提交

```
cz | git cz
```

# 常见问题

## 模块问题

- 模块版本号可以手动修改吗？

  可以，但是不建议这么做，因为这样会导致模块的版本号不连续，如果需要修改模块的版本号，可以使用 `npm version patch | minor | major` 命令

- 如果是使用的 `"@common/demo": "workspace:*",` 这种写法，那么模块的版本号是怎么更新的？

  每次执行 `pnpm up @common/demo -r` 命令的时候，会自动更新模块的版本号
