import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader,CellButton,View, Div,Group} from '@vkontakte/vkui';



class Page1 extends React.Component {
	 constructor(props) {
    super(props);

    this.state = {
      activePanel: 'page1'
    }
  }
	render() {
		var {id} = this.props;
		return (
      <View activePanel='page1'>
        <Panel id= "page1">
          <PanelHeader>Panel 1</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: "page2" }) }>
              Go to panel 2
            </CellButton>
          </Group>
          </Panel>
        <Panel id  = 'page2'>
          <PanelHeader>Panel 2</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: "page2" }) }>
              Go to panel 3
            </CellButton>
          </Group>
        
        </Panel>
        
      </View>
			)
	}



}



export default Page1;

