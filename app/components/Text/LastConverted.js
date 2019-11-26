import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from 'react-native';
import styles from './styles';


const LastConverted = ({ base, quote, date, convertionRate })=> (
    <Text styles={styles.smallText} >
        1 { base } = { convertionRate } { quote } as of { moment(date).format('MMMM,D,YYYY')}
    </Text>
);


LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
  };
  
export default LastConverted;

