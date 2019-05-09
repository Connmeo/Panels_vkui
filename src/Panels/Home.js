import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Panel, CellButton, Group, Div, PanelHeader } from '@vkontakte/vkui';

// используется не Component, а PureComponent, разница здесь: https://habr.com/ru/company/redmadrobot/blog/318222/
class Home extends PureComponent {
  componentDidMount = () => {
    const { getArticles } = this.props;

    getArticles();
  };

  chooseArticle = (e, id) => {
    const { getArticle, go } = this.props;

    getArticle(id);
    go(e);
  };

  render() {
    const { id, articles } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader>Blog</PanelHeader>
        <Group>
          <Div>
            {articles.map(article => (
              <CellButton
                key={article.id}
                onClick={e => this.chooseArticle(e, article.id)}
                data-to="article">
                {article.name}
              </CellButton>
            ))}
          </Div>
        </Group>
      </Panel>
    );
  }
}

export default Home;
