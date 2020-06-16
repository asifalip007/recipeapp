import dbConnect from '../../../dbConnect';
import Users from '../../../models/user';

dbConnect();

export default async (req, res) => {
  const {method} = req;
  switch (method){
      case 'GET':
          try {
            const user = await Users.find({username: req.query.parameters});
            res.status(200).json({success: true, data: user}) 
          } catch (error) {
              res.status(400).json({success: false});                
          }
          break;
      default:
          res.status(400).json({success: false});  
  }
}