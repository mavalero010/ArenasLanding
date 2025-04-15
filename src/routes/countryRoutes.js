const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Endpoint para obtener la lista de SupportedCountry
router.get('/supported-countries', async (req, res) => {
    try {
        const countries = await prisma.supportedCountry.findMany();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los países soportados' });
    }
});

module.exports = router; 