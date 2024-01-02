const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/message', (req, res) => {
//     res.json({ message: 'Hello World!\n' })
// });

app.use(express.json());
app.use('/api', emailRoutes);

app.listen(8000, () => {
    console.log(`Server running at 8000`)
})