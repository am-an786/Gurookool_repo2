const express = require('express');
const { distributeUsers } = require('./distribution');

const app = express();
app.use(express.json());

app.post('/distribute', (req, res) => {
    const users = req.body.users.map(u => ({ id: u.id, name: u.name }));
    const queue = distributeUsers(users);
    res.json(queue);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
