const path =require('path')//importing libraries from path module

let ext = path.extname('C:\Users\sumana\Documents\Nodejs_Programmes\Nodejs_Module_System\demo.js')

let baseName = path.basename('C:\\Users\\sumana\\Documents\\Nodejs_Programmes\\Nodejs_Module_System\\file1.txt')

console.log(ext)
console.log(baseName)


console.log(__filename)

console.log(__dirname)
