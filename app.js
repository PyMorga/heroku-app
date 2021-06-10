const app = require('express')();
const PORT = process.env.PORT || 3000;
app.get("", (req, res) => {
    res.sendfile('index.html');
});
app.listen(PORT, () => {
    console.log('The app is up at port ${PORT}');
});
