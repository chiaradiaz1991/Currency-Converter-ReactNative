import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    
    handlePress = () => {
        console.log('press');
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}
export default CurrencyList;