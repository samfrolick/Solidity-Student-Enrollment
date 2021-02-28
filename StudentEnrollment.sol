pragma solidity ^0.7.4;

contract ssfrolic_week4assignment{
    
    //enum for program levels
    enum ProgramLevel {freshman,sophomore,junior,senior,graduate}

    //student account struct
    struct studentAccount{
        string username;
        address walletAddress;
        uint age;
        string email;
        ProgramLevel programLevel;
        bool blockchainTrackEnrolled;
        
    }
    
    //array to hold studentAccount structs
    studentAccount[] public students;
    
    //integer to keep track of student array length
    uint public studentCounter = students.length;
    
    //owner address
    address public owner;
    //constructor to set the owner to original contract deployer
    constructor() { owner = msg.sender; }
   
    //modifier to check if owner before running delete transaction
    modifier onlyOwner(){
        require(
            msg.sender == owner
        );
        _;
    }
    
    
    //event to emit username
    event emitUsername(string _username);
    
    //function to add a new studentAccount to the students array
    function addStudent(string memory _username, address _walletAddress, uint _age, string memory _email, ProgramLevel _programLevel, bool _blockchainTrackEnrolled) public{
        //Initilize a studentAccount struct with the given input and add it to the students array
        students.push(studentAccount(_username, _walletAddress,_age,_email,_programLevel,_blockchainTrackEnrolled));
        
        //update studentCounter
        studentCounter = students.length;
        
        //trigger the emitUsername event to log the username to the blockchain log
        emit emitUsername(_username);
    }
    
    //function to add a new studentAccount to the students array, only accessable by contract owner
    function removeStudent(uint _index) public onlyOwner{
        //loop through the array and move specified index to end of the array
        for (uint i = _index; i<students.length-1; i++){
            students[i] = students[i+1];
        }
        //pop item at the end of the array
        students.pop();
        //update studentCounter
        studentCounter = students.length;
        
    }

}
//ssfrolic,0x9EE4a0d20e763C96288B87f013DDBB8E64fC11e8,28,ssfrolic@uark.edu,4,true
//fasantos,0x5F0AdEd2f61613E282FAD98eC924820b681b7F71,30,fasantos@uark.edu,4,true
//msteiner,0x2f617e8881D9FBC419CCDA3c8AE968288603211d,27,msteiner@uark.edu,4,true
//msmith,0xdD978E613E31667d191FEF56D96B0c11253Cdc28,29,msmith@uark.edu,4,true