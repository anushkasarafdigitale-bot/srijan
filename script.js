const fs = require("fs");
let content = fs.readFileSync("src/App.tsx", "utf-8");

// Hero header
content = content.replace(/text-4xl md:text-5xl lg:text-6xl font-medium/g, "text-[32px] md:text-[40px] font-bold");
// Hero body
content = content.replace(/text-lg md:text-xl/g, "text-[18px]");

// Headers -> text-[32px]
content = content.replace(/text-3xl font-bold/g, "text-[32px] font-bold");
content = content.replace(/text-2xl font-bold/g, "text-[32px] font-bold");

// Subheaders -> text-[24px]
content = content.replace(/text-base md:text-sm lg:text-base/g, "text-[24px]");
content = content.replace(/mb-2 text-base/g, "mb-2 text-[24px]"); // For Facilities subheaders

// Body texts -> text-[18px]
content = content.replace(/text-\[16px\] md:text-lg/g, "text-[18px]"); // About text
content = content.replace(/text-\[13px\] text-gray-600/g, "text-[18px] text-gray-600"); // Key pointers
content = content.replace(/text-\[11px\] text-gray-100/g, "text-[18px] text-gray-100"); // USP desc
content = content.replace(/text-\[11px\] lg:text-xs/g, "text-[18px]"); // Facilities li
content = content.replace(/text-sm leading-relaxed/g, "text-[18px] leading-relaxed"); // Footer text

fs.writeFileSync("src/App.tsx", content);
