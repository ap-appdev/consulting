const db = require('../../../db')

module.exports.create = async (user) => {
  const res = await db.query('INSERT INTO users(fio, age, birthday, organization) VALUES ($1, $2, $3, $4) RETURNING *;', [user.fio, user.age, user.birthday, +user.organization || null])
  return res.rows.length ? res.rows[0] : null
}

module.exports.update = async (id, user) => {
  const res = await db.query('UPDATE users SET fio=$1, age=$2, birthday=$3, organization=$4 WHERE id=$5 RETURNING *;', [user.fio, user.age, user.birthday, +user.organization || null, id])
  return res.rows.length ? res.rows[0] : null
}

module.exports.delete = async (id) => {
  const res = await db.query('DELETE FROM users WHERE id=$1 RETURNING *;', [id])
  return res.rows.length ? res.rows[0] : null
}

module.exports.get = async () => {
  const res = await db.query('SELECT *, (SELECT row_to_json(o.*) FROM organizations as o WHERE u.organization = o.id) as organization FROM users as u')
  return res.rows || []
}

module.exports.getById = async (id) => {
  const res = await db.query('SELECT *, (SELECT row_to_json(o.*) FROM organizations as o WHERE u.organization = o.id) as organization FROM users as u WHERE u.id=$1', [id])
  return res.rows.length ? res.rows[0] : null
}

module.exports.getByOrganizationId = async (id) => {
  const res = await db.query('SELECT * FROM users as u WHERE u.organization=$1', [id])
  return res.rows || []
}
