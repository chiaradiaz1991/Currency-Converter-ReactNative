import React , { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import InputWithButton from '../components/TextInput/InputWithButton';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';
import { connect } from 'react-redux';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

class Home extends Component {

  handleChangeText = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handlePressBaseCurrency = () => {
    console.log('press base currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency'})
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Quote Currency'})
  };

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    console.log('options press');
    this.props.navigation.navigate('Options')
  };



  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          editable={false}
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          value={TEMP_QUOTE_PRICE}
        />
        <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
        />
        <LastConverted
          date={TEMP_LAST_CONVERTED}
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          conversionRate={TEMP_CONVERSION_RATE}
        />
      </Container>
    );
  }
}

export default connect()(Home);