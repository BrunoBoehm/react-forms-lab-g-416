const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tweet: ''
    };
  }

  handleChange(event) {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.tweet.length} characters remanining.</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
