/** 
 * Game Service storage class
 * @type {GameServiceRepository} 
*/
export default class GameServiceRepository {
    constructor() {
        this.services = [];
    }

    insert(gameservice) {
        this.services.push(gameservice);
    }

    findAll() {
        return this.services;
    }

    findById(id) {
        return this.services.find((service) => {
            return service.id === id;
        })
    }
}