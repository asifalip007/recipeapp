// creating API endpoint for users/add

import dbConnect from '../../../dbConnect';
import Users from '../../../models/user';

// connecting with database
dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        // based on the request method(req.method) various handling functions are executed
        case 'POST':
            // handles POST requests received on /api/users/add
            try {
                const newUser = await Users.create(req.body)
                res.status(200).json({success: true, data: newUser}) 
            } catch (error) {
                res.status(400).json({success: false});                
            }
            break;
        default:
            res.status(400).json({success: false});  
    }
}