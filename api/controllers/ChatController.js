/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise = require('bluebird');

module.exports = {

		addConv:function(req, res){

			var data_from_client = req.params.all();

			if(req.isSocket && req.method === 'POST'){
					// this is the message from connected client
					// so add new conversation
					Chat.create(data_from_client)
						.exec(function(error, data_from_client){
								console.log(data_from_client);
								Chat.publishCreate({id:data_from_client.id, message:data_from_client.message, user:data_from_client.user});
						});
			}
			else if(req.isSocket){
					// subscribe client to model changes
					Chat.watch(req);
					console.log('User subscribe to ' + req.socket.id);
			}
		}
};
