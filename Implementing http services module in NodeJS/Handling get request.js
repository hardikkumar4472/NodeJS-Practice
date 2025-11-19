const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{

    if (req.method==='GET' && req.url==='/'){
        res.end("hey");
    }
    else if (req.method==='GET' && req.url==='/about'){
        res.end("About me");
    }
    else{
        res.statusCode=400;
        res.end("An Error occured");
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
