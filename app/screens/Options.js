import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from '../components/List';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handlePressThemes = () => {
    console.log('press themes');
  };

  handlePressSite = () => {
    console.log('press site');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons name="ios-arrow-forward" size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={<Ionicons name="ios-link" size={ICON_SIZE} color={ICON_COLOR} />}
        />
      </ScrollView>
    );
  }
}
export default Options;