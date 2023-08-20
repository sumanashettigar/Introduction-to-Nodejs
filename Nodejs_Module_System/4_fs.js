// // FILE SYSTEM MODULE WITH FILES

// //Files system-->Read Write Update Delete files 
 const fs = require('fs')//importing libraries from file system module

// //Reading a file

// let filecontent = fs.readFileSync('file2.txt')

// console.log('output ' + filecontent)


// //Write inside a file

// fs.writeFileSync('file2.txt','Hello who is this') //this will over write te files original  content
// console.log("writen successfully")

// //Appending Data to the file - this will append the newdata to the file

// fs.appendFileSync('file2.txt' , ' -> Im sumana(appended data)')
// console.log('Appended successfully')

// //Deleting a file 

// fs.unlinkSync('file4.txt')
// console.log('File 4 has been deleted')

// //If i try to write to a file which doesn not existed then the function will create the file and write the content to it  
// fs.writeFileSync('file4.txt' , 'Hello im file4 recreated by write function')
// console.log("content has been writen to file4")

//FILE SYSTEM MODULES WITH DIRECTORIES

//creating an Directory
// fs.mkdirSync('MyDirectory')
// console.log("directory is created")

//To check the contents of the directory--> I placed few of my text files inside the MyDirectory folder
// let folderPath = 'C:\\Users\\sumana\\Documents\\Nodejs_Programmes\\Nodejs_Module_System\\MyDirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log("directory contents -->  ", folderContent)

//To check wether the directory is existing or not --> reurns boolean value
// let exists = fs.existsSync('MyDirectory')
//  console.log(exists)

//To delete the Directory --> need to remove all the content or files inside the directory then delete

fs.rmdirSync('MyDirectory')
console.log('The directory hase been deleted')