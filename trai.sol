pragma solidity ^0.4.15;

//initialize the contract
contract Users {
    //create our user struct with attributes
    struct Participant {
        uint128 id;
        string name;
        uint32 point;
    }
    
    event addedUser(
        string _uName,
        uint32 _uPoints,
        uint128 _uID
    );

    //define our state variables
    Participant[] public users;

    //add a new user
    function addUser(string userName, uint32 userPoint, uint128 mobno) public returns (bool success) {
      
        bool _userdoesntexist = true;
        
        for(uint j = 0; j < users.length; j++) {
            Participant memory testUser;
            testUser = users[j];
            if(testUser.id == mobno)
            {
                _userdoesntexist = false;
            }
        }
        
        if(_userdoesntexist)
        {
            Participant memory newUser;
            newUser.id = mobno;
            newUser.name = userName;
            newUser.point = userPoint;

            users.push(newUser);
            addedUser(userName, userPoint, mobno);
            return(true);
        }
        else
        {
            return(false);
        }
    }

    //get a list of the users

    function getUser(uint128 mobno) public returns (string, uint32) {
        string memory subscriberName = new string(64);
        uint32 subscriberprefs;

        for(uint i = 0; i < users.length; i++) {
            Participant memory showUser;
            showUser = users[i];
            if(showUser.id == mobno)
            {
                subscriberName = showUser.name;
                subscriberprefs = showUser.point;
            }
            
        }
        return(subscriberName,subscriberprefs);
    }
    
    function getUserlist() public constant returns(uint128[], uint32[])
    {
        uint length = users.length;
        uint128[] memory usersID = new uint128[](length);
        uint32[] memory userPoints = new uint32[](length);

        for(uint i = 0; i < users.length; i++) {
            Participant memory showUser;
            showUser = users[i];

            usersID[i] = showUser.id;
            userPoints[i] = showUser.point;
        }
        return(usersID, userPoints);
    }
    
    function getUserName(uint128 mobno) public returns(string)
    {
        string memory subscrName = new string(64);
        for(uint i = 0; i < users.length; i++) {
            Participant memory showUser;
            showUser = users[i];
            if(showUser.id == mobno)
            {
                subscrName = showUser.name;
            }
            
        }
        return(subscrName);
    }
    
    function changeUser(uint128 mobno, string _newUsername, uint32 _newUserpoints) public returns (bool success)
    {
        bool _userdoesntexist = true;
        
        for(uint j = 0; j < users.length; j++) {
            Participant memory testUser;
            testUser = users[j];
            if(testUser.id == mobno)
            {
                testUser.name = _newUsername;
                testUser.point = _newUserpoints;
                _userdoesntexist = false;
            }
        }
        
        if(_userdoesntexist)
        {
            return(false);
        }
        else
        {
            return(true);
        }
    }
}
