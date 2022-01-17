const router = require('express').Router();

const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // SELECT * FROM Accounts;
  // DO YOUR MAGIC
  try{
    res.json( await Account.getAll())
  } catch(err){
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json( await Account.getById(req.params.id) );
  } catch(err){
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
