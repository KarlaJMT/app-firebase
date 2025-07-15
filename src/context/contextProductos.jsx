import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../src/script/configFirebase';

export const estadoGlobalProductos = createContext();

const subirdato = async () => {
    try {
      const docRef = await addDoc(collection(db, 'productos'), {
        nombre: 'chocolate',
        cantidad: 2,
        fecha: new Date(),
      })
      console.log('Documento creado con el ID', docRef.id)
    } catch (error) {
      console.log('Error detectado.')
    }
  }



export default function contextProductos({ children }) {

    const [ dataproductos, setDataproductos ] = useState([])
    return (
        <estadoGlobalProductos.Provider value={{ dataproductos }}>
            { children }
        </estadoGlobalProductos.Provider>
    )
}