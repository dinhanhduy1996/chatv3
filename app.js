const express = require('express');
const app  = express();
const server  = require('http').createServer(app);
const io = require('socket.io')(server, {  
    cors:  {origin: "*"}
});



       app.get('/', (req, res) => {
  res.send('hello world')
})
 

            io.on('connection',(socket)=>{

              socket.on('chat message', function(msg){
                  io.emit('chat message', msg);
                  
              
          });

          });
        

const PORT = process.env.PORT||3000;
server.listen(PORT,()=>{
    console.log('server is running');
});
