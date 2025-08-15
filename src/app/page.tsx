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
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">logo</span>
            </div>
            <h1 className="text-lg font-semibold">EdgeOne Pages</h1>
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
            className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white px-8 py-3 text-lg"
          >
            <Zap className="mr-2 h-5 w-5" />
            一键部署
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg"
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
                className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white"
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
