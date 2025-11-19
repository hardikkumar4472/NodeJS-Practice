const http = require('http');
const url = require('url');
const server=http.createServer((req,res)=>{
    if (req.method==='POST' && req.url==='/data'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            res.writeHead(200,{'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Data received', data: body}));
        })
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Not Found')
    }
})
server.listen(3000, () => {
    console.log('server running on port 3000')
})
