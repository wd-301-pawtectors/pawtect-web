const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}`);
});