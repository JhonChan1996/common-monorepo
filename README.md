# 开始

## 全局依赖

```
npm install pnpm commitizen -g
```

## 下载依赖

```
pnpm install
```

# 模块相关

## 添加模块

> 以创建一个名为 demo 的模块为例

1. 在根目录下创建 demo 文件夹
2. cd demo
3. pnpm init
4. 建立 index.js 文件
5. 修改 package.json 文件的 name 字段为 @common/demo
6. 修改 package.json 文件的 main 字段为 index.js
7. 修改 pnpm-workspace.yaml 文件的 packages 字段,新增一条数据
8. 修改根目录下的 package.json 文件的 workspaces 字段,新增一条数据
## 使用模块

> 以使用一个名为 demo 的模块为例

1. 进入需要使用模块的目录
2. pnpm add @common/demo -w
3. 在需要使用模块的文件中引入模块

# 模块更新

> 以更新一个名为 demo 的模块为例

1. cd demo
2. 手动修改 `package.json` 中的 `version` 字段
3. 进入使用到该模块的目录
4. pnpm up "@common/demo" | pnpm up "@common/\*"

## commit 提交

```
cz | git cz
```
