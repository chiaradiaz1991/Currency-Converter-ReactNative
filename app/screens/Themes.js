import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem } from '../components/List';

const styles = EStyleSheet.create ({
    $blue: '$primaryBlue',
    $green: '$primaryOrange',
    $orange: '$primaryGreen',
    $purple: '$primaryPurple',
})

class Themes extends Component {
    handleThemePress = (color) => {
        console.log(color);
    };

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="blue"
                    onPress={()=> this.handleThemePress(styles.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$blue}
                />
                <ListItem
                    text="orange"
                    onPress={()=> this.handleThemePress(styles.$green)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$green}
                />
                <ListItem
                    text="green"
                    onPress={()=> this.handleThemePress(styles.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$orange}
                />
                <ListItem
                    text="purple"
                    onPress={()=> this.handleThemePress(styles.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={styles.$purple}
                />
            </ScrollView>
        );
    }
}
export default Themes;