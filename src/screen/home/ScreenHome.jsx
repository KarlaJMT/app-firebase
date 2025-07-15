import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-web';

export default function ScreenHome() {

  


  return (
    <View>
      <Text>ScreenHome</Text>

      <Button
        title='subir'
        onPress={() => subirdato()}
      />

    </View>
  )
}

const styles = StyleSheet.create({})