const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');

fs.readFile('./file1.txt','utf-8', (err,data)=>{
    if(data){
        let newData = data.split(" ")
        for(let i=0; i<newData.length; i+=1){
            if(newData[i]==''){
                newData.pop(i)
            }
        }
        console.log(newData)
  
    }
})