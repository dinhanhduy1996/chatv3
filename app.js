const express = require('express');
const app  = express();
const server  = require('http').createServer(app);
const io = require('socket.io')(server, {  
    cors:  {origin: "*"}
});



//Khởi tao kết nối với MySQL Server

        //Tiến hàng kết nối
       
        con.connect(function(err) {
          if (err) throw err;
          //Kết nôi thành công
          console.log("Connected!");
          //Tiến hành khởi tạo databse
 

            io.on('connection',(socket)=>{

              socket.on('chat message', function(msg){
                  
                  
              
          });

          });
        });

const PORT = process.env.PORT||80;
server.listen(80,()=>{
    console.log('server is running');
});
