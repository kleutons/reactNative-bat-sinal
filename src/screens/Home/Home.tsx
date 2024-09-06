import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './HomeStyles';
import { BatLogoHome } from '../../components/BatLogoHome/BatLogoHome';
import { BatButton } from '../../components/BatButton/BatButton';

export function Home() {

  const [showForm, setShowForm ] = useState(false);

  function handleShowForm(){
    return setShowForm(!showForm);
  }

  return (
    <>
      <View style={[styles.containerIndex, {display: showForm ? 'none': 'flex'}]}>
          <View style={styles.batLogo}>
            <BatLogoHome />
          </View>
          <Pressable
            onPress={handleShowForm}
          >
            <BatButton textBtn='⚡Activate Bat Signal' />
          </Pressable>
      </View>

      <View style={{display: showForm ? 'flex': 'none' }}>
        
        <View>
          <Pressable onPress={handleShowForm}>
            <BatButton textBtn='Voltar' />
          </Pressable>
          <Pressable>
            <BatButton textBtn='Enviar 🦇' />
          </Pressable>
        </View>
      </View>
    </>
  );
}