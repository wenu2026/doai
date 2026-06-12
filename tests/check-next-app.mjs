import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredFiles = [
  "package.json",
  "next.config.ts",
  "tsconfig.json",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/resources/page.tsx",
  "src/app/assessment/page.tsx",
  "src/app/services/page.tsx",
  "src/app/routes/page.tsx",
  "src/app/cases/page.tsx",
  "src/components/giscus-comments.tsx",
  "src/components/lead-capture.tsx",
  "src/components/assessment-form.tsx",
  "src/lib/resources.ts",
  "src/config/site.ts",
];

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
}

const packageJson = JSON.parse(read("package.json"));
for (const dependency of ["next", "react", "react-dom", "@giscus/react"]) {
  assert(
    packageJson.dependencies?.[dependency] || packageJson.devDependencies?.[dependency],
    `package.json missing dependency: ${dependency}`,
  );
}
for (const script of ["dev", "build", "lint", "typecheck", "test"]) {
  assert(packageJson.scripts?.[script], `package.json missing script: ${script}`);
}

const siteConfig = read("src/config/site.ts");
assert(siteConfig.includes("giscus"), "site config must expose giscus settings");
assert(siteConfig.includes("repoId"), "giscus config must include repoId placeholder/config");
assert(siteConfig.includes("categoryId"), "giscus config must include categoryId placeholder/config");
assert(siteConfig.includes("leadCapture"), "site config must expose lead capture settings");
assert(siteConfig.includes("qrImage"), "lead capture config must include qrImage");

const comments = read("src/components/giscus-comments.tsx");
assert(comments.includes("@giscus/react"), "comments component must use @giscus/react");
assert(comments.includes('mapping="pathname"'), "giscus must map comments by pathname");
assert(comments.includes('lang="zh-CN"'), "giscus must render in Simplified Chinese");
assert(comments.includes("giscusConfigured"), "comments component must handle missing giscus config");

const leadCapture = read("src/components/lead-capture.tsx");
assert(leadCapture.includes("qrImage"), "lead capture component must render a QR image");
assert(leadCapture.includes("咨询"), "lead capture copy must support consulting");
assert(leadCapture.includes("陪跑"), "lead capture copy must support coaching");

const assessmentForm = read("src/components/assessment-form.tsx");
assert(assessmentForm.includes('"use client"'), "assessment form must be a client component");
assert(assessmentForm.includes("localStorage"), "assessment form must save answers locally first");
assert(assessmentForm.includes("doai-assessment"), "assessment form must use a stable localStorage key");

const resources = read("src/lib/resources.ts");
assert(resources.includes("../content/resources.json"), "resources module must keep GitHub file maintenance");
assert(resources.includes("Resource"), "resources module must expose a Resource type");
assert(resources.includes("getResources"), "resources module must expose getResources()");

const resourcesPage = read("src/app/resources/page.tsx");
assert(resourcesPage.includes("GiscusComments"), "resources page must render comments under content");
assert(resourcesPage.includes("getResources"), "resources page must read resource data");

const globals = read("src/app/globals.css");
assert(globals.includes("--color-skyline"), "global theme must define a brighter skyline accent");
assert(globals.includes("--color-sunrise"), "global theme must define a warmer sunrise accent");
assert(globals.includes("--color-stage-1"), "global theme must define stage colors");

const button = read("src/components/ui/button.tsx");
assert(button.includes("primary:"), "button variants must include primary instead of relying on green");
assert(!button.includes("green:"), "button variants should not expose green as the primary action name");

const homePage = read("src/app/page.tsx");
for (const icon of ["WandSparkles", "BriefcaseBusiness", "Code2", "Network", "Telescope"]) {
  assert(homePage.includes(icon), `home route map must render stage icon: ${icon}`);
}
for (const stageClass of ["bg-stage-1", "bg-stage-2", "bg-stage-3", "bg-stage-4", "bg-stage-5"]) {
  assert(homePage.includes(stageClass), `home route map missing stage class: ${stageClass}`);
}

const readme = read("README.md");
assert(readme.includes("giscus"), "README must document giscus comments setup");
assert(readme.includes("GitHub"), "README must document GitHub file maintenance");
assert(readme.includes("二维码"), "README must document QR-code lead capture");

console.log("next app checks passed");
