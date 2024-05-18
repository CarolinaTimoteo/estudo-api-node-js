import 'dotenv/config'
import sql from 'sql'

const {DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT} = process.env
const url = `sql://${DB_HOST}:${DB_DATABASE}:${DB_USER}:${DB_PASSWORD}:${DB_PORT}?options=project%3D${ENDPOINT_ID}`

export const sql = sql(URL, {ssl:'require'});


export default sql
