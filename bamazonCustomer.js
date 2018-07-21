const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
  userName: '****',
  password: '*****',
  server: '*****.database.windows.net',
  options: {
    database: 'bamazon_db',
    encrypt: true
  }
};

const connection = new Connection(config);
connection.on('connect', err => {
  err ? console.log(err) : executeStatement();
});

const query = 'select * from dbo.products';
const executeStatement = () => {
  const request = new Request(query, (err, rowCount) => {
    err ? console.log(err) : console.log(rowCount);
  });

  request.on('row', columns => {
    columns.forEach(column => console.log(column.value));
  });

  connection.execSql(request);
  connection.close();
};