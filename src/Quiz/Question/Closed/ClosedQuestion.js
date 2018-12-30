import QuestionInterface from 'Quiz/Question/QuestionInterface'

export class ClosedQuestion extends QuestionInterface {
    constructor(id, text, options) {
        super(id, text)
        this._options = options
    }

    options() {
        return this._options
    }
}
