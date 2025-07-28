import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { estadoGlobalProductos } from '../../context/ContextProductos';
import { db } from '../../script/configFirebase';


export default function ScreenHome() {

  const { dataproductos, mandardatos, obtenerdatos, eliminardato } = useContext(estadoGlobalProductos);
  const [nombre, setNombre] = useState('');

  console.log(dataproductos);

  React.useEffect(() => {
    obtenerdatos()
  }, []);

  return (
    <View>
      <Text>ScreenHome</Text>

      <Button
        title="Subir dato a firebase"
        onPress={() => mandardatos("iPhone", '5', 19000)}
      />

      {dataproductos.map((producto, index) => (
        <View key={index} style={styles.productoContainer}>
          <Text>{producto.nombre} | {producto.precio} | {producto.stock}</Text>
          <Button
            title="Eliminar"
            onPress={() => eliminardato(producto.id)}

          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({}); 