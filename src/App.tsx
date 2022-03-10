import {View} from 'react-native';
import React from 'react';
import Logo from './images/logo_eee.svg';
import {Camera, CompanyLogo} from './images';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <CompanyLogo width={100} height={100} style={{alignSelf: 'center'}} />
      <Camera width={100} height={100} style={{alignSelf: 'center'}} />
    </View>
  );
};

export default App;
