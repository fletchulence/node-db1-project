const db = require('./../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
    .select('*')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts')
    .select('*')
    .where('id', '=', id )
}

const create = account => {
  // DO YOUR MAGIC
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
}
