pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    mapping(address => uint256) public balanceOf;

    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Methods
    constructor() public {
        name = "Naman";
        symbol = "NKT";
        decimals = 18;
    }

    function mint(address _to, uint256 _value) external payable{
        require(msg.sender == address(this)); // Only the contract owner can mint
        balanceOf[_to] += _value;
        emit Transfer(address(0), _to, _value);
    }

    function transfer(address _to, uint256 _value) external payable {
        require(balanceOf[msg.sender] >= _value && _value > 0); // Check for enough funds and positive value
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
    }
}
