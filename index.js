import express from "express"
import fs from 'fs'
const app=express()
const PORT=4000

const date=new Date();
const data=(date.getTime()/24/60/60).toString()
const dates=date.getDate()
console.log(dates)  
const data3="hai this the new file "  
app.get("/", function (request, response) {
  response.send({message:"the data is updateed"});
  fs.writeFile('./text.txt',data,(err)=>{
    console.log("written sucessfully")
})
});
app.get("/new", function (request, response) {
  response.send("file is created");
  fs.writeFile(`./date${dates} time${data}`+`.txt`,data3,(err)=>{
    console.log("the second file")
})
});

      




app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`))
