const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const AuthModel = mongoose.model('Auth')

const emailLib = require('../libs/emailLib');

/* Models */
const ChatRoomModel = mongoose.model('ChatRoom')


 
/* Get all room Details */

let getAllRooms = (req, res) => {
    ChatRoomModel.find()
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Chat Room Controller: getAllRooms', 10)
                let apiResponse = response.generate(true, 'Failed To Find Room Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Room Found', 'Chat Room Controller: getAllRooms')
                let apiResponse = response.generate(true, 'No Room Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Room Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all room Details

 
/* Get all room Details Joined*/
/* params : userId
*/

let getAllRoomsUserJoined = (req, res) => {
    ChatRoomModel.find({ activeUsers: { $elemMatch: { 'id': req.params.userId } } })
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Chat Room Controller: getAllRoomsUserJoined', 10)
                let apiResponse = response.generate(true, 'Failed To Find Room Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log(req.params)
                logger.info('No Room Found', 'Chat Room Controller: getAllRoomsUserJoined')
                let apiResponse = response.generate(true, 'No Room Found', 404, null)
                res.send(apiResponse)
            } else {

                let apiResponse = response.generate(false, 'All Room Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all room Details Joined



/* Get all room Details Available to Join*/
/* params : userId
*/

let getAllRoomsAvailableToJoin = (req, res) => {
    ChatRoomModel.find({ "activeUsers.id": { $ne: req.params.userId } })
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Chat Room Controller: getAllRoomsAvailableToJoin', 10)
                let apiResponse = response.generate(true, 'Failed To Find Room Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log(req.params)
                logger.info('No Room Found', 'Chat Room Controller: getAllRoomsAvailableToJoin')
                let apiResponse = response.generate(true, 'No Room Found', 404, null)
                res.send(apiResponse)
            } else {

                let apiResponse = response.generate(false, 'All Room Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all room Details available to Join





/* Get single room details */
/* params : chatRoomId
*/

let getSingleRoom = (req, res) => {
    ChatRoomModel.findOne({ 'chatRoomId': req.params.chatRoomId })
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Chat Room Controller: getSingleRoom', 10)
                let apiResponse = response.generate(true, 'Failed To Find Room Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Room Found', 'Chat Room Controller:getSingleRoom')
                let apiResponse = response.generate(true, 'No Room Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Room Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get single room 


/* Function for Deleting Room  */
/* params : chatRoomId
*/

let deleteRoom = (req, res) => {
    let findQuery = {
        $and: [
            { userId: req.body.userId },
            { chatRoomId: req.body.chatRoomId }
        ]
    }
    console.log(findQuery)
    ChatRoomModel.findOneAndRemove(findQuery).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Room Controller: deleteRoom', 10)
            let apiResponse = response.generate(true, 'Failed To delete room', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Room Found or User Not an Admin', 'Chat Room Controller: deleteRoom')
            let apiResponse = response.generate(true, 'No Room Found or User Not an Admin', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Deleted the room successfully', 200, result)
            res.send(apiResponse)
        }
    });// end ChatRoomModel model find and remove


}// end delete room

/* Function for editing Room  */
/* params : chatRoomId
   body   : ChatRoomTitle 
*/

let editRoom = (req, res) => {

    let options = req.body;
    ChatRoomModel.update({ 'chatRoomId': req.body.chatRoomId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Room Controller: editRoom', 10)
            let apiResponse = response.generate(true, 'Failed To edit room details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Chat Room Found', 'Chat Room Controller: editRoom')
            let apiResponse = response.generate(true, 'No Chat Room Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Chat Room details Updated', 200, result)
            res.send(apiResponse)
        }
    });// end ChatRoomModel update


}// end edit room

module.exports = {

    getAllRooms: getAllRooms,
    getAllRoomsUserJoined: getAllRoomsUserJoined,
    getAllRoomsAvailableToJoin: getAllRoomsAvailableToJoin,
    editRoom: editRoom,
    deleteRoom: deleteRoom,
    getSingleRoom: getSingleRoom,
}// end exports
