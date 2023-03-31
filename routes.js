const fs = require('fs')

const requestHandler = (req,res) =>{
    const url = req.url
    const method = req.method
if(url === '/'){
        res.write('<html>')
    res.write('<header><title>Message</title></header>')
    res.write('<body><form action="/walid" method="POST"><input type= "text" name= "message"><button type="submit">SEND</button></form></body>')
    res.write('</html>')
    return res.end()
    }
if(url === '/walid' && method === 'POST'){
    const body =[]
    req.on('data', (chunk) =>{
        console.log(chunk);
        body.push(chunk)
        
    })
   return req.on('end', ()=> {
        const parseBody = Buffer.concat(body).toString()
        console.log(parseBody);
        const message  = parseBody.split('=')[1]
        fs.writeFile('message.txt', message, (err) =>{
         res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
        })
      
    })
}
}
// module.exports = {
//     handler: requestHandler,
//     text: 'hard code'

// }
// module.exports.handler = requestHandler;
// module.text= 'hard code'
module.exports = requestHandler;
// exports = requestHandler