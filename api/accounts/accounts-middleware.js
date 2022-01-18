const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  if ( !name || !budget ){
    return next({ status: 400, message: 'name and budget are required'})
  } else if ( (name.trim()).length < 3 || (name.trim()).length > 100){
    return next({ status: 400, message: 'name of account must be between 3 and 100'})
  } else if ( typeof budget !== 'number' ){
    let budgetNum = parseInt(budget)
    if ( String(budgetNum) === 'NaN' ){
      return next({ status: 400, message: `budget of account must be a number`})
    } else {
      req.budget = budgetNum
      req.name = name.trim()
      next()
    }
    // return next({ status: 400, message: 'budget of account must be a number"'})
  } else {
    req.budget = budget
    req.name = name.trim()
    next()
  }

}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  // const { name } = req.body
  // const {id} = req.params
  const  [dbName] = await Account.getByName( req.name )
  try{
    if ( dbName ){
      // console.log(dbName)
      next({ status: 400, message: 'sorry this name is taken'})
    } else {
      next()
    }
  } catch(err){
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const [dbId] = await Account.getById( req.params.id )
  if( !dbId ){
    // console.log(dbId)
    next({ status: 404, message: 'account not found' })
  } else {
    req.response = dbId;
    // dont think this is actually going to work for the later items
    next()
  }
};
