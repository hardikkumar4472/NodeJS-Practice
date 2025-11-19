const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    const queryObject=url.parse(req.url,true).query;
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(`hello, ${queryObject.name || 'John'}`);
});
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
