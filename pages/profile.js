import Layout from '../components/Layout';
import Accordion from '../components/AccordionTemplate';
import Addform from '../components/AddForm';

function Profile() {
    return (
        <Layout>
            <div className='uk-padding uk-width-2-3' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <div style={{ height: '190px', border: '0.5px solid black', position: 'relative', borderRadius: '20px' }}>
                    <div className='uk-text-center' style={{ position: 'absolute', left: '-50px', top: '20px', backgroundColor: 'white' }}>
                        <img id='userprofile' className='uk-border-circle' src='/user.png' style={{ width: '150px', height: '150px', border: '1px solid #e5e5e5', padding: '2px' }} />
                    </div>
                    <div style={{ position: 'absolute', left: "120px", top: '50px' }}>
                        <h1>Hi, Asif</h1>
                        <p className='uk-margin-remove'>Add More Recipes Into Your Fabulous List</p>
                        <p className='uk-margin-remove'>Recipes Added: 0</p>
                    </div>
                </div>
                <div>
                    <ul style={{ margin: '20px auto' }} uk-tab='connect: #datas'>
                        <li className='uk-active'>
                            <a href="#">Your Recipes</a>
                        </li>
                        <li>
                            <a href="#">Add New Recipe</a>
                        </li>

                    </ul>
                    <ul id="datas" className='uk-switcher uk-margin-remove' >
                        <li>
                            <div >
                                <ul style={{ margin: '0px' }} uk-accordion='true'>
                                    <Accordion />
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='uk-container uk-width-4-5'>
                                <Addform />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;