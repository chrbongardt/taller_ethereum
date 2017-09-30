pragma solidity ^0.4.13;

contract Blog {

    string title;

    Post[] posts;

    struct Post {
        address owner;
        string content;
        uint256 blockNumber;
        uint256 timeStamp;
    }

    function Blog(string _title) {
        title = _title;
    }

    function describe() public constant returns (string _title) {
        return title;
    }

    function post(string content) {
        posts.push(Post(msg.sender,content,block.number,now));
    }

    function getPostCount() public constant returns(uint) {
        return posts.length;
    }

    function getPostAtIndex(uint index) 
        public 
        constant 
        returns (
            string message, 
            address owner,
            uint256 blockNumber,
            uint256 timeStamp
        ) {
            return (
                posts[index].content,
                posts[index].owner,
                posts[index].blockNumber,
                posts[index].timeStamp
            );
    }
}