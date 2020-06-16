import dbConnect from '../../dbConnect';
import Users from '../../models/user';

dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        case 'GET':
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