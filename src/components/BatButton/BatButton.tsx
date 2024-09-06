import React from 'react';
import { Text } from 'react-native';

import { styles } from './BatButtonStyles';

interface IProps {
    textBtn: string
}

export function BatButton(props:IProps) {
  return (
    <Text style={styles.batButon}>
        {props.textBtn}
    </Text>
  );
}