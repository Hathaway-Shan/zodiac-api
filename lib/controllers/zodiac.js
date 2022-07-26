const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

const router = Router();

router.get('/', (req, res) => {
  const sign = zodiac.map((sign) => ({ id: sign.id, name: sign.name }));
  res.json(sign);
});

module.exports = router;
