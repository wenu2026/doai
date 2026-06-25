# AGENTS.md

## Project Operating Principle

This project is managed as a three-place collaboration:

1. GitHub is the single source of truth.
2. Tencent Cloud is only the deployment target.
3. Codex is the development assistant.

The main repository is:

```text
https://github.com/wenu2026/doai
```

Do not treat the Tencent Cloud server as a place to edit source code. The server should only run the build output uploaded by GitHub Actions.

## Standard Local Workflow

On a new computer:

```bash
git clone https://github.com/wenu2026/doai.git
cd doai
npm install
npm run dev
```

Before starting work:

```bash
git pull origin main
```

After making changes:

```bash
npm run test
npm run build
git status
git add .
git commit -m "Describe the change"
git push origin main
```

Pushing to `main` triggers GitHub Actions deployment to Tencent Cloud:

```text
http://124.221.141.173/
```

## Avoiding Conflicts Across Two Computers

The three most important habits are:

```bash
git pull origin main
npm run test
npm run build
git push origin main
```

For larger or overlapping work, use a branch:

```bash
git checkout -b update-homepage
git add .
git commit -m "Update homepage"
git push origin update-homepage
```

Then merge the branch into `main` through GitHub after review or verification.

## Server Access

Daily development should not require SSH access to the server because GitHub Actions deploys automatically.

Use SSH mainly for troubleshooting:

```bash
ssh tencent-light
cd /home/ubuntu/apps/doai
sudo docker compose ps
sudo docker compose logs -f
```

Do not copy one Mac's private SSH key to another computer. Each computer should generate its own SSH key and bind only the public key to the Tencent Cloud instance.

## Recommended Work Rules

- Content changes and small fixes can go directly to `main` after local test and build pass.
- Large redesigns should use a branch and merge after confirmation.
- If deployment fails, check GitHub Actions logs first.
- If the website is unreachable, check the Tencent Cloud container logs.
- If the project later uses a custom domain, the domain must be owned and its DNS should point to `124.221.141.173`.
- If no domain will be purchased, keep using the Tencent Cloud IP or the free GitHub Pages URL.

## Codex Working Rules

When Codex works on this project:

- Treat GitHub `wenu2026/doai` as the authoritative source.
- Pull from `main` before significant work when network access is available.
- Keep edits scoped to the requested task.
- Run relevant checks before reporting completion, preferably `npm run test` and `npm run build` for user-facing changes.
- Do not edit source code directly on the Tencent Cloud server.
- Preserve the deployment distinction: GitHub Pages uses `/doai` as base path, Tencent Cloud uses the site root.
