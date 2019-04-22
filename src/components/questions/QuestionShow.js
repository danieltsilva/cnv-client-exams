import React from 'react';
import { connect } from 'react-redux';
import QuestionPlaceholder from './QuestionPlaceholder';
import { fetchQuestion } from '../../actions';

class QuestionShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchQuestion(id);
    }

    render() {
        if (!this.props.question) {
          return <QuestionPlaceholder />;
        }
    
        const { header, statement } = this.props.question;
    
        return (
          <div>
            <div className="ui header">{header}</div>
            <div className="ui content">
                <p>{statement}</p>
            </div>
          </div>
        );
      }
}

const mapStateToProps = (state, ownProps) => {
    return { question: state.questions[ownProps.match.params.id] };
  };
  
  export default connect(
    mapStateToProps,
    { fetchQuestion }
  )(QuestionShow);