import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../script/configFirebase';
import { Button } from 'react-native-web';

export default function ScreenHome() {

  const subirdato = async () => {
    try {
      const docRef = await addDoc(collection(db, 'productos'), {
        nombre: 'chocolate',
        cantidad: 2,
        fecha: new Date,
      })
      console.log('Documento creado con el ID', docRef.id)
    } catch (error) {
      console.log('Error detectado.')
    }

  }


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