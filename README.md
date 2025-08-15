# Node Functions on EdgeOne Pages - Koa 演示网站

这是一个基于 Next.js + Tailwind CSS + shadcn/ui 技术栈开发的函数请求演示网站。

## 技术栈

- **Next.js 15** - React 全栈框架
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量 React 组件库
- **TypeScript** - 类型安全的 JavaScript

## 功能特性

- 🎨 黑底白字的现代设计风格
- 🔵 #1c66e5 点缀色主题
- 📱 响应式设计
- ⚡ 一键部署功能演示
- 📚 文档查看功能
- 💻 Koa 代码示例展示
- 🚀 API 调用演示

## 项目结构

```
src/
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   └── page.tsx             # 主页面
├── components/
│   └── ui/                  # shadcn/ui 组件
│       ├── button.tsx       # 按钮组件
│       └── card.tsx         # 卡片组件
└── lib/
    └── utils.ts             # 工具函数
```

## 快速开始

1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run dev
   ```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 构建部署

```bash
npm run build
npm start
```

## 设计说明

- **主色调**: 黑色背景 (#000000)
- **文字颜色**: 白色 (#ffffff)
- **点缀色**: 蓝色 (#1c66e5)
- **辅助色**: 灰色系用于边框和卡片背景

## 组件说明

- **Button**: 支持多种变体的按钮组件
- **Card**: 用于展示代码和 API 结果的卡片组件
- **Header**: 包含 logo 和 github 链接的页头
- **CodeBlock**: 代码示例展示区域
- **ApiDemo**: API 调用演示区域

## 许可证

MIT License
