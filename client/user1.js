// connecting with sockets.
const socket = io('http://localhost:3000');
 
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ikh5RHY4SkxRbSIsImlhdCI6MTUzMTQ3MTQ1NTIyMiwiZXhwIjoxNTMxNTU3ODU1LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6OTk5OTk5OTk5OSwiZW1haWwiOiJzYXl5ZWRzb2Z0dGVjaDMxM0BnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNheXllZCIsImZpcnN0TmFtZSI6IlNoYWhydWtoIiwidXNlcklkIjoiQnl2THZ3TVhRIn19.ajyp99kmSzKioObluzBZa2Dd07hZN0W2pWWLy4gvfRI"
const userId = "ByvLvwMXQ"
const chatRoomId = "BJuMqM8m7"

let chatMessage = {
  createdOn: Date.now(),
  receiverId: 'B1C8cjmXm',//putting user2's id here 
  receiverName: "Ahtesham Sayyed",
  senderId: userId,
  senderName: "Shahrukh Sayyed"
}

let chatSocket = () => {

  socket.on('verifyUser', (data) => {

    console.log("socket trying to verify user");

    socket.emit("set-user", authToken);

  });

  socket.on(userId, (data) => {

    console.log("you received a message from " + data.senderName)
    console.log(data.message)

  });

  socket.on("online-user-list", (data) => {

    console.log("Online user list is updated. some user can online or went offline")
    console.log(data)

  });


  $("#send").on('click', function () {

    let messageText = $("#messageToSend").val()
    chatMessage.message = messageText;
    chatMessage.chatRoom = chatRoomId;
    socket.emit("chat-msg", chatMessage)

  })
  

  $("#createChatRoom").on('click', function () {

    //route to createRoom of ChatRoomController and pass the retrieved values to the next function

    let chatRoomDetails = {
      chatRoomTitle: 'Test',
      chatRoomLink: 'Test',  
      userId: userId,
      userName: chatMessage.senderName,
    }

    socket.emit("create-chat-room", chatRoomDetails) // emit with the retrieve details

  })


  $("#joinChatRoom").on('click', function () {

    let chatRoomDetails = {
      userId: userId,
      userName: chatMessage.senderName,
      chatRoomId: chatRoomId

    }

    socket.emit("join-chat-room", chatRoomDetails) // emit with the retrieve details

  })

  $("#leaveChatRoom").on('click', function () {

    let chatRoomDetails = {
      userId: userId,
      userName: chatMessage.senderName,
      chatRoomId: chatRoomId
    }

    socket.emit("leave-chat-room", chatRoomDetails) // emit with the retrieve details

  })

  socket.on("leaved-chatroom", (data) => {

    console.log("User leaved from Chat Room.")
    console.log(data)

  });

  socket.on("created-chatroom", (data) => {

    console.log("User created the Chat Room.")
    console.log(data)

  });

  socket.on("joined-chatroom", (data) => {

    console.log("User joined the Chat Room.")
    console.log(data)

  });


  $("#messageToSend").on('keypress', function () {

    socket.emit("typing", chatMessage.senderName)

  })


  socket.on("typing", (data) => {

    console.log(data + " is typing")


  });



}// end chat socket function

chatSocket();
