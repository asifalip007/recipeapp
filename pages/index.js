import { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';

import Layout from '../components/Layout';
import CardTemplate from '../components/CardTemplate';
import NoRecipe from '../components/NoRecipe';
import Router from 'next/router';



export async function getServerSideProps (context) {
  let data;
  await axios.get(`http://foodtales.herukoapp.com/api/recipes`).then(res => data = res.data);
  return {
    props:{
      recipes: data.data,
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
    if(localStorage.getItem('userKeepLogged')==='true'){
      const username = localStorage.getItem('usernameKeep');
      Router.push('/[username]',`/${username}`)
    }else if(sessionStorage.getItem('userLogged')==='true'){
      const username = sessionStorage.getItem('username');
      Router.push('/[username]',`/${username}`)
    }
  }
  render() {
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