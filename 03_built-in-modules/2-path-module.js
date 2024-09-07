const path = require('path')

// it shows the seprate path sign
console.log(path.sep);

// it show the join path of any file
const filePath = path.join('content', 'subfolder', 'test.txt')

console.log(filePath);


// it show te base of any file path
const base = path.basename(filePath)

console.log(base);

// it shows the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute);

