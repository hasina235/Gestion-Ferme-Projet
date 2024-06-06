const express = require('express');
const app = express();
const port = 3001
const cors = require('cors');

app.use(express.json());
app.use(cors());

//login and register route
const UsersR = require('./Routes/UsersRoute');
app.use('/auth', UsersR);

//route pour les animaux
const AnimalR = require('./Routes/AnimalRoute');
app.use('/animals', AnimalR);

const FermeR = require('./Routes/FermeRoute');
app.use('/fermes', FermeR);

const MammifereR = require('./Routes/MammifereRoute');
app.use('/mammifere', MammifereR);

const OiseauR = require('./Routes/OiseauRoute');
app.use('/oiseaux', OiseauR);

const ProduitR = require('./Routes/ProduitRoute');
app.use('/produits', ProduitR);

const StocksR = require('./Routes/StockRoute');
app.use('/stocks', StocksR);

const db = require('./models');

db.sequelize.sync().then(() =>{
    app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`ihm app listening on port ${port}!`))
});