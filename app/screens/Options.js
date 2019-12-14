import React, { Component } from 'react';
import { ScrollView, StatusBar, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem } from '../components/List';
import { connectAlert } from '../components/Alert';
import PropTypes from 'prop-types';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object, 
  }

  handlePressThemes = () => {
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    Linking.openURL('http://fixer.io').catch(this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be open right now"));
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
export default connectAlert(Options);