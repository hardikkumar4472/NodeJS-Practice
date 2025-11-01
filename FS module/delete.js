const fs=require('fs');
fs.unlink('./FS module/temp.txt',(err)=>{
    if (err){
        console.log("ERR");
    }
    console.log("File deleted successfully");
})