import React from 'react';
import Navegacion from './Navegacion';
import ContextProductos from './src/context/ContextProductos';


export default function App() {
  return (
    <ContextProductos>
      <Navegacion />
    </ContextProductos>
  );
}

