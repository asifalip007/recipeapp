import dbConnect from '../../../dbConnect';
import Users from '../../../models/user';

dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        case 'POST':
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