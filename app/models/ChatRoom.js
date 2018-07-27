/**
 * module dependencies
 */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let chatRoomSchema = new Schema({

  chatRoomId: { type: String, unique: true, required: true },
  chatRoomTitle: { type: String, default: '' },
  chatRoomLink: { type: String, default: '' },  
  userName: { type: String, default: '' },
  userId: { type: String, default: '' },
  active: { type: String, default: 'Yes' },
  activeUsers:[],
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now }

})
  
mongoose.model('ChatRoom', chatRoomSchema)
