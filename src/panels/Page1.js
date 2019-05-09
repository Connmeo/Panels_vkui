import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Panel, Group, ListItem, PanelHeader, Link, Div,CellButton } from '@vkontakte/vkui';
import Panel_ from './Panel_';




class Page1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'page1'
    }
  }

  render() {
    var {id} = this.props
    return (
       <Panel id={id}>
      <View activePanel={this.state.activePanel}>
        <Panel id="page1">
          <PanelHeader>Panel 1</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: 'panel_' }) }>
              Go to panel 2
            </CellButton>               
           </Group> 
        </Panel>
      </View>
      </Panel>
    )
  }
}


export default Page1;