// creating API endpoint for users

import dbConnect from '../../dbConnect';
import Users from '../../models/user';

// connecting with database
dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        // based on the request method(req.method) various handling functions are executed
        case 'GET':
            // handles GET requests received on /api/users
            try {
                const users = await Users.find();
                res.status(200).json({success: true, data: users}) 
            } catch (error) {
                res.status(400).json({success: false});                
            }
            break;
        default:
            res.status(400).json({success: false});  
    }
}