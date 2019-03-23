'use-strict'

let chainManager = require('../chain/chain.js');

exports.getComplaintsWithDetail=function(ownerId,cb){

    chainManager.getComplaintsByOwnerId(ownerId,function(err,complaints){
        complaints=JSON.parse(complaints);


    getComplaintDetail(0,complaints,[],function(result){
        cb(null,result);
    })

    });

}

function getComplaintDetail(index,complaints,result,cb){
    if(index<complaints.length){
        let complaint = complaints[index];
        chainManager.getHeaderByHeaderName(complaint['uccSender'],function(err,headerDetails){

        complaint['tsp']=headerDetails['regTSP'];
        complaint['telemarketer_owner']=headerDetails['telemarketer_owner'];
        });
    }else{
        return cb(result);
    }
}