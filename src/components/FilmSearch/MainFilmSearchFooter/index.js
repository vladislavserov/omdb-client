import React, {useEffect, useMemo, useState} from 'react';
// import { Input } from 'antd';
import { connect } from 'react-redux'
import { fetchFilmsByQuery } from '../../../store/thunks'
import { Button } from 'antd';

// const { Search } = Input;

const MainFilmSearchFooter = ({ dispatch, searchValue}) => {
  const [ numberOfPage, setNumberOfPage ] = useState(2)
  // console.log(numberOfPage, searchValue)
  useEffect(() => setNumberOfPage(2), [searchValue])
  // const moreFilmsValue = useMemo(() => increment(value), [1]);
  // const increment = (value) => value+1
  const handleMoreFilmsButtonClick = (/*searchValue*/) => {
    dispatch(fetchFilmsByQuery(searchValue, numberOfPage))
    setNumberOfPage(numberOfPage+1)
  }
  return (
    <Button type="primary" block onClick={handleMoreFilmsButtonClick}> 
    {/* style={{ alignSelf: 'flex-end'}} */}
      Загрузить еще 10 фильмов
    </Button>
  )
}

export default connect()(MainFilmSearchFooter)
 