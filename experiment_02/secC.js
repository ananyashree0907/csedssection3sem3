const fs=require('fs');
fs.writeFileSync('example.txt','This is experiment 2 in FSD workshop','utf8');
console.log('create file run successfully');
const data=fs.readFileSync('example.txt','utf8');
console.log('file content is:',data);
fs.appendFileSync('example.txt','\n This is the new line');
console.log('example file is append');
fs.unlinkSync('student.txt');
console.log('example file is deleted');


fs.mkdirSync('sample folder');
console.log('new folder is created');

if(fs.existsSync('secCstudent.txt')){
    console.log('file exists');
}else{
    console.log('file not found,need to create this file');
}