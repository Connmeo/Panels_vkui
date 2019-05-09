import React from 'react';
import { Panel, CellButton, Group, Div, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Pages</PanelHeader>
    <Group>
      <Div>
        <CellButton data-to="page1" onClick={go}>
          Go to Page 1
        </CellButton>
        <CellButton data-to="page2" onClick={go}>
          Go to Page 2
        </CellButton>
        <CellButton data-to="page3" onClick={go}>
          Go to Page 3
        </CellButton>
      </Div>
    </Group>
  </Panel>
);

export default Home;
