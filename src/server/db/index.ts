import * as mysql from 'mysql';
import config from '../config';

/* Creating a pool allows the server to form multiple connections
to the database. Importing and using the mysql user data from the 
config folder allows the server to access user database privileges
and queries. */

const pool = mysql.createPool(config.mysql);

//Leaving Query with type any is bad practice, work out proper typing later.

export const Query = <T = any>(query: string, values?: {} | Array<number | string>) => {

    /* This general Query utility funtion calls for a query with type string,
    and an optional values parameter that can accept either an object or an array.
    The array itself can accept items as either numbers or strings. If Typescript
    is causing too many problems, the array can be changed to type any, but this
    is bad practice and should be avoided if possible. */

    return new Promise<T>((resolve, reject) => {

        /*This basic promise handles asynchronously querying the database.
        It resolves when successful and rejects when there is an error. */

        pool.query(query, values, (err, results) => {
            if (err) {
                reject (err);
            } else {
                resolve (results);
            }
        });
    });
};

import card_data from './queries/card_data';
import restaurants from './queries/restaurants';
import cardtags from './queries/cardtags';

export default {
    card_data,
    restaurants,
    cardtags 
}