import express from 'express';

const app = express();
//config ejs
app.set('view engine', 'ejs'); 
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index',{ 
        title: 'Welcome',
        message: 'Welcome to the homepage',
     });
    });

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});