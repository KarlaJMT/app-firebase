import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useContext } from 'react';
import { estadoGlobalProductos } from '../../context/ContextProductos';


export default function ScreenHome() {

  const [dataproductos, mandardatos, obtenerdatos] = useContext(estadoGlobalProductos);

  return (
    <View>
      <Text>ScreenHome</Text>

      <Button
        title='subir'
        onPress={() => mandardatos()}
      />

      <Button
        title='obtener'
        onPress={() => obtenerdatos()}
      />

      {
        dataproductos.map((producto, index) => (
          <View key={index}>
            <Text> {producto.nombre} | {producto.precio} | {producto.stock} </Text>
          </View>

        ))
      }

    </View>
  )
}

const styles = StyleSheet.create({})