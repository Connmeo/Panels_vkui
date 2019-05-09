import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { Home, Page1, Page2, Page3 } from './Panels';

class App extends React.Component {
  // state компонента можно писать без использования constructor
  state = {
    activePanel: 'home'
  };

  go = e => {
    this.setState({ activePanel: e.currentTarget.dataset.to });
  };

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" go={this.go} />
        <Page1 id="page1" go={this.go} />
        <Page2 id="page2" go={this.go} />
        <Page3 id="page3" go={this.go} />
      </View>
    );
  }
}

export default App;
