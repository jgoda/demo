pragma solidity ^0.4.15;

//initialize the contract
contract Users {
    //create our user struct with attributes
    struct Participant {
        string name;
        bool useradded;
        bool blockfin;
        bool block_real_estate;
        bool blockedu;
        bool blockhealth;
        bool blockgoods;
        bool blockent;
        bool blocktourism;
        bool blockfood;
        bool blockvoice;
        bool blocksms;
        bool blockADrec;
        bool blockADlive;
        bool blockrobo;
        bool blockt1;
        bool blockt2;
        bool blockt3;
        bool blockt4;
        bool blockt5;
        bool blockt6;
        bool blockt7;
        bool blockt8;
        bool blockt9;
        bool blockmon;
        bool blocktue;
        bool blockwed;
        bool blockthurs;
        bool blockfri;
        bool blocksat;
        bool blocksun;
        bool blocknational;
        bool unreadUCCType;
        bool unreadUCCMode;
        bool unreadUCCTime;
        bool unreadUCCDay;
        uint128[] consentnos;
        mapping (uint128 => bool) consentsmap;
    }
    
    //define mapping between mobile numbers and subscribers
    mapping (uint128 => Participant) subscribers;
    

    //add a new user
    function addUser(string _userName, uint128 _mobno ) public returns (bool success) {
        if(!subscribers[_mobno].useradded)  //check if user already exists
        {
            var newsubscriber = subscribers[_mobno]; //add new user
            newsubscriber.name = _userName; //assign username
            newsubscriber.useradded = true; //set user exists flag to true
            
            
            //set default preferences
            newsubscriber.blockfin = false;
            newsubscriber.block_real_estate= false;
            newsubscriber.blockedu = false;
            newsubscriber.blockhealth = false;
            newsubscriber.blockgoods = false;
            newsubscriber.blockent = false;
            newsubscriber.blocktourism = false;
            newsubscriber.blockfood = false;
            newsubscriber.blockvoice = false;
            newsubscriber.blocksms = false;
            newsubscriber.blockADrec = false;
            newsubscriber.blockADlive = false;
            newsubscriber.blockrobo = false;
            newsubscriber.blockt1 = true;
            newsubscriber.blockt2 = true;
            newsubscriber.blockt3 = false;
            newsubscriber.blockt4 = false;
            newsubscriber.blockt5 = false;
            newsubscriber.blockt6 = false;
            newsubscriber.blockt7 = false;
            newsubscriber.blockt8 = false;
            newsubscriber.blockt9 = true;
            newsubscriber.blockmon = false;
            newsubscriber.blocktue = false;
            newsubscriber.blockwed = false;
            newsubscriber.blockthurs = false;
            newsubscriber.blockfri = false;
            newsubscriber.blocksat = false;
            newsubscriber.blocksun = false;
            newsubscriber.blocknational = false;
            return(true);
        }
        else
        {
            return(false);
        }
    }
    
    //update type of UCC communication blocked by user
    //Allow user to add preferences for types of commercial calls that may be made
    function updateUserUCCType(uint128 _mobno, bool _blockfin, bool _block_real_estate, bool _blockedu, bool _blockhealth, bool _blockgoods, bool _blockent, bool _blocktourism, bool _blockfood) returns(bool success)
    {
        if(subscribers[_mobno].useradded)
        {
            subscribers[_mobno].blockfin = _blockfin;
            subscribers[_mobno].block_real_estate= _block_real_estate;
            subscribers[_mobno].blockedu = _blockedu;
            subscribers[_mobno].blockhealth = _blockhealth;
            subscribers[_mobno].blockgoods = _blockgoods;
            subscribers[_mobno].blockent = _blockent;
            subscribers[_mobno].blocktourism = _blocktourism;
            subscribers[_mobno].blockfood = _blockfood;
            subscribers[_mobno].unreadUCCType = true;
            return(true);
        }
        else
        {
            return(false);
        }
    }
    
    //Allow user to add preferences for modes in which commercial calls may be made
    function updateUserUCCMode(uint128 _mobno, bool _blockvoice, bool _blocksms, bool _blockADrec, bool _blockADlive, bool _blockrobo) returns(bool success)
    {
        if(subscribers[_mobno].useradded)
        {
            subscribers[_mobno].blockvoice = _blockvoice;
            subscribers[_mobno].blocksms = _blocksms;
            subscribers[_mobno].blockADrec = _blockADrec;
            subscribers[_mobno].blockADlive = _blockADlive;
            subscribers[_mobno].blockrobo = _blockrobo;
            subscribers[_mobno].unreadUCCMode = true;
            return(true);
        }
        else
        {
            return(false);
        }
    }
    
    //Allow user to add preferences for time at which commercial calls may be made
    function updateUserUCCTime(uint128 _mobno, bool _blockt1, bool _blockt2, bool _blockt3, bool _blockt4, bool _blockt5, bool _blockt6, bool _blockt7, bool _blockt8, bool _blockt9) returns(bool success)
    {
        if(subscribers[_mobno].useradded)
        {
            subscribers[_mobno].blockt1 = _blockt1;
            subscribers[_mobno].blockt2 = _blockt2;
            subscribers[_mobno].blockt3 = _blockt3;
            subscribers[_mobno].blockt4 = _blockt4;
            subscribers[_mobno].blockt5 = _blockt5;
            subscribers[_mobno].blockt6 = _blockt6;
            subscribers[_mobno].blockt7 = _blockt7;
            subscribers[_mobno].blockt8 = _blockt8;
            subscribers[_mobno].blockt9 = _blockt9;
            subscribers[_mobno].unreadUCCTime = true;
            return(true);
        }
        else
        {
            return(false);
        }
    }
    
    //Allow user to add preferences for days on which commercial calls may be made
    function updateUserUCCDay(uint128 _mobno, bool _blockmon, bool _blocktue, bool _blockwed, bool _blockthurs, bool _blockfri, bool _blocksat, bool _blocksun, bool _blocknational) returns(bool success)
    {
        if(subscribers[_mobno].useradded)
        {
            subscribers[_mobno].blockmon = _blockmon;
            subscribers[_mobno].blocktue = _blocktue;
            subscribers[_mobno].blockwed = _blockwed;
            subscribers[_mobno].blockthurs = _blockthurs;
            subscribers[_mobno].blockfri = _blockfri;
            subscribers[_mobno].blocksat = _blocksat;
            subscribers[_mobno].blocksun = _blocksun;
            subscribers[_mobno].blocknational = _blocknational;
            subscribers[_mobno].unreadUCCDay = true;
            return(true);
        }
        else
        {
            return(false);
        }
    }
    
    function doesUserExist(uint128 _mobno) constant returns(bool)
    {
        return(subscribers[_mobno].useradded);
    }
    
    //Retrive user preferences for types of UCC calls
    function getUserUCCtype(uint128 _mobno) constant returns (bool, bool, bool, bool, bool, bool, bool, bool)
    {
        var subscriberdet = subscribers[_mobno];
        return(subscriberdet.blockfin,
            subscriberdet.block_real_estate,
            subscriberdet.blockedu,
            subscriberdet.blockhealth,
            subscriberdet.blockgoods,
            subscriberdet.blockent,
            subscriberdet.blocktourism,
            subscriberdet.blockfood);
    }
    
    //Retrive user preferences for modes of UCC calls
    function getUserUCCMode(uint128 _mobno) constant returns (bool, bool, bool, bool, bool)
    {
        var subscriberdet = subscribers[_mobno];
        return(subscriberdet.blockvoice,
            subscriberdet.blocksms,
            subscriberdet.blockADrec,
            subscriberdet.blockADlive,
            subscriberdet.blockrobo);
    }
    
    //Retrive user preferences for timings of UCC calls
    function getUserUCCTime(uint128 _mobno) constant returns (bool, bool, bool, bool, bool, bool, bool, bool, bool)
    {
        var subscriberdet = subscribers[_mobno];
        return(subscriberdet.blockt1,
            subscriberdet.blockt2,
            subscriberdet.blockt3,
            subscriberdet.blockt4,
            subscriberdet.blockt5,
            subscriberdet.blockt6,
            subscriberdet.blockt7,
            subscriberdet.blockt8,
            subscriberdet.blockt9);
    }
    
    //Retrive user preferences for days of UCC calls
    function getUserUCCDay(uint128 _mobno) constant returns (bool, bool, bool, bool, bool, bool, bool, bool)
    {
        var subscriberdet = subscribers[_mobno]; 
        return(subscriberdet.blockmon, 
            subscriberdet.blocktue, 
            subscriberdet.blockwed, 
            subscriberdet.blockthurs, 
            subscriberdet.blockfri, 
            subscriberdet.blocksat, 
            subscriberdet.blocksun, 
            subscriberdet.blocknational);
    }
    
    //Allow user to add consent to commercial number
    function addUserConsent(uint128 _mobno, uint128 _consentno) returns(bool success)
    {
        if(subscribers[_mobno].useradded)
        {
            subscribers[_mobno].consentsmap[_consentno] = true;
            subscribers[_mobno].consentnos.push(_consentno);
            return(true);
        }
        else
        {
            return(false);
        }
    }
    
    
    //Allow subscriber to revoke consent to commercial number
    function revokeUserConsent(uint128 _mobno, uint128 _consentno) returns (bool success)
    {
        
        if(subscribers[_mobno].useradded)
        {
            subscribers[_mobno].consentsmap[_consentno] = false;
            return(true);
        }
        else
        {
            return(false);
        }
    }
    
    
    //get list of commercial numbers to which subscriber has given consent to make calls
    function getUserConsentlist(uint128 _mobno) constant returns (uint128[])
    {
        var currentSubscriber = subscribers[_mobno];
        uint consentslength = currentSubscriber.consentnos.length;
        uint128[] memory returnconsentlist = new uint128[](consentslength);
        uint j=0;
        
        for(uint i=0; i<consentslength; i++)
        {
            if(currentSubscriber.consentsmap[currentSubscriber.consentnos[i]])
            {
                returnconsentlist[j] = currentSubscriber.consentnos[i];
                j++;
            }
        }
        return returnconsentlist;
    }
}
