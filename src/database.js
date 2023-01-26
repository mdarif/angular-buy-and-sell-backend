import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hapi-server',
  password: 'root@123',
  database: 'buy-and-sell',
});

export const db = {
  connect: () => connection.connect(),
  query: (queryString, escapedValue) =>
    new Promise((resolve, reject) => {
      connection.query(queryString.escapedValue, (error, results, fields) => {
        if (error) {
          reject(error);
          resolve({ results, fields });
        }
      });
    }),
  end: () => connection.end(),
};
