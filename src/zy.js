jqnm gxvo tmeo nswt


// App.js
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

import './App.css'
const App = () => {
  const {register,formState:{errors},handleSubmit} = useForm();
  return (
    <div>
<form className='flex flex-col gap-5 items-center p-4 sm:max-w-[400px] md:max-w-[600px] mx-auto bg-white shadow-lg rounded-md'>
  <div className='header-form'>
    <h4>La aventura comienza aquí 🚀</h4>
    <p>¡Haz que tu aprendizaje sea fácil y divertido!</p>
  </div>
  <div className='container'>
    <div className='user-data'>
      <div className='entryarea'>
        <input 
          type='number' 
          required 
          className='input-field' 
          {...register("matriculaAlum", {required:true, valueAsNumber:true})}
        />
        <div className='labelline'>Matrícula</div>
        {
          errors.matriculaAlum?.type==="required" && 
          (
            <label className='error-message'>La matrícula debe contener 5 dígitos.</label>
          )
        }
      </div>
      <div className='entryarea'>
        <input type='text' required className='input-field' />
        <div className='labelline'>Nombre</div>
        <label className='error-message'>La matrícula debe contener 5 dígitos.</label>
      </div>

      <div className='entryarea'>
        <input type='text' required className='input-field' />
        <div className='labelline'>Apellido Paterno</div>
        <label className='error-message'>La matrícula debe contener 5 dígitos.</label>
      </div>

      <div className='entryarea'>
        <input type='text' required className='input-field' />
        <div className='labelline'>Apellido Materno</div>
        <label className='error-message'>La matrícula debe contener 5 dígitos.</label>
      </div>
    </div>
    <div className='user-password'>
      <div className='entryarea'>
        <input 
          type='text' 
          required 
          className='input-field' 
          {...register("correo", {required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/})}
        />
        <div className='labelline'>Correo Electrónico</div>
          {
            errors.correo?.type==="required" && 
            (
            <label className='error-message'>Este campo es requerido</label>
            )
          }
          {
            errors.correo?.type==="pattern" && 
            (
            <label className='error-message'>El formato de correo no es valido.</label>
            )
          }
      </div>
      <div className='entryarea'>
        <input 
          type='text' 
          required 
          className='input-field' 
          {...register("password", {required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[°"/()=¡#$@$!%*¿?&])([A-Za-z\d#$@$!%¿*?°"/()=¡&]|[^ ]){8,15}$/ })}
        />
        <div className='labelline'>Crear mi contraseña</div>
        <div className='error-message'>
          <p>
            La contraseña debe de tener el siguiente formato                       
            <ul /*style="display: flex; flex-direction: column; padding-left: 2rem;;"*/>
              <li>Minimo 8 caracteres </li>
              <li>Maximo 15 </li>
              <li>Al menos una letra mayúscula</li>
              <li>Al menos una letra minucula</li>
              <li>Al menos un dígito</li>
              <li>No espacios en blanco</li>
              <li>Al menos 1 caracter especial</li>
            </ul>
          </p>
        </div>
      </div>
      <div className='entryarea'>
        <input type='text' required className='input-field' />
        <div className='labelline'>Repetir la Contraseña</div>
        <label className='error-message'>La matrícula debe contener 5 dígitos.</label>
      </div>
    </div>
  </div>

  <button type='submit' className='submit-button'>Enviar</button>
</form>

    </div>
  );
};

export default App;
