"use client";

import Giscus from "@giscus/react";
import { MessageCircle } from "lucide-react";
import { giscusConfigured, siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GiscusComments() {
  if (!giscusConfigured) {
    return (
      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <MessageCircle className="h-4 w-4" />
            评论区待连接
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
          <p>内容可以直接阅读。要开放评论，请在 GitHub 仓库开启 Discussions，安装 giscus app，并配置 giscus 的仓库与分类参数。</p>
          <p className="font-mono text-xs">
            NEXT_PUBLIC_GISCUS_REPO / NEXT_PUBLIC_GISCUS_REPO_ID / NEXT_PUBLIC_GISCUS_CATEGORY_ID
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <section className="mt-10 rounded-md border border-border bg-card p-4">
      <Giscus
        repo={siteConfig.giscus.repo as `${string}/${string}`}
        repoId={siteConfig.giscus.repoId}
        category={siteConfig.giscus.category}
        categoryId={siteConfig.giscus.categoryId}
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </section>
  );
}
