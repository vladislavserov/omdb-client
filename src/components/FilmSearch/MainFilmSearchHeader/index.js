import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux'
import { fetchFilmsByQuery } from '../../../store/thunks'
import { Button } from 'antd';

const { Search } = Input;

const MainFilmSearchHeader = ({ dispatch, setSearchValue }) => {
  const handleSearchFieldSubmit = (searchValue) => {
    dispatch(fetchFilmsByQuery(searchValue))
    setSearchValue(searchValue)
  }
  return (
    <div style={{height:'100%', display: 'flex', flexDirection: 'column'}}>
      <Search
        placeholder="Введите название фильма"
        allowClear
        enterButton="Найти"
        size="small"
        onSearch={handleSearchFieldSubmit}
        style={{width:"300px",/* marginLeft:'8px',*/ marginTop:'7px', alignSelf: 'flex-start'}}
      />
    </div>
  )
}

export default connect()(MainFilmSearchHeader)
 