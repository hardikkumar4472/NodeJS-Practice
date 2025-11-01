const fs=require('fs');
if (fs.existsSync('./FS module/temp.txt')){
    console.log("File exist");
}
else{
    console.log("File not exists");
}