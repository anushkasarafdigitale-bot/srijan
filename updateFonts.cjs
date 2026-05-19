const fs = require('fs');

let content = fs.readFileSync('/src/App.tsx', 'utf-8');

// Replace standard headings with 26px
// We look for text-[32px] font-bold and text-2xl font-bold etc.
content = content.replace(/text-\[32px\]/g, 'text-[26px]');

// Wait, the "Hero header" was originally text-[32px] md:text-[40px]...
// So replacing text-[32px] generally will break hero if it uses it.
// Let's do a more careful script.
