var http = require('http')

let server = http.createServer((req,res)=>{
    console.log("This is my first server")

    res.end("<h1 style='color:blue'>Hello User</h1>")
})

server.listen('8000',()=>{console.log('server started....');
})