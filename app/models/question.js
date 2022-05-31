const CoreModel = require("./coreModel");

class Question extends CoreModel {

    question;
    anecdote;
    wiki;
    level_id;
    answer_id;
    quiz_id;
    static  #tableName = 'user';

    constructor(obj) {
        super(obj)
        this.question = obj.question;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }
    static get tableName() {
        return this.#tableName
    }

}

module.exports = Question;