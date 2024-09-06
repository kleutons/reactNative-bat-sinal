import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './BatLogoHomeStyles';
import BatLogo from '../../../assets/logo.jpg'

export function BatLogoHome() {
  return (
    <View style={styles.logo}>
        <Image source={BatLogo} />
    </View>
  );
}