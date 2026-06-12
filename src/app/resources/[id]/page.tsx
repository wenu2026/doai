import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { GiscusComments } from "@/components/giscus-comments";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getResource, getResources } from "@/lib/resources";

export function generateStaticParams() {
  return getResources().map((resource) => ({ id: resource.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resource = getResource(id);
  return {
    title: resource ? `${resource.title} - doai` : "资源 - doai",
    description: resource?.summary || resource?.reason,
  };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resource = getResource(id);

  if (!resource) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant={resource.mainRoute ? "primary" : "outline"}>{resource.mainRoute ? "主路线" : "扩展资源"}</Badge>
        <Badge variant="outline">{resource.grade}</Badge>
        <Badge variant="outline">{resource.duration} / {resource.pricing}</Badge>
      </div>
      <h1 className="text-4xl font-semibold leading-tight">{resource.title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{resource.summary || resource.reason}</p>

      <div className="mt-8 grid gap-4">
        {[
          ["适合谁", resource.audience],
          ["解决什么问题", resource.problem],
          ["为什么推荐", resource.reason],
          ["学完得到什么", resource.outcome],
        ].map(([label, value]) => (
          <Card key={label}>
            <CardHeader>
              <CardTitle className="text-base">{label}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">{value}</CardContent>
          </Card>
        ))}
      </div>

      {resource.details?.length ? (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>怎么使用这条资源</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="grid list-decimal gap-3 pl-5 text-sm leading-6 text-muted-foreground">
              {resource.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={resource.url} target="_blank" rel="noreferrer" variant="primary">
          <ExternalLink className="h-4 w-4" />
          打开原始资源
        </ButtonLink>
        {resource.links?.map((link) => (
          <ButtonLink key={link.url} href={link.url} target="_blank" rel="noreferrer" variant="secondary">
            {link.label}
          </ButtonLink>
        ))}
      </div>

      <GiscusComments />
    </main>
  );
}
