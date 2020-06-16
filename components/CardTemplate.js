import ModalTemplate from '../components/ModalTemplate';

function CardTemplate(props) {
  return (
    <div>
      <div className='uk-card uk-card-default'>
        {/* <div className='uk-text-center uk-card-header uk-padding-remove' style={{maxHeight:'140px',overflow:'hidden'}}>
          <img className='uk-width-1-1' src='/sandwich.jpeg' alt='sandwich' />
        </div> */}
        <div className='uk-card-body' style={{ padding: '20px 10px 10px' }}>
          <h4 style={{ marginBottom: '10px' }}><strong>{props.card.foodname}</strong></h4>
          <div className='uk-flex uk-flex-between' style={{ fontSize: '10px' }}>
            <div className='uk-width-1-2'>
              <p className="uk-margin-remove">Recipe Added</p>
              <p className="uk-margin-remove">{props.card.date}</p>
            </div>
            <div className='uk-flex uk-flex-right uk-align-middle uk-width-1-2' style={{ marginTop: '0px' }}>
              <img src='/chefs-hat.svg' alt='user' style={{ width: "10px", height: "auto" }} />
              <p className="uk-margin-remove" style={{ fontSize: '10px', paddingLeft: '5px' }}>{props.card.name}</p>
            </div>
          </div>
        </div>
        <div className='uk-card-footer' style={{ padding: '15px 10px' }}>
          <button className='uk-button uk-button-default uk-button-small' style={{ outline: 'none' }} uk-toggle={`target: #_${props.card._id}`} >Get Recipe</button>
        </div>
      </div>
      <ModalTemplate card = {props.card} url={props.url} />
    </div>
  )
}

export default CardTemplate;