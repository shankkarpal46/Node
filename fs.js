const { log } = require("console")
var f = require("fs")

// f.writeFile("abc.txt","\n I am not synchronous function",(err)=>{})

// f.writeFileSync("abc.txt","I am synchronous function")

// let ft = f.readFileSync("abc.txt")

// console.log(ft.toString());

// let ft = f.readFileSync("abc.txt",(err,res)=>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log(res.toString());
        
//     }
// })

// f.appendFile("abc.txt","\n I am append function",(err)=>"")

// f.copyFileSync("abc.txt","my.txt")

// f.unlinkSync("my.txt")

console.log("1")

let ft = f.readFile("abc.txt",(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res.toString())
    }
})

console.log("2")
