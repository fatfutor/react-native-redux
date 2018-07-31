import React from 'react';
import Start from '../Start'

class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
    headerStyle: { display: 'none' }
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Start navigate={navigate} />
    );
  }
}

export default StartScreen;