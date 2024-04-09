import '../navbar.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  useEffect(() =>
    alert(
      'Especifica un id en la página de tu navegador, para que se vea reflejado en tu pantalla'
    )
  );

  return (
    <div className="user">
      <h1>USER ID: {id}</h1>
    </div>
  );
};

export default User;
