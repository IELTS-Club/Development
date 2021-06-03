const MelipayamakApi = require('melipayamak')
    const username = '09102962624';
    const password = '@YOURplease2020';
    const api = new MelipayamakApi(username,password);
    const sms = api.sms();
    function sendSms(to,from,text){
        sms.send(to,from,text).then(res=>{
        //RecId or Error Number 
    }).catch(err=>{
        console.log(err)
    })

}
    
module.exports=sendSms;
