import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchQuestions } from '../../actions';

//TODO Move to a global const file
const MAX_CHARS_QUESTION_DESCRIPTION = 30;

class QuestionList extends React.Component {
    componentDidMount() {
        console.log('FETCH QUESTION');
        console.log(this.props.match.params.id);
        //this.props.fetchQuestions();
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

    renderAdmin(question) {
        return (
            <div className="right floated content">
            <Link to={`/questions/edit/${question.id}`} className="ui button primary">
                Edit
            </Link>
            <Link
                to={`/questions/delete/${question.id}`}
                className="ui button negative"
            >
                Delete
            </Link>
            <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">Delete</div>
                <div className="visible content">
                    <i className="minus square outline icon"></i>
                </div>
            </div>
            </div>
        );
    }

    renderList() {
        const questions = this.props.questions;
        return questions.map(question => {
            if(_.isEmpty(question)) return <div className="emptyList" key='0'/>;
            return (
                <div className="item" key={question.id}>
                    {this.renderAdmin(question)}
                    <div className="right floated content">
                        
                    </div>
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