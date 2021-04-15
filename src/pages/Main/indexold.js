import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MainFilmSearchHeader from '../../components/FilmSearch/MainFilmSearchHeader';
import { Button, Card, Col, Row } from 'antd';
import MainFilmSearchFooter from '../../components/FilmSearch/MainFilmSearchFooter';
import FilmPromo from '../../components/FilmSearch/filmPromo'

const { Meta } = Card;

const Main = ({ films }) => {
  const [ searchValue, setSearchValue ] = useState();
  // const minHight = films.map((film) => film)
  return (
    <>
      <div className="header">
      </div>
      <MainFilmSearchHeader setSearchValue={setSearchValue} />
        {/* </MainFilmSearchHeader> */}
      <div className="site-card-wrapper" style={{marginTop:'5px'/*, display:'flex', justifyContent:'center'*/}}>
      <Row gutter={16}>
      { films.map((film) =>
          <>
              {/* <Card
                  hoverable
                  style={{ width: 400 }}
                  cover={<img alt={film.Title} src={film.Poster} />}
                  >
                  <Meta title={<Link to={`/film/${film.imdbID}`}>{film.Title}</Link>} description="www.instagram.com" />
                </Card> */}
              <Col span={8} /*style={{display:'flex', justifyContent:'center', flexDirection:'row'}}*/>
                <img alt={film.Title} src={film.Poster} style={{maxHeight:'400px', maxWidth:'300px'}}/>
                <Card title={<Link to={`/film/${film.imdbID}`}>{film.Title}</Link>} bordered={false}>
                </Card>
              </Col>
              {/* <img src={film.Poster} alt={film.Title}/>
              <Link to={`/film/${film.imdbID}`}>{film.Title}</Link>
            <hr/> */}
          </>
      ) }
      </Row>
      </div>
      <MainFilmSearchFooter searchValue={searchValue}/>
        
    </>
  )
}



// export default connect(mapStateToProps)(Main);
const mapStateToProps = (state) => ({ films: state.films });
export default connect(mapStateToProps)(Main);
// () => <Main films={films}/>


// const films = [
//     {"Title":"Titanic","Year":"1997","imdbID":"tt0120338","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},
//     {"Title":"Titanic II","Year":"2010","imdbID":"tt1640571","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxMjQ1MjA5Ml5BMl5BanBnXkFtZTcwNjIzNjg1Mw@@._V1_SX300.jpg"},
//     {"Title":"Titanic: The Legend Goes On...","Year":"2000","imdbID":"tt0330994","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg"},
//     {"Title":"Titanic","Year":"1953","imdbID":"tt0046435","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU3NTUyMTc3Nl5BMl5BanBnXkFtZTgwOTA2MDE3MTE@._V1_SX300.jpg"},
//     {"Title":"Titanic","Year":"1996","imdbID":"tt0115392","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTBhMjUzMDItYTBlZS00OThkLWJmZDQtMjg1YTQ5ZDkxYmFjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"},
//     {"Title":"Raise the Titanic","Year":"1980","imdbID":"tt0081400","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyZWYzOTQtMTYzNC00OWIyLWE2NWItMzMwODA0OGQ2ZTRkXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"},
//     {"Title":"The Legend of the Titanic","Year":"1999","imdbID":"tt1623780","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNDU5MTk1MV5BMl5BanBnXkFtZTgwMDk5NDUyMTE@._V1_SX300.jpg"},
//     {"Title":"Titanic","Year":"2012","imdbID":"tt1869152","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMTA4MjIyZWEtZjYwMS00ZmQ1LWJiMDEtMWNiNTI5NWE3OGJjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"},
//     {"Title":"Titanic: Blood and Steel","Year":"2012–","imdbID":"tt1695366","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMjI2MzU2NzEzN15BMl5BanBnXkFtZTcwMzI5NTU3Nw@@._V1_SX300.jpg"},
//     {"Title":"In Search of the Titanic","Year":"2004","imdbID":"tt1719665","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAzNjY0NDA2NzdeQTJeQWpwZ15BbWU4MDIwMzc1MzEx._V1_SX300.jpg"}
// ];
// {/* <div className="site-card-wrapper">
//     <Row gutter={16}>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//       <Col span={8}>
//         <Card title="Card title" bordered={false}>
//           Card content
//         </Card>
//       </Col>
//     </Row>
//  </div> */}