# caizih-cli

一个强大的命令行工具，用于快速创建和管理前端项目，支持 Vue、Vue3 和 React 框架。

## ✨ 特性

- 🚀 **多框架支持**: 支持 Vue、Vue3、React 项目创建
- 🎨 **代码生成**: 一键生成页面、组件、Store 等代码
- 📁 **模板系统**: 内置丰富的代码模板，遵循最佳实践
- 🔧 **灵活配置**: 支持自定义目标目录和框架选择
- 📖 **友好提示**: 完整的帮助信息和命令行提示

## 📦 安装

```bash
npm install -g caizih-cli
```

## 🚀 快速开始

### 创建项目

```bash
# 创建 React 项目（默认）
czh create my-react-app

# 创建 Vue 项目
czh create my-vue-app -f vue

# 创建 Vue3 项目
czh create my-vue3-app -f vue3
```

### 生成代码

```bash
# 生成 React 页面
czh g page Home

# 生成 Vue 组件
czh g component User -f vue

# 生成 Vuex Store
czh g store auth -f vue

# 指定目标目录
czh g page Dashboard -d src/views/dashboard
```

## 📖 详细使用指南

### 命令行选项

```bash
# 查看版本
czh -v
czh --version

# 查看帮助
czh --help
czh -h

# 指定框架
czh -f vue
czh --framework vue3

# 指定目标目录
czh -d ./src/components
czh --dest ./src/components
```

### 创建项目命令

```bash
czh create <project-name> [options]
```

**选项:**
- `-f, --framework <framework>`: 指定项目框架 (vue|vue3|react)
- `-h, --help`: 显示帮助信息

**示例:**
```bash
# 创建 React 项目
czh create my-app

# 创建 Vue 项目
czh create my-vue-app -f vue

# 创建 Vue3 项目
czh create my-vue3-app -f vue3
```

### 生成命令

```bash
czh g <type> <name> [options]
```

**支持的类型:**
- `page`: 创建页面
- `component`: 创建组件
- `store`: 创建 Store

**选项:**
- `-f, --framework <framework>`: 指定框架 (vue|vue3|react)
- `-d, --dest <destination>`: 指定目标目录
- `-h, --help`: 显示帮助信息

**示例:**
```bash
# 创建 React 页面
czh g page Home

# 创建 Vue 组件
czh g component User -f vue

# 创建 Vue Store
czh g store auth -f vue

# 指定目标目录
czh g page Dashboard -d src/views/dashboard
```

## 🏗️ 生成的文件结构

### React 项目结构

创建 React 页面时，会生成以下结构：

```
src/pages/Home/
├── index.tsx              # 主页面文件
├── components/
│   └── UpdateForm.tsx     # 更新表单组件
├── services/
│   └── home.ts           # API 服务
└── hooks/
    ├── useColumns.tsx     # 列配置 Hook
    ├── useData.ts         # 数据处理 Hook
    ├── useModal.ts        # 模态框 Hook
    ├── useState.ts        # 状态管理 Hook
    └── useUpdateForm.tsx  # 表单 Hook
```

### Vue 项目结构

创建 Vue 组件时，会生成以下结构：

```
src/views/
└── Home.vue              # 主组件文件

src/api/
└── home.js               # API 接口

src/router/
└── home.js               # 路由配置
```

## 🎨 支持的模板

### React 模板

- **页面模板**: 包含 ProTable、UpdateForm 等标准组件
- **Hook 模板**: 
  - useColumns: 列配置
  - useData: 数据处理
  - useModal: 模态框管理
  - useState: 状态管理
  - useUpdateForm: 表单处理
- **API 模板**: 标准的 API 请求封装

### Vue 模板

- **组件模板**: 完整的 CRUD 组件，包含表格、表单、模态框等
- **API 模板**: 统一的 API 接口封装
- **路由模板**: 自动生成的路由配置
- **Store 模板**: Vuex 状态管理模块

## 🔧 配置

### Git 仓库配置

项目使用以下 Git 模板：

- **React**: https://github.com/zhCaiCode/ry-react.git
- **Vue**: https://gitee.com/y_project/RuoYi-Vue.git
- **Vue3**: https://github.com/zhCaiCode/el-vue3-admin.git

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📞 支持

如有问题，请提交 Issue 或联系作者。