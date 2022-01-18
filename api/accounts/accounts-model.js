const db = require('./../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
    .select('*')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts')
    .select('accounts.name', 'accounts.budget')
    .where('id', id )
    // .where({ id })
    // .first()
}

const getByName = name =>{
  return db('accounts')
    .select('*')
    .where({ name })
    // .first()
}

const create = account => {
  // DO YOUR MAGIC
  return db('accounts as a')
    // .select('a.name', 'a.budget')
    .insert( account
      // { 
      // name: account.name,
      // budget: account.budget 
    // }
    )
    // .select('*').from('accounts') // unless i want to limit the items that come back
    // .where({ id: account.id })
    // .first()
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
