// En el directorio src, crea dos nuevos componentes: PersonalInfo.js y EmailPassword.js
// PersonalInfo.js
import React from 'react';

const PersonalInfo = ({ handleChange, personalInfo }) => {
  return (
    <div>
      <h2>Datos Personales</h2>
      <label>Nombre:
        <input type="text" name="name" value={personalInfo.name} onChange={handleChange} />
      </label>
      <label>Edad:
        <input type="number" name="age" value={personalInfo.age} onChange={handleChange} />
      </label>
      {/* Agrega más campos según sea necesario */}
    </div>
  );
};

export default PersonalInfo;
