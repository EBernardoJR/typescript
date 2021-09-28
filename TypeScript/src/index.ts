import express from 'express';
import routes from './routes';


const app = express();
app.use(routes)

//só vai retornar string
function returnName():string {
    return 'Emanoel'
}

const name = returnName();

app.get('/', (req, res) => {
    return res.send('Iae');
})

app.listen(3444, ()=> {
    console.log('Server is running')
});