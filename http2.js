var http = require('http')

var f = require('fs')

var url = require('url')

let server = http.createServer((req,res)=>{
    let d = new Date();
    d = `\n ${d.getDate()}/ ${d.getMonth()}/ ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} request coming from:- ${req.url}`

    f.appendFileSync('detail.txt',d)

    let newurl = url.parse(req.url)

    console.log(newurl)

    // if(req.url == '/about'){
    //     res.end("<h1>This is my about page.</h1>")
    // }
    if(newurl.pathname =='/about'){
        res.end("<h1>This is my about page.</h1>")
    }
    else if(req.url == '/contact'){
        res.end("<h1>This is my contact page</h1>")
    }
    else if(req.url == '/'){
        res.end("<h1 style='color:blue'>Hello User</h1>")
    }

    
})

server.listen('8000',()=>console.log('server started....'))