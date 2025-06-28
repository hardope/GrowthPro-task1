const express = require('express');


const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
const port = 3000;

const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com' },
    { id: 2, name: 'Opeoluwa Adeyeri', email: 'opeoluwa@growthproafrica.com' }
]
app.get('/', (req, res) => {
    res.send("Test Web Interface")
})

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    const newuser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(newuser);
    res.send("Recieved post request");
});

app.get('/user/:id', (req, res) => {

    const user = users.find(u => u.id === parseInt(req.params.id));
    res.json(user || { error: 'User not found' });
})

app.patch('/user/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    console.log(user);

    res.json(user);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});