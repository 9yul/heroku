const express = require('express');
const app = express();
const uuid = require("uuid-apikey")

const server = app.listen(3001, () => {
    console.log("start server")
});

const key = {
    apiKey: 'V692VRG-VS3MMG3-PBDT95C-WHXMG1D',
    uuid: 'd9922de2-de47-4a40-b2db-a495e47b4805'
  }


app.get('/api/users/:apikey/:type', async (req, res) => {
    let {type, apiKey} = req.params;
    if(!key.apiKey == apiKey){
        res.send("apikey가 일치하지 않거나 없습니다.")
    }else{
    if(type == 'python'){
        res.send("축하합니다 당신은 파이썬이라는 이스터에그를 찾아냈습니다")
    }else if(type == "js"){
        res.send("축하합니다 당신은 js라는 이스터에그를 찾아냈습니다")
    }else{
        res.send(type)
    }
}
})