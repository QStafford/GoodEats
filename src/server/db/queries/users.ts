import { Query } from '..';

const all = () => Query('SELECT * FROM users');
const one = (id: number) => Query('SELECT name, username, email, _created FROM users WHERE id = ?', [id]);


export default{
    all,
    one
}