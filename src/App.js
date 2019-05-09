import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './Panels/Home';
import Article from './Panels/Article';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'home',
      fetchedUser: null
    };
  }

  go = e => {
    this.setState({ activePanel: e.currentTarget.dataset.to });
  };

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" go={this.go} />
        <Article id="article" go={this.go} />
      </View>
    );
  }
}

export default App;
