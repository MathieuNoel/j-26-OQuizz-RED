const CoreModel = require("./coreModel");

class Answer extends CoreModel {

    description;
    question_id;
    static  #tableName = 'answer';

    constructor(obj) {
        super(obj);

        if (typeof obj.description !== 'string') {
            throw new Error('Answer.description must be a string!');
        }
        this.description = obj.description;

        if (isNaN(parseInt(obj.question_id, 10))) {
            throw new Error('Answer.question_id must be an integer!');
        }
        this.question_id = obj.question_id;
    }

    static get tableName() {
        return this.#tableName
    }

}

module.exports = Answer;