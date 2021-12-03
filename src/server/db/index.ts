import * as mysql from 'mysql';
import config from '../config';


const pool = mysql.createPool(config.mysql);


export const Query = <T = any>(query: string, values?: any) => {

    const sql = mysql.format(query, values);
    //console.log(sql); DEBUGG

    return new Promise<T>((resolve, reject) => {
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

import restaurants from './queries/restaurants';
import users from './queries/users'
import locations from './queries/locations'

export default{
    restaurants,
    users,
    locations
}