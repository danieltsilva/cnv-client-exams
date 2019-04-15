import  React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {

  static defaultProps = {
    value: ''
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  state = {
    value: this.props.value
  };

  render () {

    const handleChange = event => {
      this.setState({value: event.target.value});
    }

    return (
      <textarea id={this.props.id} 
                name={this.props.name} 
                defaultValue={this.state.value} 
                onChange={this.handleChange} />
    );
  }
}

export default TextArea;