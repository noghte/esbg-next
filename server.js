const express = require('express');
const path = require('path');
const app = express();

// Path to the static files
const staticPath = path.join(__dirname, 'out');

app.use(express.static(staticPath));

const PORT = process.env.PORT || 1338;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
