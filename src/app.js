const express = require('express');
const countryRoutes = require('./routes/countryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', countryRoutes); // Asegúrate de que las rutas estén montadas

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}); 