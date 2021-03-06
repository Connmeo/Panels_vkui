import React from 'react';
import PropTypes from 'prop-types';
import {
  Panel,
  ListItem,
  Button,
  Group,
  Div,
  PanelHeader
} from '@vkontakte/vkui';

const Home = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Example</PanelHeader>
    <Group title="Navigation Example">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="article">
          go to panels
        </Button>
      </Div>
    </Group>
  </Panel>
);

export default Home;
