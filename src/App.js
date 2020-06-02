import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     console.log("construct");
//   }
//   state={
//     count : 0
//   };
//   add = () =>{
//     this.setState(current => ({count:current.count+1}));
//   }
//   minus = () =>{
//     this.setState(current => ({count:current.count-1}));
//   }
//   componentDidMount(){
//     console.log("component rendered");
//   }
//   componentDidUpdate(){
//     console.log("I just update");
//   }

//   componentWillUnmount(){
//     console.log('good bye');
//   }
//   render (){
//     console.log("render");
//     return (
//       <div> 
//         <h1>The number is: {this.s.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//       );
//   }
// }

// class App extends React.Component{
//   state = {
//     isLoading : true,
//     movies : [],
//   }
//   getMovies = async() =>{
//     const {
//       data: {
//         data:{movies}
//         }
//       } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//     this.setState({movies, isLoading:false});
//   }
//   componentDidMount(){
//     // setTimeout (()=>{
//     //   this.setState({isLoading : false});
//     // }, 6000);
//     this.getMovies();
//   }
//   render(){
//     const {isLoading, movies} = this.state;
    
//     return (
//       <div>
//         {isLoading ? "Loading" : movies.map(movie =>
//           <Movie 
//           key = {movie.id}
//           id={movie.id} 
//           year={movie.year} 
//           title={movie.title} 
//           summary={movie.summary} 
//           poster={movie.poster} />
//         )}
//       </div>
//     )
//   }
// }

const foodILike = [
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
