const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. All headers to 24px
content = content.replace(/text-\[26px\]/g, "text-[24px]");

// 2. All section subheaders to 18px
content = content.replace(/text-\[21px\]/g, "text-[18px]");

// 3. All body text to 14px
content = content.replace(/text-\[16px\]/g, "text-[14px]");

// 4. Hero section header to 65px
content = content.replace(/text-\[40px\] font-bold text-white mb-4/g, "text-[65px] font-bold text-white mb-4");

fs.writeFileSync('src/App.tsx', content);
