import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import Themes from './screens/Themes';

EStylesheet.build ({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',
    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $darkText: '#343434',
    
})

export default () => <Themes />

