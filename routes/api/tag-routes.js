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

router.post('/', async (req, res) => {
  const newTagData = await Tag.create({
    tag_name: req.body.tag_name
  });
  const tag = newTagData.get({plain:true});
  res.status(200).json(tag);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json(tagData);
});

module.exports = router;
