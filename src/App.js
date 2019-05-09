import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, ScreenSpinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './Panels/Home';
import Article from './Panels/Article';

import * as API from './Modules';

class App extends React.Component {
  state = {
    activePanel: 'home',
    articles: [],
    activeArticle: {},
    popout: null
  };

  setPopout = popout => {
    this.setState({ popout });
  };

  setLoading = () => {
    this.setState({ popout: <ScreenSpinner /> });
  };

  getArticles = () => {
    this.setLoading();

    const updatedArticles = API.getArticles();

    this.setState({ articles: updatedArticles, popout: null });
  };

  getArticle = id => {
    this.setLoading();

    const updatedActiveArticle = API.getArticle(id);

    this.setState({ activeArticle: updatedActiveArticle, popout: null });
  };

  go = e => {
    this.setState({ activePanel: e.currentTarget.dataset.to });
  };

  render() {
    const { activePanel, activeArticle, articles, popout } = this.state;

    return (
      <View activePanel={this.state.activePanel} popout={popout}>
        <Home
          id="home"
          articles={articles}
          getArticles={this.getArticles}
          getArticle={this.getArticle}
          go={this.go}
        />
        <Article id="article" article={activeArticle} go={this.go} />
      </View>
    );
  }
}

export default App;
