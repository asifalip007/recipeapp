function ModalTemplate(props) {
    return (
        <div id={props.card.id} uk-modal='true'>
            <div className='uk-modal-dialog uk-modal-body uk-padding-remove uk-margin-auto-vertical uk-width-2-3' >
                <button className='uk-modal-close-default' uk-close="true"></button>
                <div style={{maxHeight:'300px', overflow:'hidden'}}>
                    <img className='uk-width-1-1' src={props.card.image} alt='sandwich' />
                </div>
                <div className='uk-padding-small'>
                    <h1 style={{ marginBottom: '10px' }}><strong>{props.card.foodname}</strong></h1>
                    <div className='uk-flex uk-flex-between'>
                        <div className='uk-flex uk-flex-left'>
                            <p className="uk-margin-remove">Recipe Added:</p>
                            <p className="uk-margin-remove" style={{ paddingLeft: '5px' }}>{props.card.date}</p>
                        </div>
                        <div className='uk-flex  uk-align-middle' style={{ marginTop: '0px' }}>
                            <img src='/chefs-hat.svg' alt='user' style={{ width: "10px", height: "auto" }} />
                            <p className="uk-margin-remove" style={{ paddingLeft: '5px' }}>{props.card.user}</p>
                        </div>
                    </div>
                    <div>
                        <h4>Ingredients</h4>
                        <p>{props.card.ingredients}</p>
                    </div>
                    <div>
                        <h4>How To Cook</h4>
                        <p>{props.card.procedure}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTemplate;