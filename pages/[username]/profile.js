import Layout from '../../components/Layout';
import Accordion from '../../components/AccordionTemplate';
import Addform from '../../components/AddForm';
import NoRecipe from '../../components/NoRecipe';
import axios from 'axios';
import { Component } from 'react';
import Unauth from '../../components/Unauth';

export async function getServerSideProps(context) {
    let rdata, udata, tudata;
    const { params } = context;
    await axios.get(`http://localhost:5000/recipes/${params.username}`).then(res => rdata = res.data);
    await axios.get(`http://localhost:5000/users/${params.username}`).then(res => udata = res.data);
    return {
        props: {
            userData: udata,
            recipeData: rdata,
            url: params.username
        }
    }
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeData: this.props.recipeData,
            isLogged: '',
            username: ''
        }
        this.recipeDelete = this.recipeDelete.bind(this);
        this.recipeAdd = this.recipeAdd.bind(this);
    }
    componentDidMount() {
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
    recipeDelete = (id) => {
        const filtered = this.state.recipeData.filter(item => item._id !== id)
        this.setState({
            recipeData: filtered
        })
    }
    async recipeAdd(username) {
        let update;
        await axios.get(`http://localhost:5000/recipes/${username}`).then(res => {
            update = res.data
            document.getElementById('recipes').classList = 'uk-active';
            document.getElementById('recipesanchor').setAttribute('aria-expanded', true);
            document.getElementById('addrecipesanchor').setAttribute('aria-expanded', false);
            document.getElementById('addrecipes').classList = '';
            document.getElementById('recipes-accord').classList = 'uk-active';
            document.getElementById('addrecipes-accord').classList = '';
        })
            .catch(err => console.log(err))
        this.setState({
            recipeData: update
        })
    }
    render() {
        console.log(this.props.url)
        const logged = this.state.isLogged === 'true' && this.state.username === this.props.url ? 'block' : 'none'
        const inavlidlogin = this.state.isLogged === 'true' && this.state.username === this.props.url ? 'none' : 'block'
        const norecipe_display = this.state.recipeData.length === 0 ? 'block' : 'none';
        const recipe_display = this.state.recipeData.length === 0 ? 'none' : 'block';
        return (
            <>
            <div style={{display:inavlidlogin}}>
                <Unauth />
            </div>
            <div style={{display:logged}}>
            <Layout>
                <div className='uk-padding uk-width-2-3' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <div style={{ height: '190px', border: '0.5px solid black', position: 'relative', borderRadius: '20px' }}>
                        <div className='uk-text-center' style={{ position: 'absolute', left: '-50px', top: '20px', backgroundColor: 'white' }}>
                            <img id='userprofile' className='uk-border-circle' src='/user.png' style={{ width: '150px', height: '150px', border: '1px solid #e5e5e5', padding: '2px' }} />
                        </div>
                        <div style={{ position: 'absolute', left: "120px", top: '50px' }}>
                            <h1>Hi,{this.props.userData.name}</h1>
                            <p className='uk-margin-remove'>Add More Recipes Into Your Fabulous List</p>
                            <p className='uk-margin-remove'>Recipes Added: {this.state.recipeData.length}</p>
                        </div>
                    </div>
                    <div>
                        <ul style={{ margin: '20px auto' }} uk-tab='connect: #datas'>
                            <li id='recipes' className='uk-active'>
                                <a id='recipesanchor' href="#">Your Recipes</a>
                            </li>
                            <li id='addrecipes'>
                                <a id='addrecipesanchor' href="#">Add New Recipe</a>
                            </li>

                        </ul>
                        <ul id="datas" className='uk-switcher uk-margin-remove' >
                            <li id='recipes-accord'>
                                <div >
                                    <div style={{ display: norecipe_display }}><NoRecipe /></div>

                                    <ul style={{ margin: '0px', display: recipe_display }} uk-accordion='true'>
                                        {this.state.recipeData.map(item => {
                                            return <Accordion data={item} delete={this.recipeDelete} />
                                        })}
                                    </ul>
                                </div>
                            </li>
                            <li id='addrecipes-accord'>
                                <div className='uk-container uk-width-4-5'>
                                    <Addform data={this.props.userData} add={this.recipeAdd} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Layout>
            </div>
            </>
        )
    }
}

export default Profile;
