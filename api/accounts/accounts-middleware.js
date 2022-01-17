const Account = require('./accounts-model')



exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const [dbId] = await Account.getById( req.params.id )
  if( !dbId ){
    // console.log(dbId)
    next({ status: 404, message: 'id not found' })
  } else {
    req.response = dbId;
    // dont think this is actually going to work for the later items
    next()
  }
};
