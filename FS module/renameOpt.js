const fs = require('fs');
fs.rename("./FS module/ShuBomBomBom.txt", "./FS module/temp.txt",(err)=>{
    if (err){
        console.log(err);
    }
    console.log("File renamed successfully")
})