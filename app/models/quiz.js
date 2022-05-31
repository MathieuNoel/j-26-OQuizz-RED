const CoreModel = require("./coreModel");

class Quiz extends CoreModel {

    title;
    description;
    user_id;
    static  #tableName = 'user';

    constructor(obj) {
        super(obj);
        this.title = obj.title;
        this.description = obj.description;
        this.user_id = obj.user_id;
    }

    static get tableName() {
        return this.#tableName
    }
}

module.exports = Quiz;