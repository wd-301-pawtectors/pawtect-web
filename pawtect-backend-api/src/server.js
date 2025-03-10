const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

/* `const PORT = process.env.PORT || 5000;` is setting the value of the `PORT` constant. It is checking
if there is a value for `process.env.PORT` in the environment variables. If there is a value for
`process.env.PORT`, it will use that value as the port number. If `process.env.PORT` is not defined
or is falsy, it will default to using port 5000. This allows flexibility in specifying the port
number for the server either through environment variables or a default value. */
const PORT = process.env.PORT || 5000;

/* The code `app.listen(PORT, () => { ... });` is setting up a server to listen for incoming requests
on a specific port. When a request is received on that port, the server will execute the callback
function provided. */
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}`);
});