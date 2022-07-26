const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

const router = Router();

router
  .get('/:id', (req, res) => {
    const id = zodiac.find((sign) => sign.id === req.params.id);
    res.json(id);
  })
  .get('/', (req, res) => {
    const sign = zodiac.map((sign) => ({ id: sign.id, name: sign.name }));
    res.json(sign);
  });

module.exports = router;
