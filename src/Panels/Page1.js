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

import { getData1 } from '../Modules';

class Page1 extends React.Component {
  state = {
    data: []
  };

  // componentDidMount - это событие, которое срабатывает, когда компонент загружается
  componentDidMount = () => {
    // то есть когда компонент загрузится, он автоматически вызовет метод API для получения данных
    this.getData();
  };

  getData = () => {
    const updatedData = getData1();

    this.setState({ data: updatedData });
  };

  render() {
    const { data } = this.state;
    const { id, go } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader>Page 1</PanelHeader>
        <Group>
          <List>
            {data.map(item => (
              <Cell key={item}>{item}</Cell>
            ))}
          </List>
          <Div>
            <CellButton data-to="page2" onClick={go}>
              Go to Page 2
            </CellButton>
          </Div>
        </Group>
      </Panel>
    );
  }
}

export default Page1;
