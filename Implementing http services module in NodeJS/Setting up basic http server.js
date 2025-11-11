import http from 'http';
const server=http.createServer((req,res)=>{
    console.log(`Request Method is ${req.method} && Request url is ${req.url}`)
     res.writeHead(200, {
        'Content-Type': 'text/html',
        'X-Custom-Header': 'MyServer'
    });
    res.write("<H1>How are you</H1>");
    res.write('<p>Current time: ' + new Date() + '</p>');
    res.end('Hello World');
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
