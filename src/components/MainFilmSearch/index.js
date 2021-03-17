import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux'
import { fetchFilmsByQuery } from '../../store/thunks'

const { Search } = Input;

const MainFilmSearch = ({dispatch}) => {
  const handleSearchFieldSubmit = (searchValue) => {
    dispatch(fetchFilmsByQuery(searchValue))
  }
  return (
    <Search
      placeholder="Введите название фильма"
      allowClear
      enterButton="Найти"
      size="large"
      onSearch={handleSearchFieldSubmit}
    />
  )
}

export default connect()(MainFilmSearch)
 