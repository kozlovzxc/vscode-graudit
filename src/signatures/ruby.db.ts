export const ruby = [
    /_send_\s*\(/g,
    /__send__\s*\(/g,
    /`.*`/g,
    /system\s*\(/g,
    /open\s*\(/g,
    /send\s*\(/g,
    /public_send\s*\(/g,
    /eval\s*\(/g,
    /exec\s*\(/g,
    /syscall\s*\(/g,
    /File\.new\s*\(/g,
    /fork\s*\(/g,
    /write\s*\(/g,
    /execve\s*\(/g,
    /params\[:[a-zA-Z0-9_]+\]\.constantize/g,
    /new\s*\(params\[:[a-zA-Z0-9_]+\]/g,
];
