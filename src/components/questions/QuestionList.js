import React from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { fetchQuestions } from '../../actions';

//TODO Move to a global const file
const MAX_CHARS_QUESTION_DESCRIPTION = 30;

class QuestionList extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    renderQuestionContent(question) {
        return (
            <div className="content">
                <p className="header">{question.header}</p>
                <div className="description">
                    {question.statement.substring(0,MAX_CHARS_QUESTION_DESCRIPTION)}
                    {question.statement.length > MAX_CHARS_QUESTION_DESCRIPTION ? '...' : ''}
                </div>
            </div>
        )
    }

    renderList() {
        //TODO Check if there is really questions here
        return this.props.questions.map(question => {
            return (
                <div className="item" key={question.id}>
                    <i className="large list alternate outline middle aligned icon"></i>
                    {this.renderQuestionContent(question)}
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Questions</h2>
                <div className="ui relaxed divided list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: Object.values(state.questions),
    };
};

export default connect(
    mapStateToProps,
    { fetchQuestions }
  )(QuestionList);