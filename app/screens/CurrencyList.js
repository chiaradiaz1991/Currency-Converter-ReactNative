import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import currencies from '../data/currencies';

import { ListItem } from '../components/List';

const CurrencyList = () => (
    <View style={{flex:1}}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
            data={currencies}
            renderItem={({ item }) => <ListItem />}
            keyExtractor= {item => item}
        />
    </View>
)

export default CurrencyList;