function AccordionTemplate() {
    return (
        <li className='uk-margin-remove' >
            <a className='uk-accordion-title' href="#" style={{ backgroundColor: 'lightgrey', color: 'black', padding: '5px' }}>Item Name</a>
            <div className='uk-accordion-content' style={{ marginTop: '10px', marginBottom: '15px' }}>
                <div className='uk-margin'>
                    <p className='uk-margin-remove'>Recipe Added: 28/04/2020</p>
                </div>
                <div className='uk-margin'>
                    <h4 className='uk-margin-remove'>Ingredients</h4>
                    <p className='uk-margin-remove'>afa.afdaf.afd.adf</p>
                </div>
                <div className='uk-margin'>
                    <h4 className='uk-margin-remove'>How To Cook</h4>
                    <p className='uk-margin-remove'>afasda</p>
                </div>
            </div>
        </li>
    )
}

export default AccordionTemplate;