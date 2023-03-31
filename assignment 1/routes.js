function requestHandled(req, res){
    let url = req.url
let method = req.method
let fs = require('fs')
// console.log(req);
if(url === '/')
{
res.write('<html>')
res.write('<header><title>Message</title></header>')
res.write('<body><h1>hello!</h1><br> Input Username <form action="/create-user" method="POST"><input type= "text" name= "username"><button type="submit">SEND</button></form></body>')
res.write('</html>')
}
if(url === '/users')
{
res.write('<html>')
res.write('<header><title>Message</title></header>')
res.write('<body><li>hello!</li></body>')
res.write('</html>')
}
if(url === '/create-user' && method === 'POST'){
const body =[]
req.on('data', (chunk) =>{
    console.log(chunk);
    body.push(chunk)
})
return req.on('end', ()=> {
    const parseBody = Buffer.concat(body).toString()
    console.log(parseBody);
    const message  = parseBody.split('=')[1]
    console.log(message);
    // fs.writeFile('message.txt', message, (err) =>{
    //  res.statusCode = 302
    // res.setHeader('Location', '/')
    // return res.end()
    // })
  
})
}
}
module.exports = requestHandled
