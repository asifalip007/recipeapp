function AddForm() {
    return (
        <form>
            <div className='uk-margin uk-child-width-expand'>
                <label htmlFor="foodname">Enter Item Name</label><br />
                <input id='foodname' type='text' />
            </div>
            <div className='uk-margin uk-child-width-expand'>
                <label htmlFor="ingredients">Enter Ingredients (Use comma seperation for readability)</label><br />
                <input id='ingredients' type='text' />
            </div>
            <div className='uk-margin uk-child-width-expand'>
                <label htmlFor="howcook">Cooking Procedure</label><br />
                <textarea id='howcook' style={{ height: '100px' }} />
            </div>
            <button className='uk-button uk-button-default uk-button-small uk-align-right'>Add Recipe</button>
        </form>
    )
}

export default AddForm;