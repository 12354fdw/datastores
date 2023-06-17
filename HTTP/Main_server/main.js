import express from 'express';
import bodyParaser from 'body-parser';

import usersRoutes from './routes/user.js';
import stats from './routes/stats.js'
const app = express();
const PORT = 5000;

app.use(bodyParaser.json());

app.use('/users', usersRoutes)
app.use('/stats', stats)
app.get('/', (req, res) => res.send("Hello from homepage."));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
console.log(`To expose the server do './ngrok http ${PORT}' in the terminal`)
console.log("Press 'CRL + C' to stop server (delete all datas)")
