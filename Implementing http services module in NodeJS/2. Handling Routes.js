const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end("This is root page")
    }
    else if (req.url=='/about'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end('<H1>about me</H1>');
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.end('Error 404- Page Not Found');
    }
});
server.listen(3000,()=>{
    console.log("Server is running on PORT: 3000");
})
