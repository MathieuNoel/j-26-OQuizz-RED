class CoreModel {

    #id;

    constructor(obj) {
        this.#id = obj.id;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        if (isNaN(parseInt(value, 10))) {
            throw new Error('id must be an integer!');
        }
        this.#id = value;
    }

}

module.exports = CoreModel;