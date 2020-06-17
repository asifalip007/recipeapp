import { Component } from 'react';
import axios from 'axios';

import Layout from '../components/Layout';
import CardTemplate from '../components/CardTemplate';
import NoRecipe from '../components/NoRecipe';
import Unauth from '../components/Unauth';



export async function getServerSideProps(context) {
  let data;
  const { params } = context
  await axios.get(`http://localhost:${process.env.PORT}/api/recipes`).then(res => data = res.data);
  return {
    props: {
      recipes: data.data,
      url: params.username,
      Param: params
    }
  }
}

class LoggedIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: '',
      username: ''
    }

  }
  componentDidMount() {
    if (this.props.recipes.length !== 0) {
      document.getElementById('noRecipe').style.display = 'none';
      document.getElementById('recipeList').style.display = 'block';
    } else {
      document.getElementById('noRecipe').style.display = 'block';
      document.getElementById('recipeList').style.display = 'none';
    }
    if(sessionStorage.getItem('userLogged') === 'true'){
      this.setState({
        isLogged: sessionStorage.getItem('userLogged'),
        username: sessionStorage.getItem('username')
      })
    }else if(localStorage.getItem('userKeepLogged') === 'true'){
      this.setState({
        isLogged: localStorage.getItem('userKeepLogged'),
        username: localStorage.getItem('usernameKeep')
      })
    }

  }
  render() {
    const logged = this.state.isLogged === 'true' && this.state.username === this.props.url ? 'block' : 'none'
    const inavlidlogin = this.state.isLogged === 'true' && this.state.username === this.props.url ? 'none' : 'block'
    return (
      <>
      <div style={{display:inavlidlogin}}>
        <Unauth />
      </div>
      <div style={{display:logged}}>
        <Layout>
          <div className='uk-padding uk-container uk-text-center'>
            <p id='loginAlert' className='uk-margin-remove'>Food Tales is a collection of delicious food recipes.</p>
            <h4 className='uk-margin-remove'>Happy Cooking!</h4>
          </div>
          <NoRecipe />
          <div id='recipeList' >
            <div className='uk-grid-medium uk-child-width-1-3@s uk-padding' uk-grid='true'>
              {this.props.recipes.map(recipe => {
                return <CardTemplate card={recipe} url={this.props.url} />
              })}
            </div>
          </div>
        </Layout>
      </div>
      </>
    )
  }
}


export default LoggedIndex;