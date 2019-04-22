import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, editQuestion } from '../../actions';
import QuestionForm from './QuestionForm';
import QuestionPlaceholder from './QuestionPlaceholder';

class QuestionEdit extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editQuestion(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.question) {
      return <QuestionPlaceholder />;
    }

    return (
      <div>
        <h3>Edit a Question</h3>
        <QuestionForm
          initialValues={_.pick(this.props.question, 'header', 'statement')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { question: state.questions[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchQuestion, editQuestion }
)(QuestionEdit);
