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
    .where({ id })
    .first()
}

const getByName = name =>{
  return db('accounts')
    .select('*')
    .where({ name })
    .first()
}

const create = account => {
  // DO YOUR MAGIC
  return db('accounts as a')
    .insert( account )
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return db('accounts')
    .where({ id })
    .first()
    .update( account )
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts')
    .where({id})
    .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
