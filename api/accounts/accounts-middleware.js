const Account = require('./accounts-model')



exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { name } = req.body
  // const {id} = req.params
  const  [dbName] = await Account.getByName( name )
  try{
    if ( dbName ){
      // console.log(dbName)
      next({ status: 404, message: 'sorry this is already in the db'})
    } else {
      // console.log(dbName)
      
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
