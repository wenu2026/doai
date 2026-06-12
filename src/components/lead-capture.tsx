import { QrCode, ScanLine } from "lucide-react";
import { siteConfig, withBasePath } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LeadCapture() {
  const qrSrc = withBasePath(siteConfig.leadCapture.qrImage);

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <Badge variant="primary">首期内测</Badge>
          <QrCode className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardTitle>想做咨询或陪跑，可以先扫码留资</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5 md:grid-cols-[180px_1fr]">
        <div className="rounded-md border border-border bg-white p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={qrSrc} alt={siteConfig.leadCapture.label} className="h-auto w-full" />
        </div>
        <div className="space-y-4">
          <div className="space-y-2 text-sm leading-6 text-muted-foreground">
            <p>扫码填写你的 AI 使用现状、想解决的问题和可投入时间。后续会按信息给出咨询或陪跑建议。</p>
            <p>适合需要一条清晰学习路线、想把 AI 用到岗位任务，或想在 4 周内做出一个可演示成果的人。</p>
          </div>
          <ButtonLink href={siteConfig.leadCapture.formUrl} target="_blank" rel="noreferrer" variant="primary">
            <ScanLine className="h-4 w-4" />
            打开留资入口
          </ButtonLink>
        </div>
      </CardContent>
    </Card>
  );
}
