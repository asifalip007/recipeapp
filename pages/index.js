import { Component } from 'react';
import Layout from '../components/Layout';
import CardTemplate from '../components/CardTemplate';


class Index extends Component {
  render() {
    const cardTemplate = <CardTemplate />
    return (
      <Layout>
        <div className='uk-padding uk-container uk-text-center'>
          <p className='uk-margin-remove'>Food Tales is a collection of recipes of delicious foods. <a href='#' style={{ textDecoration: 'none', outline: 'none' }}>Sign In</a> to add your recipes here.</p>
          <h4 className='uk-margin-remove'>Happy Cooking!</h4>
        </div>
        <div className='uk-grid-medium uk-child-width-1-3@s uk-padding' uk-grid='true'>
          {cardTemplate}
          {cardTemplate}
          {cardTemplate}
          {cardTemplate}
        </div>
      </Layout>
    )
  }
}

export default Index;