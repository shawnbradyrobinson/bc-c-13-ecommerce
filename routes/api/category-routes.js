const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const records = await Category.findAll({
    include: Product
  });

  res.json(records);
  
  
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const recordData = await Category.findByPk(req.params.id, {
    include: Product
  });
  // const product = recordData.map((record) => record.get({plain:true}));
  res.json(recordData);
});

router.post('/', async (req, res) => {
  // create a new category
  const newCategoryData = await Category.create({
      category_name: req.body.category_name,
  })
  const category = newCategoryData.get({plain:true});
  res.status(200).json(category);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
