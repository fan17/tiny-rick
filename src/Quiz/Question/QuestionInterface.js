export default class QuestionInterface {
    constructor(id, text) {
        this._id = id
        this._text = text
    }

    id() {
        if (!this._id) {
            throw Error('You must implement this')
        }

        return this._id
    }

    text() {
        if (!this._text) {
            throw Error('You must implement this')
        }

        return this._text
    }
}
