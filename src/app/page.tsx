"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, FileText, Play } from "lucide-react";

export default function Home() {
  const [apiResult, setApiResult] = useState<string>("");

  const handleApiCall = async () => {
    try {
      const response = await fetch("/koa");
      const data = await response.json();
      setApiResult(data.message);
    } catch (error) {
      setApiResult("API 调用失败");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6rounded-full flex items-center justify-center">
                <img src="/eo-logo-blue.svg" alt="EdgeOne Pages" width={32} height={32} />
              </div>
              <h1 className="text-lg font-semibold">EdgeOne Pages</h1>
            </div>
            </a>
            <a
              href="https://github.com/TencentEdgeOne/koa-template"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Node Functions on EdgeOne Pages - Koa
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Node Functions 允许您在 Node Runtime
            中运行代码,而无需管理服务器。借助其能力,您可以方便的在 Pages
            开发部署基于 Koa 框架的全栈应用。
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white px-8 py-3 text-lg cursor-pointer"
          >
            <Zap className="mr-2 h-5 w-5" />
            一键部署
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg cursor-pointer"
          >
            <FileText className="mr-2 h-5 w-5" />
            查看文档
          </Button>
        </div>

        {/* Code Snippet Section */}
        <Card className="bg-gray-900 border-gray-700 mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-gray-400 font-mono">
              ./node-functions/koa/[[default]].js
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm text-gray-200 font-mono leading-relaxed">
              {`import Koa from 'koa';
import Router from '@koa/router';

// 创建 Koa 应用
const app = new Koa();
const router = new Router();

// 添加一些中间件
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', \`$\{ms\}ms\`);
});

// 定义路由
router.get('/', async (ctx) => {
  ctx.body = { message: 'Hello from Koa on Node Functions!' };
});


// 使用路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 导出处理函数
export default app;
`}
            </pre>
          </CardContent>
        </Card>

        {/* API Call Demonstration */}
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Button
                onClick={handleApiCall}
                className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white cursor-pointer"
              >
                <Play className="mr-2 h-4 w-4" />
                执行 API 调用
              </Button>
              {apiResult && (
                <div className="text-left">
                  <p className="text-sm text-gray-400 mb-2">API 调用结果:</p>
                  <p className="text-green-400 font-mono bg-gray-800 px-3 py-2 rounded">
                    {apiResult}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
