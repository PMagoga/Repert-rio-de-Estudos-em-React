import React from 'react'

export const Container = ({ children }) => {
  return (
    <div>
        <h1>Conteúdo do componente Pai:</h1>
        {children}
    </div>
  );
};
