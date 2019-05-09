import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Panel,
  Group,
  PanelHeader,
  HeaderButton,
  Div
} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const Article = ({ article, id, go }) => (
  <Panel id={id}>
    <PanelHeader
      left={
        <HeaderButton onClick={go} data-to="home">
          <Icon24Back />
        </HeaderButton>
      }>
      {article.name}
    </PanelHeader>
    <Group>
      <Div>{article.text}</Div>
    </Group>
  </Panel>
);

export default Article;
