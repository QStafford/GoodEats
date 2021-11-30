import * as dotenv from "dotenv";

dotenv.config();

export default {

  /* Mysql user information needs to remain secure. 
  The info is stored in the .env file to keep it protected, 
  while this file exports the info in a format that's safely
   removed from the source.
   Make sure the user and schema info in Workbench matches the info
   in the .env file. */

  mysql: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_SCHEMA,
  },
};
