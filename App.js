import React from 'react';
import Navegacion from './Navegacion';
import contextProductos from './src/context/contextProductos'


export default function App() {
  return (
    <contextProductos>
      <Navegacion/>
    </contextProductos>
    
  );
}

