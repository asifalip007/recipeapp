// creating API endpoint for recipe list

import dbConnect from '../../dbConnect';
import Recipes from '../../models/recipes';

// connecting with database
dbConnect();

export default async (req, res) => {
    const {method} = req;
    switch (method){
        // based on the request method(req.method) various handling functions are executed
        case 'GET':
            // handles GET requests received on /api/recipes
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