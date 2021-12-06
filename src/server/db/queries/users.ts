import { Query } from '..';

const all = () => Query('SELECT * FROM users');
const one = (id: number) => Query('SELECT users.name, users.username, users.email, users._created FROM users = WHERE users.id = ?', [id]);


export default{
    all,
    one
}