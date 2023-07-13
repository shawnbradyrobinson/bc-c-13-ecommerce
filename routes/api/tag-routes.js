const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const records = await Tag.findAll({
    include: Product
  });

  res.json(records);
  
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  
  const recordData = await Tag.findByPk(req.params.id, {
    include: Product
  });

  res.json(recordData);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
