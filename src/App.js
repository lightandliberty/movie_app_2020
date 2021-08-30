import React from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
//import Potato from './Potato';  // ./는 같은 경로. App.js와 Potato.js는 같은 폴더이므로.
import PropTypes from 'prop-types'


function Food({name, picture, rating}){
  return (
      <div>
        <h2>I Like { name } </h2>
        <h4>{rating}/5.0</h4>
        <img src = { picture } alt = {name} />

      </div>
  );
}
       
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
},
{
  id:2,
    name: 'Samgyeopsal',
    image: 'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
},
{
  id:3,
  name: 'Bibimbap',
  image: 'https://simplycook.imgix.net/recipes/Bibimbap-_720x480.jpg?dpr=1&fit=crop&fm=jpg&h=600&ixlib=php-1.2.1&lossless=0&q=50&w=1440&s=be51c873eb0995b4d8b99b0a7acf4733',
  rating: 2,
},
{
  id:4,
  name: 'Doncasu',
  image: 'https://foodrecipesearch.com/wp-content/uploads/2017/10/Tonkatsu-Donkkaseu-696x669.jpg',
  rating: 3,
},
{
  id:5,
  name: 'Kimbap',
  image: 'https://i1.wp.com/k-recipes.com/wp-content/uploads/2018/02/Photo-Oct-03-5-31-28-PM-e1517803734651.jpg',
  rating: 4,
},
];   


function App() {
  return (
    <div>
       {foodILike.map(dish => (
         <Food 
         key = {dish.id} 
         name = {dish.name} 
         picture = {dish.image}
         rating = {dish.rating}
         />
       ))}
    </div>
  );
}

Food.propTypes =
{
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}


export default App;
