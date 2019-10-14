import React from 'react';
import style from './Error.module.css';

const Error = () => (
  <h2 className={style.error}>
    Sorry, we couldn't find photos. Please try again later.
  </h2>
);

export default Error;
