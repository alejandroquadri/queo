import * as express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
  response.set('Cache-Control','public, max-age=300, s-maxage=600');
  response.send(`${Date.now()}`); 
})

module.exports = router;

