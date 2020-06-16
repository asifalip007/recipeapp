import dbConnect from '../../../dbConnect';
import Recipes from '../../../models/recipes';

dbConnect();

export default async (req, res) => {
  const {method} = req;
  const {query} = req;
  switch (method){
      case 'GET':
          try {
            const recipes = await Recipes.find({username: req.query.parameter});
            res.status(200).json({success: true, data: recipes}) 
          } catch (error) {
              res.status(400).json({success: false});                
          }
          break;
      case 'DELETE':
        try {
          const recipes = await Recipes.deleteOne({_id: req.query.parameter});
          res.status(200).json({success: true, data: recipes}) 
        } catch (error) {
            res.status(400).json({success: false});                
        }
        break;
      case 'PUT':
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