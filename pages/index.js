import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

import Layout from '../components/Layout';
import CardTemplate from '../components/CardTemplate';
import Data from '../Data/data.json';
import NoRecipe from '../components/NoRecipe';



export async function getServerSideProps () {
  let data;
  await axios.get("http://localhost:5000/recipes/").then(res => data = res.data);
  return {
    props:{
      recipes: data
    }
  }
}

class Index extends Component {
  componentDidMount() {
    if (this.props.recipes.length !== 0) {
      document.getElementById('noRecipe').style.display = 'none';
      document.getElementById('recipeList').style.display = 'block';
    } else {
      document.getElementById('noRecipe').style.display = 'block';
      document.getElementById('recipeList').style.display = 'none';
    }
  }
  render() {
    console.log(this.props.recipes)
    return (
      <Layout>
        <div className='uk-padding uk-container uk-text-center'>
          <p id='loginAlert' className='uk-margin-remove'>Food Tales is a collection of delicious food recipes. 
          <Link href="/login"><a style={{textDecoration:'none',outline:'none'}}> Sign In </a></Link>/ 
          <Link href="/create"><a style={{textDecoration:'none',outline:'none'}}> Sign Up </a></Link> 
          to add your recipes here.</p>
          <h4 className='uk-margin-remove'>Happy Cooking!</h4>
        </div>
        <NoRecipe />
        <div id='recipeList' >
          <div className='uk-grid-medium uk-child-width-1-3@s uk-padding' uk-grid='true'>
            {this.props.recipes.map(recipe => {
              return <CardTemplate card={recipe} />
            })}
          </div>
        </div>
      </Layout>
    )
  }
}


export default Index;