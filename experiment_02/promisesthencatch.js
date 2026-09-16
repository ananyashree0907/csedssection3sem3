const fs=require("fs").promises;
async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello students!");
        console.log("file created and data written successfully");
    }catch(error){
        console.log("error:",error);
    }
}
writeFile();

//read file
async function readFile(){
    try{
        const data=await fs.readFile("promise.txt","utf8");
        console.log("file content:");
        console.log(data);
    }catch(error){
        console.error("Error:",error);
    }
}
readFile();

//rename
async function renameFile(){
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("file renamed successfully");
    }catch(error){
        console.log("error:",error);
    }
}
renameFile();

//update
async function appendFile(){
    try{
await fs.writeFile("promise_new.txt","welcome to fsd training");
        console.log("data append successfully");
    }catch(error){
        console.log("Error:",error);
    }
}
appendFile();











