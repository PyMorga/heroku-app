const app = require('express')();
const PORT = process.env.PORT || 3000;
app.get("", (req, res) => {
    res.send('Test');
});
app.listen(PORT, () => {
    console.log('App upt port ${PORT}');
});