import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './HomeStyles';
import { BatLogoHome } from '../../components/BatLogoHome/BatLogoHome';

export function Home() {
  return (
    <View style={styles.container}>
        <BatLogoHome />
    </View>
  );
}