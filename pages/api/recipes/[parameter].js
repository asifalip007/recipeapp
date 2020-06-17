// creating API endpoint for recipes/[dynamicValues]

import dbConnect from '../../../dbConnect';
import Recipes from '../../../models/recipes';

// connecting with database
dbConnect();

export default async (req, res) => {
  const {method} = req;
  const {query} = req;
  switch (method){
    // based on the request method(req.method) various handling functions are executed
      case 'GET':
        // handles GET requests received on /api/recipes/[dynamicValues]
          try {
            const recipes = await Recipes.find({username: req.query.parameter});
            res.status(200).json({success: true, data: recipes}) 
          } catch (error) {
              res.status(400).json({success: false});                
          }
          break;
      case 'DELETE':
        // handles DELETE requests received on /api/recipes/[dynamicValues]
        try {
          const recipes = await Recipes.deleteOne({_id: req.query.parameter});
          res.status(200).json({success: true, data: recipes}) 
        } catch (error) {
            res.status(400).json({success: false});                
        }
        break;
      case 'PUT':
        // handles PUT requests received on /api/recipes/[dynamicValues] (update)
        try {
          const updateRecipe = await Recipes.findByIdAndUpdate(req.query.parameter,req.body);
          res.status(200).json({success: true, data: updateRecipe}) 
        } catch (error) {
            res.status(400).json({success: false});                
        }
        break;
      default:
          res.status(400).json({success: false});  
  }
}