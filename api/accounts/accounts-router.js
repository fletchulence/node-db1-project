const router = require('express').Router();

const Account = require('./accounts-model');

const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload
} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // SELECT * FROM Accounts;
  // DO YOUR MAGIC
  try{
    res.json( await Account.getAll())
  } catch(err){
    next(err)
  }
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json( req.response ); // gives me the ability to get the data quicker!
  } catch(err){
    next(err)
  }
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  // const {name, budget} = req.body
  const [newAcctId] = await Account.create({ name: req.name, budget: req.budget })
  try{
    const [newAcct] = await Account.getById(newAcctId) 
    res.status(201).json( newAcct )
  } catch(err){
    next(err)
  }
})

router.put('/:id', checkAccountPayload, checkAccountId, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  const {id} = req.params
  // const {name, budget} = req.body;
  const updates = {name: req.name, budget: req.budget}
  try{
    await Account.updateById(id, updates)
    res.status(200).json( updates )
  } catch(err){
    next(err)
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json( await Account.deleteById(req.params.id))
  } catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = router;
