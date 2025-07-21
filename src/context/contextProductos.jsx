import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../script/configFirebase';

export const estadoGlobalProductos = createContext();

export default function ContextProductos({ children }) {

  const [dataproductos, setDataproductos] = useState([])

  const mandardatos = async () => {
    try {
      const docRef = await addDoc(collection(db, 'productos'), {
        nombre: nombre,
        stock: stock,
        precio: precio,
        date: new Date(),
      })
      console.log('Documento creado con el ID', docRef.id);
      obtenerdatos();
      
    } catch (error) {
      console.log('Error detectado.', error)
    }
  }


  const obtenerdatos = async () => {
    try {

      const querySnapshot = await getDocs(collection(db, 'productos'));
      const productoData = querySnapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data()
      }));
      setDataproductos(productoData); // se almacenan los datos aquí

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <estadoGlobalProductos.Provider value={{ dataproductos, mandardatos, obtenerdatos }}>
      {children}
    </estadoGlobalProductos.Provider>
  )
}
