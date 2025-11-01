const fs=require('fs');

fs.writeFile("./FS module/temp.txt","This is async operation",(err)=>{
    if (err){
        console.log(err);
    }
});

fs.readFile('./FS Module/temp.txt',"utf8",(err,data)=>{
    if (err){
        console.log("Exited with ", err);
    }
    console.log(data);
})