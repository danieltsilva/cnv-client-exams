import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchQuestions } from '../../actions';

const MAX_CHARS_QUESTION_DESCRIPTION = 30;

class QuestionList extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    renderQuestionContent(question) {
        return (
            <div className="content">
                <Link
                    to={`/questions/${question.id}`}
                    className="header">{question.header}
                </Link>
                <div className="description">
                    {
                        _.truncate(question.statement, {
                            'length': MAX_CHARS_QUESTION_DESCRIPTION,
                            'separator': ' '
                        })
                    }
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