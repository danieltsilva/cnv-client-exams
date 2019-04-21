import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchQuestion } from '../../actions';

class QuestionDelete extends React.Component {
    componentDidMount() {
        console.log('[DELETE] FETCH QUESTION');
        //this.props.fetchQuestion();
    }
    
    renderActions() {
        return (
            <>
                <div class="ui button negative">Delete</div>
                <div class="ui cancel button">Cancel</div>
            </>
        );
    }

    render() {
        return (
            <div>
                Delete Question
                <Modal 
                    title="Question Delete"
                    content="Are you sure you want to delete the question?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
}

export default QuestionDelete;