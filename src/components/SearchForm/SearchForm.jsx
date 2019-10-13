import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchForm.module.css';

const SearchForm = ({ inputValue, handleChange, handleSubmit }) => (
  <form className={style.searchForm} onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      value={inputValue}
      onChange={handleChange}
    />
  </form>
);

SearchForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
