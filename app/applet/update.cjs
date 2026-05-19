const fs = require("fs");
let content = fs.readFileSync("src/App.tsx", "utf-8");

// All section headers: text-[32px] -> text-[26px]
content = content.replace(/text-\[32px\]/g, "text-[26px]");

// All section subheaders: text-[24px] -> text-[21px]
content = content.replace(/text-\[24px\]/g, "text-[21px]");

// All body texts: text-[18px] -> text-[16px]
content = content.replace(/text-\[18px\]/g, "text-[16px]");

// Hero section header: 40px
content = content.replace(/text-\[26px\] md:text-\[40px\]/g, "text-[26px] md:text-[40px]"); // wait, originally text-[32px] md:text-[40px] -> text-[26px] md:text-[40px]
// Let's just hard replace the hero ones specifically
content = content.replace(/text-\[26px\] md:text-\[40px\] font-bold text-white mb-4 uppercase tracking-\[0.15em\] leading-tight/g, "text-[40px] font-bold text-white mb-4 uppercase tracking-[0.15em] leading-tight");
content = content.replace(/text-\[16px\] text-gray-200 mb-8 font-light/g, "text-[28px] text-gray-200 mb-8 font-light");

fs.writeFileSync("src/App.tsx", content);
