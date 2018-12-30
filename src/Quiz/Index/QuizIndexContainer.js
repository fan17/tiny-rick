import React from 'react'
import QuizIndexComponent from 'Quiz/Index/QuizIndexComponent'
import sendAnswers from 'Quiz/SendAnswers/QuizSendAnswers'
import { OpenQuestion } from 'Quiz/Question/Open/OpenQuestion'
import { ClosedQuestion } from 'Quiz/Question/Closed/ClosedQuestion'
import { ClosedQuestionAnswer } from 'Quiz/Question/Closed/ClosedQuestionAnswer'

class QuizIndexContainer extends React.Component {
    constructor(props) {
        super(props)

        this.questions = [
            new OpenQuestion(1, 'How old are you?'),
            new ClosedQuestion(
                2,
                'How much commercial experience do you have with programming?',
                [
                    new ClosedQuestionAnswer(1, 'not at all'),
                    new ClosedQuestionAnswer(2, 'less than 1 year'),
                    new ClosedQuestionAnswer(3, '1-3 years'),
                    new ClosedQuestionAnswer(4, 'more than 3 years'),
                ]
            ),
            new OpenQuestion(3, 'How is your planet called?'),
        ]
    }

    render() {
        return (
            <QuizIndexComponent questions={this.questions} send={sendAnswers} />
        )
    }
}

export default QuizIndexContainer
