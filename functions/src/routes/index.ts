const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('Queo functions').end();
});

router.use('/mail', require('./mail/send-mail'));

module.exports = router;