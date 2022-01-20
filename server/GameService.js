/** 
 * Base Game Service class
 * @type {GameService} 
*/
export default class GameService {

    constructor(id, messageRepository, clientRepository) {
        this.id = id;
        this.messageRepository = messageRepository;
        this.clientRepository = clientRepository;
        this.actionHandlers = {};
    }

    handleAction(socket, action, data) {
        let clientName = data.client.name;
    }

    getClientResponseData(socketId) {
        return false;
    }

    getClientRepository() {
        return this.clientRepository;
    }

    getClientRepository() {
        return this.messageRepository;
    }
}