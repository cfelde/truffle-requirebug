pragma solidity ^0.5.0;

contract RequireBug {
    function shouldFail() public pure returns (bool) {
        require(false, "Expected");
        return false;
    }
}
