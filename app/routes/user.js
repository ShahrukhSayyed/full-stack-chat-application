const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // params: firstName, lastName, email, password , mobileNumber.
    app.post(`${baseUrl}/signup`, userController.signUpFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for Registering User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User created",
            "status": 200,
            "data": {
                "__v": 0,
                "_id": "5b5729112d26c2154c81917e",
                "createdOn": "2018-07-24T13:26:41.000Z",
                "recoveryPassword": "",
                "mobileNumber": 9999999999,
                "email": "sayyedsofttech313@gmail.com",
                "lastName": "Sayyed",
                "firstName": "Shahrukh ",
                "userId": "HktzYiNVm"
            }
        }
    */


    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InJKY05IczRObSIsImlhdCI6MTUzMjQzNzgxMDM5MCwiZXhwIjoxNTMyNTI0MjEwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InJlY292ZXJ5UGFzc3dvcmQiOiIiLCJtb2JpbGVOdW1iZXIiOjk5OTk5OTk5OTksImVtYWlsIjoic2F5eWVkc29mdHRlY2gzMTNAZ21haWwuY29tIiwibGFzdE5hbWUiOiJTYXl5ZWQiLCJmaXJzdE5hbWUiOiJTaGFocnVraCIsInVzZXJJZCI6InIxX2RkVHRtNyJ9fQ.vlSZzs3TAVrJXCyiblLjq7YETsblr0Kv7y_fbz_1iv8",
                "userDetails": {
                    "recoveryPassword": "",
                    "mobileNumber": 9999999999,
                    "email": "sayyedsofttech313@gmail.com",
                    "lastName": "Sayyed",
                    "firstName": "Shahrukh",
                    "userId": "r1_ddTtm7"
                }
            }
        }
    */

    // params: email.
    app.post(`${baseUrl}/resetPassword`, userController.resetPasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api for Password Reset.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password reset Successfully",
            "status": 200,
            "data": {
                "error": false,
                "message": "Password reset successfully",
                "status": 200,
                "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1
                }
            }
        }
    */

    // params: recoveryPassword,password.
    app.post(`${baseUrl}/updatePassword`, userController.updatePasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} recoveryPassword recoveryPassword of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": {
                "error": false,
                "message": "Password Updated successfully",
                "status": 200,
                "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1
                }
            }
        }
    */

    // params: userId, oldPassword,newPassword.
    app.post(`${baseUrl}/changePassword`, auth.isAuthorized,userController.changePasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/changePassword api for Changing Password.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} oldPassword old Password of the user. (body params) (required)
     * @apiParam {string} newPassword new Password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": {
                "error": false,
                "message": "Password Updated successfully",
                "status": 200,
                "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1
                }
            }
        }
    */


    // params: userId.
    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/:userId/edit api for Updating User Details.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} firstName First Name of the user. (body params) (optional)
     * @apiParam {string} lastname Last Name of the user. (body params) (optional)
     * @apiParam {string} email email of the user. (body params) (optional)
     * @apiParam {string} password password of the user. (body params) (optional)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (optional)
    *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User details edited",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
    */


    // params: userId.
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/delete api for Deleteing User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the user successfully",
            "status": 200,
            "data": {
                "_id": "5b4c4870c9f75510a0e585f7",
                "__v": 0,
                "createdOn": "2018-07-16T07:25:36.000Z",
                "recoveryPassword": "B12N8iEV7",
                "mobileNumber": 9999999999,
                "email": "sayyedsofttech313@gmail.com",
                "password": "$2a$10$DJ.8pXJJyb36Vjg2B4bZR.89o5u0AW8nX1pgpUBmsk4J0S5kD3ltG",
                "lastName": "Sayyed",
                "firstName": "Shahrukh ",
                "userId": "r1_ddTtm7"
            }
        }
    */


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api for Getting all users.
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
                    "createdOn": "2018-07-16T07:25:36.000Z",
                    "recoveryPassword": "",
                    "mobileNumber": 9999999999,
                    "email": "sayyedsofttech313@gmail.com",
                    "password": "$2a$10$cCg7OMGPywbw4Bq9CtwntOG0CivCXqPDh0mfnUDhu2kV/g5a3DIL.",
                    "lastName": "Sayyed",
                    "firstName": "Shahrukh",
                    "userId": "r1_ddTtm7"
                },
                {
                    "createdOn": "2018-07-16T07:39:23.000Z",
                    "recoveryPassword": "",
                    "mobileNumber": 9999999999,
                    "email": "sayyedshahrukh@sggs.ac.in",
                    "password": "$2a$10$LN0Fz75lipG1w.KpUlVl9e.S64bYPcjS7oK.wJRh/V.NerfJ6b4Am",
                    "lastName": "Sayyed",
                    "firstName": "Ahtesham",
                    "userId": "HymnjTFXQ"
                }
            ]
        }
    */


    // params: userId.
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/:userId/details api for getting user details.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User Details Found",
            "status": 200,
            "data": {
                "createdOn": "2018-07-16T07:25:36.000Z",
                "recoveryPassword": "",
                "mobileNumber": 9999999999,
                "email": "sayyedsofttech313@gmail.com",
                "lastName": "Sayyed",
                "firstName": "Shahrukh",
                "userId": "r1_ddTtm7"
            }
        }
    */
  






    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/logout api to logout from application.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */

}
