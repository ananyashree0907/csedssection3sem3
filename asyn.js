const fs = require('fs');

fs.writeFile('newSample.txt', 'This is a new file', 'utf8', (err) => {
    if (err) {
        console.log('error creating file', err);
        return;
    }

    console.log('file created successfully');

    fs.readFile('newSample.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('error reading file', err);
            return;
        }

        console.log('file content is:', data);
    });
});
//append
fs.appendFile('sample.txt','\nsemester:3',(err)=>{
    if(err){
        console.log('error updating files:',err);
    }else{
        console.log('\n3.file updated successfully');
    }
})
//delete
fs.unlink('example.txt',(err)=>{
    if(err){
        console.error('error deleting file',err);
    }else{
        console.log('\n4. file deleted successfully');
    }
})

