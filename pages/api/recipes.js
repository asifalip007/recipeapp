import dbConnect from '../../dbConnect';
import Recipes from '../../models/recipes';

dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        case 'GET':
            try {
                const recipes = await Recipes.find().sort({"_id":-1});
                res.status(200).json({success: true, data: recipes}) 
            } catch (error) {
                res.status(400).json({success: false});                
            }
            break;
        default:
            res.status(400).json({success: false});  
    }
}