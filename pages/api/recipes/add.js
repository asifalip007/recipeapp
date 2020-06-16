import dbConnect from '../../../dbConnect';
import Recipes from '../../../models/recipes';

dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        case 'POST':
            try {
                const newRecipe = await Recipes.create(req.body)
                res.status(200).json({success: true, data: newRecipe}) 
            } catch (error) {
                res.status(400).json({success: false});                
            }
            break;
        default:
            res.status(400).json({success: false});  
    }
}