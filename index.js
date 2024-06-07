const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => {
	res.set('Cache-Control', 'max-age=300, must-revalidate')
	res.json({
		health: 'OK'
	});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running")
});
