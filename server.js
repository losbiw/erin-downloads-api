const express = require('express');
const { join } = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({ path: join(__dirname, './.env') })
}

app.use(express.json());
app.use(cors());

app.use('/public', express.static(join(__dirname, 'public')));
app.use('/api', require('./routes/api'));
app.use(express.static(join(__dirname, 'public/pages'),{ extensions:['html'] }));

app.get('*', (_req, res) => {
    res.redirect('/');
})

mongoose.connect(process.env.MONGODB);

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
})