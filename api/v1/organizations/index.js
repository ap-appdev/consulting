const db = require('../../../db')

module.exports.create = async (organization) => {
  const res = await db.query('INSERT INTO organizations(name) VALUES ($1) RETURNING *;', [organization.name])
  return res.rows.length ? res.rows[0] : null
}

module.exports.update = async (id, organization) => {
  const res = await db.query('UPDATE organizations SET name=$1 WHERE id=$2 RETURNING *;', [organization.name, id])
  return res.rows.length ? res.rows[0] : null
}

module.exports.delete = async (id) => {
  const res = await db.query('DELETE FROM organizations WHERE id=$1 RETURNING *;', [id])
  return res.rows.length ? res.rows[0] : null
}

module.exports.get = async () => {
  const res = await db.query('SELECT * FROM organizations')
  return res.rows || []
}

module.exports.getById = async (id) => {
  const res = await db.query('SELECT * FROM organizations WHERE id=$1', [id])
  return res.rows.length ? res.rows[0] : null
}

module.exports.getByUserId = async (id) => {
  const res = await db.query('SELECT o.* FROM organizations as o INNER JOIN users as u on u.organization=o.id WHERE u.id=$1', [id])
  return res.rows.length ? res.rows[0] : null
}
