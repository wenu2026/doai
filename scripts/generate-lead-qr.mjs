import fs from "node:fs/promises";
import QRCode from "qrcode";

const target = "public/lead-qr.svg";
const leadUrl = process.env.NEXT_PUBLIC_LEAD_FORM_URL || "https://github.com/yuhui/doai/discussions";

await fs.mkdir("public", { recursive: true });
await QRCode.toFile(target, leadUrl, {
  type: "svg",
  margin: 2,
  width: 260,
  color: {
    dark: "#111827",
    light: "#ffffff",
  },
});

console.log(`lead QR generated: ${target}`);
