<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


STEPS: 

1) npm install 
## Migrations

npx dotenv -e .env.development -- npx prisma db pull



2) Si desea insertar datos de forma manual estos son los de prueba
##
Inserts DB Postgresql
INSERT INTO "Property" (id, city, neighborhood, type, price, featured, new, description, image_url, created_at, updated_at) VALUES
(1, 'New York', 'Manhattan', 'Apartamento', 2500.00, true, false, 'A beautiful apartment in the heart of Manhattan.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(2, 'Los Angeles', 'Hollywood', 'Casa', 750000.00, false, true, 'A spacious house located in Hollywood.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(3, 'Chicago', 'Downtown', 'Apartamento', 1800.00, true, false, 'Modern apartment with great city views.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(4, 'Miami', 'South Beach', 'Condominio', 300000.00, true, true, 'Luxury condo near the beach.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(5, 'San Francisco', 'Mission District', 'Casa', 1200000.00, false, false, 'Charming house in the vibrant Mission District.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(6, 'Austin', 'Downtown', 'Apartamento', 2200.00, true, false, 'Stylish apartment in the heart of Austin.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(7, 'Seattle', 'Capitol Hill', 'Condominio', 400000.00, false, true, 'Cozy condo with a view of the Space Needle.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(8, 'Boston', 'Back Bay', 'Apartamento', 3000.00, true, false, 'Elegant apartment in a historic building.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(9, 'Denver', 'LoDo', 'Loft', 2800.00, true, true, 'Spacious loft with modern amenities.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(10, 'Phoenix', 'Downtown', 'Casa', 350000.00, false, false, 'Beautiful house with a large backyard.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(11, 'Orlando', 'Lake Nona', 'townhouse', 450000.00, true, true, 'New townhouse in a family-friendly community.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(12, 'Atlanta', 'Midtown', 'Apartamento', 2000.00, true, false, 'Chic apartment close to parks and restaurants.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(13, 'Dallas', 'Uptown', 'Condominio', 500000.00, false, true, 'Luxury condo with rooftop access.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(14, 'San Diego', 'Gaslamp Quarter', 'Apartamento', 2700.00, true, false, 'Stylish apartment in the vibrant Gaslamp Quarter.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(15, 'Portland', 'Pearl District', 'Loft', 3200.00, true, true, 'Modern loft with industrial charm.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(16, 'Las Vegas', 'The Strip', 'suite', 1500.00, false, false, 'Luxury suite with stunning views of the Strip.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(17, 'Philadelphia', 'Center City', 'Apartamento', 2400.00, true, false, 'Spacious apartment in the heart of Philadelphia.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(18, 'Houston', 'Downtown', 'Casa', 600000.00, false, true, 'Beautiful house with modern design.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(19, 'Charlotte', 'South End', 'townhouse', 350000.00, true, false, 'Charming townhouse in a trendy neighborhood.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(20, 'Nashville', 'Music Row', 'Apartamento', 2200.00, true, true, 'Stylish apartment near the music scene.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(21, 'Indianapolis', 'Downtown', 'Condominio', 300000.00, false, false, 'Modern condo with great amenities.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(22, 'Minneapolis', 'North Loop', 'Loft', 2600.00, true, true, 'Spacious loft with a great view.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(23, 'Salt Lake City', 'Downtown', 'Casa', 400000.00, false, false, 'Beautiful house with mountain views.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(24, 'Kansas City', 'Crossroads', 'Apartamento', 1800.00, true, false, 'Modern apartment in a vibrant area.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(25, 'Cincinnati', 'Over-the-Rhine', 'Condominio', 350000.00, true, true, 'Charming condo in a historic district.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(26, 'Milwaukee', 'Downtown', 'Casa', 450000.00, false, false, 'Spacious house with a large yard.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(27, 'Tampa', 'Ybor City', 'townhouse', 300000.00, true, true, 'New townhouse in a historic area.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(28, 'Raleigh', 'Downtown', 'Apartamento', 2200.00, true, false, 'Stylish apartment close to parks.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(29, 'Virginia Beach', 'Oceanfront', 'Condominio', 500000.00, false, true, 'Luxury condo with ocean views.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(30, 'Jacksonville', 'Downtown', 'Casa', 350000.00, true, false, 'Beautiful house in a great location.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(31, 'Omaha', 'Old Market', 'Loft', 2800.00, true, true, 'Spacious loft with modern amenities.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(32, 'Albuquerque', 'Nob Hill', 'Apartamento', 1500.00, false, false, 'Charming apartment in a historic area.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(33, 'Fresno', 'Downtown', 'Condominio', 300000.00, true, true, 'Modern condo with great amenities.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(34, 'Tucson', 'Downtown', 'Casa', 400000.00, false, false, 'Beautiful house with a large backyard.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(35, 'Bakersfield', 'Downtown', 'townhouse', 250000.00, true, true, 'New townhouse in a family-friendly community.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(36, 'Anchorage', 'Downtown', 'Apartamento', 1800.00, true, false, 'Stylish apartment with great views.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(37, 'Chattanooga', 'North Shore', 'Condominio', 350000.00, false, true, 'Charming condo in a vibrant area.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_5_118151148_5_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(38, 'Boise', 'Downtown', 'Casa', 450000.00, true, false, 'Beautiful house with modern design.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(39, 'Des Moines', 'Downtown', 'Loft', 2600.00, true, true, 'Spacious loft with a great view.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/86960_7_101569164_6_11zon-scaled.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(40, 'Little Rock', 'Downtown', 'Apartamento', 2000.00, false, false, 'Modern apartment in a vibrant area.', 'https://arenasinmobiliaria.co/wp-content/uploads/2024/01/83493_8_45841388_3_11zon.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724');


3) 

Para correr en modo desarrollo (debe desplegar la BD en postgresql)
npm run start:dev 

Para correr en modo produccion

npm run start:prod