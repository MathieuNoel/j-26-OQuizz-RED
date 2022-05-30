const CoreModel = require("./coreModel");

class Question extends CoreModel {

    question;
    anecdote;
    wiki;
    level_id;
    answer_id;
    quiz_id;

    constructor(obj) {
        super(obj)
        this.question = obj.question;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.answer_id = obj.answer_id;
        this.quiz_id = obj.quiz_id;
    }

}

module.exports = Question;