// creating API endpoint for recipes/add

import dbConnect from '../../../dbConnect';
import Recipes from '../../../models/recipes';

// connecting with database
dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        // based on the request method(req.method) various handling functions are executed
        case 'POST':
             // handles POST requests received on /api/recipes/add
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