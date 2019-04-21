import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import QuestionShow from './QuestionShow';
import history from '../../history';
import { fetchQuestion, deleteQuestion } from '../../actions';

class QuestionDelete extends React.Component {
    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.id);
    }
    
    renderActions() {
        const { id } = this.props.match.params;
        
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteQuestion(id)}
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.question) {
          return 'Are you sure you want to delete this question?';
        }
    
        return `Are you sure you want to delete the question with title: ${
          this.props.question.header
        }`;
    }

    render() {
        return (
            <React.Fragment>
                <Modal 
                    title="Question Delete"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
        return { question: state.questions[ownProps.match.params.id] };
    };
  
export default connect(
    mapStateToProps,
    { fetchQuestion, deleteQuestion }
)(QuestionDelete);