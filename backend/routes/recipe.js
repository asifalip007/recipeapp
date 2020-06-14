const router = require('express').Router();
let Recipe =  require('../models/recipes.js');

router.route('/').get((req,res) => {
    Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const username = req.body.username;
    const date = req.body.date;
    const foodname = req.body.foodname;
    const ingredients = req.body.ingredients;
    const procedure = req.body.procedure;

    const newRecipe = new Recipe({
        name,
        username,
        date,
        foodname,
        ingredients,
        procedure
    })

    newRecipe.save()
    .then(() => res.json("Recipe added"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').delete((req,res)=>{
    Recipe.findByIdAndDelete(req.params.id)
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').post((req,res)=>{
    Recipe.findById(req.params.id)
    .then(recipes => {
        recipes.name = req.body.name;
        recipes.username = req.body.username;
        recipes.date = req.body.date;
        recipes.foodname = req.body.foodname;
        recipes.ingredients = req.body.ingredients;
        recipes.procedure = req.body.procedure;

        recipes.save()
        .then(() => res.json("Recipe updated"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
})

module.exports = router;