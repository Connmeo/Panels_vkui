import React from 'react';
import {
  Panel,
  PanelHeader,
  Div,
  Group,
  List,
  Cell,
  CellButton
} from '@vkontakte/vkui';

import { getData3 } from '../Modules';

class Page3 extends React.Component {
  state = {
    data: []
  };

  // componentDidMount - это событие, которое срабатывает, когда компонент загружается
  componentDidMount = () => {
    // то есть когда компонент загрузится, он автоматически вызовет метод API для получения данных
    this.getData();
  };

  getData = () => {
    const updatedData = getData3();

    this.setState({ data: updatedData });
  };

  render() {
    const { data } = this.state;
    const { id, go } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader>Page 3</PanelHeader>
        <Group>
          <List>
            {data.map(item => (
              <Cell key={item}>{item}</Cell>
            ))}
          </List>
          <Div>
            <CellButton data-to="page1" onClick={go}>
              Back to Page 1
            </CellButton>
          </Div>
        </Group>
      </Panel>
    );
  }
}

export default Page3;
