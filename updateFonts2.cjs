const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. All headers to 26px
// Current headers: text-[32px] font-bold ...
// First let's fix the ones we just updated to [32px]
content = content.replace(/text-\[32px\]/g, "text-[26px]");

// Oh wait, what about the hero and other sections? Let's explicitly fix them via match.
content = content.replace(/text-\[26px\] md:text-\[40px\] font-bold text-white mb-4 uppercase tracking-\[0.15em\] leading-tight/, "text-[40px] font-bold text-white mb-4 uppercase tracking-[0.15em] leading-tight");
content = content.replace(/text-\[18px\] text-gray-200 mb-8 font-light/, "text-[28px] text-gray-200 mb-8 font-light");

// 2. All section subheaders to 21px
// We have text-[24px] used for subheaders
content = content.replace(/text-\[24px\]/g, "text-[21px]");

// 3. All body text to 16px
// We have text-[18px] used for body text generally
content = content.replace(/text-\[18px\]/g, "text-[16px]");

fs.writeFileSync('src/App.tsx', content);
