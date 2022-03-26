const express = require('express');
const app  = express();
const server  = require('http').createServer(app);
const io = require('socket.io')(server, {  
    cors:  {origin: "*"}
});



            app.get('/', function(){});
 

            io.on('connection',(socket)=>{

              socket.on('chat message', function(msg){
                  
                  
              
          });

          });
        

const PORT = process.env.PORT||3000;
server.listen(PORT,()=>{
    console.log('server is running');
});
