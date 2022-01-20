/** 
 * Message class
 * @type {Message} 
*/
export default class Message {
    constructor(type, message, socketId) {
        this.type = type;
        this.message = message;
        this.socketId = socketId;
    }
}