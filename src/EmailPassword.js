// EmailPassword.js
import React from 'react';

const EmailPassword = ({ handleChange, emailPassword }) => {
  return (
    <div>
      <h2>Correo Electrónico y Contraseña</h2>
      <label>Email:
        <input type="email" name="email" value={emailPassword.email} onChange={handleChange} />
      </label>
      <label>Contraseña:
        <input type="password" name="password" value={emailPassword.password} onChange={handleChange} />
      </label>
    </div>
  );
};

export default EmailPassword;
