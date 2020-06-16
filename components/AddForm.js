import { Component } from "react";
import axios from 'axios';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.data[0].name,
            username: this.props.data[0].username,
            date: '',
            foodname: '',
            ingredients: '',
            procedure: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        const today = new Date();
        const dd = new Date().getDate() < 10 ? `0${new Date().getDate()}`: new Date().getDate();
        const mm = new Date().getMonth() < 9 ? `0${new Date().getMonth()+1}`: new Date().getMonth()+1;
        const yyyy = new Date().getFullYear();
        this.setState({
            date: `${dd}/${mm}/${yyyy}`
        })

    }
    onChange = (e) => {        
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        axios.post('http://localhost:3000/api/recipes/add', this.state)
        .then(res => {
            console.log(res.data);
            this.setState({
                foodname: '',
                ingredients: '',
                procedure: ''
            })
            this.props.add(this.state.username);
        })
        .catch(err => console.log(`Error: ${err}`))
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='uk-margin uk-child-width-expand'>
                    <label htmlFor="foodname">Enter Item Name</label><br />
                    <input id='foodname' type='text' value={this.state.foodname} onChange={this.onChange} />
                </div>
                <div className='uk-margin uk-child-width-expand'>
                    <label htmlFor="ingredients">Enter Ingredients (Use comma seperation for readability)</label><br />
                    <input id='ingredients' type='text' value={this.state.ingredients} onChange={this.onChange} />
                </div>
                <div className='uk-margin uk-child-width-expand'>
                    <label htmlFor="procedure">Cooking Procedure</label><br />
                    <textarea id='procedure' style={{ height: '100px' }} value={this.state.procedure} onChange={this.onChange} />
                </div>
                <button className='uk-button uk-button-default uk-button-small uk-align-right'>Add Recipe</button>
            </form>
        )
    }
}

export default AddForm;