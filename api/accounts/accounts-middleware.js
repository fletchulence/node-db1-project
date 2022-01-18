const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name } = req.body
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  try{
    let budget = parseFloat(req.body.budget)
    if ( !name || req.body.budget === undefined ){
        return next({ status: 400, message: 'name and budget are required'})
    } else if ( (name.trim()).length < 3 || (name.trim()).length > 100){
        return next({ status: 400, message: 'name of account must be between 3 and 100'})
    } else if ( budget < 0 || budget > 1000000){
        return next({ status: 400, message: 'budget of account is too large or too small'})
    } else if ( typeof budget !== 'number' || String(budget) === 'NaN' ){
        return next({ status: 400, message: `budget of account must be a number`})
    } else {
        req.budget = budget
        req.name = name.trim()
        next()
    }
  } catch(err){
    next(err)
  }

}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  // const { name } = req.body
  // const {id} = req.params
  const dbName = await Account.getByName( req.name )
  try{
    if ( dbName ){
      // console.log(dbName)
      next({ status: 400, message: 'sorry this name is taken'})
    } else {
      // console.log(dbName)
      // req.dbName = dbName
      next()
    }
  } catch(err){
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const dbId = await Account.getById( req.params.id )
  if( !dbId ){
    next({ status: 404, message: 'account not found' })
  } else {
    req.response = dbId;
    next()
  }
};
