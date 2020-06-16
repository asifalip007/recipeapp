import axios from 'axios';
import { Component } from 'react';

class AccordionTemplate extends Component {
    constructor(props){
        super(props);
        this.state = {
            update:{
                name: this.props.data.name,
                username: this.props.data.username,
                date: this.props.data.date,
                foodname: this.props.data.foodname,
                ingredients: this.props.data.ingredients,
                procedure: this.props.data.procedure
            }
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        const object = this.state.update;
        object[e.target.id] = e.target.value;
        this.setState({
            update: object
        })
    }
    deleteItem = (id) => {
        axios.delete(`http://localhost:3000/api/recipes/${id}`)
            .then(() => {
                console.log('Recipe Deleted!');
                this.props.delete(id);
            })
            .catch(err => console.log(err))
    }
    updateItem = (id) => (e) => {
        e.preventDefault();
        // console.log(this.state.update)
        axios.put(`http://localhost:3000/api/recipes/${id}`,this.state.update)
            .then(() => {
                console.log('Recipe Updated!');
                this.props.update(id,this.state.update)
            })
            .catch(err => console.log(err))
    }
    render() {
        // console.log(this.state.update)
        return (
            <li key={this.props.data._id} style={{ marginBottom: '10px' }} >
                <a className='uk-accordion-title' href="#" style={{ backgroundColor: 'lightgrey', color: 'black', padding: '5px' }}>{this.props.data.foodname}</a>
                <div className='uk-accordion-content' style={{ marginTop: '10px', marginBottom: '15px' }}>
                    <div className='uk-margin'>
                        <p className='uk-margin-remove'>Recipe Added: {this.props.data.date}</p>
                    </div>
                    <div className='uk-margin'>
                        <h4 className='uk-margin-remove'>Ingredients</h4>
                        <p className='uk-margin-remove'>{this.props.data.ingredients}</p>
                    </div>
                    <div className='uk-margin'>
                        <h4 className='uk-margin-remove'>How To Cook</h4>
                        <p className='uk-margin-remove'>{this.props.data.procedure}</p>
                    </div>
                    <div className='uk-flex uk-flex-left'>
                        <button className='uk-button uk-button-default uk-button-small' style={{ backgroundColor: 'blue', color: "white", border: "1px solid blue" }} uk-toggle={`target: #edit_${this.props.data._id}`} >Edit</button>
                        <button className='uk-button uk-button-default uk-button-small' style={{ marginLeft: '10px', backgroundColor: 'red', color: "white", border: "1px solid red" }} onClick={() => this.deleteItem(this.props.data._id)}>Delete</button>
                    </div>
                </div>
                <div id={`edit_${this.props.data._id}`} uk-modal='true'>
                    <div className='uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-2-3'>
                        <form>
                            <div className='uk-margin uk-child-width-expand'>
                                <label htmlFor='editfoodname'>Item Name</label> <br />
                                <input id='foodname' type='text' defaultValue={this.props.data.foodname} onChange={this.onChange} />
                            </div>
                            <div  className='uk-margin uk-child-width-expand'>
                                <label htmlFor='editingredients'>Ingredients</label> <br />
                                <input id='ingredients' type='text' defaultValue={this.props.data.ingredients} onChange={this.onChange}/>
                            </div>
                            <div  className='uk-margin uk-child-width-expand'>
                                <label htmlFor='editprocedure'>How To Cook</label> <br />
                                <textarea id='procedure' style={{ height: '100px' }} type='text' defaultValue={this.props.data.procedure} onChange={this.onChange}/>
                            </div>
                            <button type="button" className='uk-button uk-button-default uk-button-small uk-modal-close' onClick={this.updateItem(this.props.data._id)}>Update</button>
                        </form>
                    </div>
                </div>
            </li>
        )
    }
}

export default AccordionTemplate;