import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions';

const Placeholder = () => {
    return (
        <div className="ui placeholder">
            <div className="image header">
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="paragraph">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="paragraph">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

class QuestionShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.fetchQuestion(id);
    }

    render() {
        if (!this.props.question) {
          return <Placeholder />;
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