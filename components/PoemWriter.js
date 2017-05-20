const React = require('react');

function countWords(line){
  console.log(line.split(' '));
  return line.split(' ').filter(function(word) { return word }).length;
  // return line.split(' ').filter(word => word).length;
}

function validatePoem(poem){
  const lines = poem.split('\n').filter(line => line);
  // returns an array of lines without empty lines

  const correctLineCount = lines.length === 3;
  // validates that there are 3 lines

  const correctWordCount = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
  // validates length of each line

  return correctLineCount && correctWordCount;
  // returns true or false
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      poem: '',
      isValid: false
    };
  }

  handleChange(event){
    const content = event.target.value
    if (content) {
      this.setState({
        poem: content,
        isValid: validatePoem(content)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
