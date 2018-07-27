define({ "api": [
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/count/unseen",
    "title": "to get count of unseen messages.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"unseen chat count found.\",\n  \"status\": 200,\n  \"data\": 5\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatCountUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/find/unseen",
    "title": "to get paginated unseen chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"chat found and listed.\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"seen\": false,\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"seen\": false,\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatFindUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/for/group",
    "title": "to get paginated chats of Group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoom",
            "description": "<p>Chat Room Id . (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"All Chats Listed\",\n \"status\": 200,\n \"data\": [\n   {\n     \"chatId\": \"IELO6EVjx\",\n     \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n     \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n     \"message\": \"hello .. .. sourav\",\n     \"receiverId\": \"-E9zxTYA8\",\n     \"receiverName\": \"Rishabh Sengar\",\n     \"senderId\": \"-cA7DiYj5\",\n     \"senderName\": \"sourav das\"\n   },\n   {\n     \"chatId\": \"ZcaxtEXPT\",\n     \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n     \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n     \"message\": \"hello rishabh .. .. .. \",\n     \"receiverId\": \"-cA7DiYj5\",\n     \"receiverName\": \"sourav das\",\n     \"senderId\": \"-E9zxTYA8\",\n     \"senderName\": \"Rishabh Sengar\"\n   },\n   .........................\n ]",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  {\n  \"error\": true,\n  \"message\": \"No Chat Found\",\n  \"status\": 404,\n  \"data\": null\n  }\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatGetForGroup"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/for/user",
    "title": "to get paginated chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId receiving user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatGetForUser"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/unseen/user/list",
    "title": "to get user list of unseen chats.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatUnseenUserList"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/chat/mark/as/seen",
    "title": "to mark chats as seen.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatId",
            "description": "<p>Chat Id of chat which is to be marked as seen. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "PostApiV1ChatMarkAsSeen"
  },
  {
    "group": "chatroom",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/details/:chatRoomId",
    "title": "api for Getting Details of Chat Room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Room Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"chatRoomId\": \"SkY8DNM47\",\n        \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n        \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n        \"activeUsers\": [\n            {\n                \"user\": \"Shahrukh Sayyed\",\n                \"id\": \"r1_ddTtm7\"\n            }\n        ],\n        \"active\": \"No\",\n        \"userId\": \"r1_ddTtm7\",\n        \"userName\": \"Shahrukh Sayyed\",\n        \"chatRoomLink\": \"http://localhost:4200/chatroom/join/SkY8DNM47\",\n        \"chatRoomTitle\": \"Test\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatroom.js",
    "groupTitle": "chatroom",
    "name": "GetApiV1ChatroomDetailsChatroomid"
  },
  {
    "group": "chatroom",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/view/all",
    "title": "api for Getting Details of all Chat Rooms which are avaiable.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Room Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"chatRoomId\": \"SkY8DNM47\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Shahrukh Sayyed\",\n                    \"id\": \"r1_ddTtm7\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"r1_ddTtm7\",\n            \"userName\": \"Shahrukh Sayyed\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/SkY8DNM47\",\n            \"chatRoomTitle\": \"Test\"\n        },\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatroom.js",
    "groupTitle": "chatroom",
    "name": "GetApiV1ChatroomViewAll"
  },
  {
    "group": "chatroom",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/view/all/rooms/available/to/join/:userId",
    "title": "api for Getting Details of Chat Room which User can Join.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Room Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"chatRoomId\": \"SkY8DNM47\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Shahrukh Sayyed\",\n                    \"id\": \"r1_ddTtm7\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"r1_ddTtm7\",\n            \"userName\": \"Shahrukh Sayyed\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/SkY8DNM47\",\n            \"chatRoomTitle\": \"Test\"\n        },\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatroom.js",
    "groupTitle": "chatroom",
    "name": "GetApiV1ChatroomViewAllRoomsAvailableToJoinUserid"
  },
  {
    "group": "chatroom",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chatroom/view/all/rooms/user/joined/:userId",
    "title": "api for Getting Details of Chat Room which User is already Joined.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of of the User. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Room Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"chatRoomId\": \"SkY8DNM47\",\n            \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n            \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n            \"activeUsers\": [\n                {\n                    \"user\": \"Shahrukh Sayyed\",\n                    \"id\": \"r1_ddTtm7\"\n                }\n            ],\n            \"active\": \"No\",\n            \"userId\": \"r1_ddTtm7\",\n            \"userName\": \"Shahrukh Sayyed\",\n            \"chatRoomLink\": \"http://localhost:4200/chatroom/join/SkY8DNM47\",\n            \"chatRoomTitle\": \"Test\"\n        },\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatroom.js",
    "groupTitle": "chatroom",
    "name": "GetApiV1ChatroomViewAllRoomsUserJoinedUserid"
  },
  {
    "group": "chatroom",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/chatroom/delete",
    "title": "api for deleting Chat Room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the room successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b54b7534d4ab016ec8c7a4f\",\n        \"chatRoomId\": \"SkY8DNM47\",\n        \"__v\": 0,\n        \"modifiedOn\": \"2018-07-22T16:56:51.076Z\",\n        \"createdOn\": \"2018-07-22T16:56:51.000Z\",\n        \"activeUsers\": [\n            {\n                \"id\": \"r1_ddTtm7\",\n                \"user\": \"Shahrukh Sayyed\"\n            }\n        ],\n        \"active\": \"No\",\n        \"userId\": \"r1_ddTtm7\",\n        \"userName\": \"Shahrukh Sayyed\",\n        \"chatRoomLink\": \"http://localhost:4200/chatroom/join/SkY8DNM47\",\n        \"chatRoomTitle\": \"Test Updated\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatroom.js",
    "groupTitle": "chatroom",
    "name": "PostApiV1ChatroomDelete"
  },
  {
    "group": "chatroom",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/chatroom/update",
    "title": "api for Updating Chat Room.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomId",
            "description": "<p>Id of Chat Room. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "chatRoomTitle",
            "description": "<p>Title of Chat Room. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Chat Room details Updated\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chatroom.js",
    "groupTitle": "chatroom",
    "name": "PutApiV1ChatroomUpdate"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "api for getting user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2018-07-16T07:25:36.000Z\",\n        \"recoveryPassword\": \"\",\n        \"mobileNumber\": 9999999999,\n        \"email\": \"sayyedsofttech313@gmail.com\",\n        \"lastName\": \"Sayyed\",\n        \"firstName\": \"Shahrukh\",\n        \"userId\": \"r1_ddTtm7\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for Getting all users.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-07-16T07:25:36.000Z\",\n            \"recoveryPassword\": \"\",\n            \"mobileNumber\": 9999999999,\n            \"email\": \"sayyedsofttech313@gmail.com\",\n            \"password\": \"$2a$10$cCg7OMGPywbw4Bq9CtwntOG0CivCXqPDh0mfnUDhu2kV/g5a3DIL.\",\n            \"lastName\": \"Sayyed\",\n            \"firstName\": \"Shahrukh\",\n            \"userId\": \"r1_ddTtm7\"\n        },\n        {\n            \"createdOn\": \"2018-07-16T07:39:23.000Z\",\n            \"recoveryPassword\": \"\",\n            \"mobileNumber\": 9999999999,\n            \"email\": \"sayyedshahrukh@sggs.ac.in\",\n            \"password\": \"$2a$10$LN0Fz75lipG1w.KpUlVl9e.S64bYPcjS7oK.wJRh/V.NerfJ6b4Am\",\n            \"lastName\": \"Sayyed\",\n            \"firstName\": \"Ahtesham\",\n            \"userId\": \"HymnjTFXQ\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/changePassword",
    "title": "api for Changing Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>old Password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>new Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Password Updated successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersChangepassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InJKY05IczRObSIsImlhdCI6MTUzMjQzNzgxMDM5MCwiZXhwIjoxNTMyNTI0MjEwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InJlY292ZXJ5UGFzc3dvcmQiOiIiLCJtb2JpbGVOdW1iZXIiOjk5OTk5OTk5OTksImVtYWlsIjoic2F5eWVkc29mdHRlY2gzMTNAZ21haWwuY29tIiwibGFzdE5hbWUiOiJTYXl5ZWQiLCJmaXJzdE5hbWUiOiJTaGFocnVraCIsInVzZXJJZCI6InIxX2RkVHRtNyJ9fQ.vlSZzs3TAVrJXCyiblLjq7YETsblr0Kv7y_fbz_1iv8\",\n        \"userDetails\": {\n            \"recoveryPassword\": \"\",\n            \"mobileNumber\": 9999999999,\n            \"email\": \"sayyedsofttech313@gmail.com\",\n            \"lastName\": \"Sayyed\",\n            \"firstName\": \"Shahrukh\",\n            \"userId\": \"r1_ddTtm7\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Password reset successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5b5729112d26c2154c81917e\",\n        \"createdOn\": \"2018-07-24T13:26:41.000Z\",\n        \"recoveryPassword\": \"\",\n        \"mobileNumber\": 9999999999,\n        \"email\": \"sayyedsofttech313@gmail.com\",\n        \"lastName\": \"Sayyed\",\n        \"firstName\": \"Shahrukh \",\n        \"userId\": \"HktzYiNVm\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/updatePassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recoveryPassword",
            "description": "<p>recoveryPassword of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Password Updated successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUpdatepassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "api for Deleteing User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5b4c4870c9f75510a0e585f7\",\n        \"__v\": 0,\n        \"createdOn\": \"2018-07-16T07:25:36.000Z\",\n        \"recoveryPassword\": \"B12N8iEV7\",\n        \"mobileNumber\": 9999999999,\n        \"email\": \"sayyedsofttech313@gmail.com\",\n        \"password\": \"$2a$10$DJ.8pXJJyb36Vjg2B4bZR.89o5u0AW8nX1pgpUBmsk4J0S5kD3ltG\",\n        \"lastName\": \"Sayyed\",\n        \"firstName\": \"Shahrukh \",\n        \"userId\": \"r1_ddTtm7\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/:userId/edit",
    "title": "api for Updating User Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUseridEdit"
  }
] });
