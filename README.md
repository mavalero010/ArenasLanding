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
(1, 'New York', 'Manhattan', 'apartment', 2500.00, true, false, 'A beautiful apartment in the heart of Manhattan.', 'https://example.com/image1.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(2, 'Los Angeles', 'Hollywood', 'house', 750000.00, false, true, 'A spacious house located in Hollywood.', 'https://example.com/image2.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(3, 'Chicago', 'Downtown', 'apartment', 1800.00, true, false, 'Modern apartment with great city views.', 'https://example.com/image3.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(4, 'Miami', 'South Beach', 'condo', 300000.00, true, true, 'Luxury condo near the beach.', 'https://example.com/image4.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(5, 'San Francisco', 'Mission District', 'house', 1200000.00, false, false, 'Charming house in the vibrant Mission District.', 'https://example.com/image5.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(6, 'Austin', 'Downtown', 'apartment', 2200.00, true, false, 'Stylish apartment in the heart of Austin.', 'https://example.com/image6.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(7, 'Seattle', 'Capitol Hill', 'condo', 400000.00, false, true, 'Cozy condo with a view of the Space Needle.', 'https://example.com/image7.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(8, 'Boston', 'Back Bay', 'apartment', 3000.00, true, false, 'Elegant apartment in a historic building.', 'https://example.com/image8.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(9, 'Denver', 'LoDo', 'loft', 2800.00, true, true, 'Spacious loft with modern amenities.', 'https://example.com/image9.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(10, 'Phoenix', 'Downtown', 'house', 350000.00, false, false, 'Beautiful house with a large backyard.', 'https://example.com/image10.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(11, 'Orlando', 'Lake Nona', 'townhouse', 450000.00, true, true, 'New townhouse in a family-friendly community.', 'https://example.com/image11.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(12, 'Atlanta', 'Midtown', 'apartment', 2000.00, true, false, 'Chic apartment close to parks and restaurants.', 'https://example.com/image12.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(13, 'Dallas', 'Uptown', 'condo', 500000.00, false, true, 'Luxury condo with rooftop access.', 'https://example.com/image13.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(14, 'San Diego', 'Gaslamp Quarter', 'apartment', 2700.00, true, false, 'Stylish apartment in the vibrant Gaslamp Quarter.', 'https://example.com/image14.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(15, 'Portland', 'Pearl District', 'loft', 3200.00, true, true, 'Modern loft with industrial charm.', 'https://example.com/image15.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(16, 'Las Vegas', 'The Strip', 'suite', 1500.00, false, false, 'Luxury suite with stunning views of the Strip.', 'https://example.com/image16.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(17, 'Philadelphia', 'Center City', 'apartment', 2400.00, true, false, 'Spacious apartment in the heart of Philadelphia.', 'https://example.com/image17.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(18, 'Houston', 'Downtown', 'house', 600000.00, false, true, 'Beautiful house with modern design.', 'https://example.com/image18.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(19, 'Charlotte', 'South End', 'townhouse', 350000.00, true, false, 'Charming townhouse in a trendy neighborhood.', 'https://example.com/image19.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(20, 'Nashville', 'Music Row', 'apartment', 2200.00, true, true, 'Stylish apartment near the music scene.', 'https://example.com/image20.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(21, 'Indianapolis', 'Downtown', 'condo', 300000.00, false, false, 'Modern condo with great amenities.', 'https://example.com/image21.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(22, 'Minneapolis', 'North Loop', 'loft', 2600.00, true, true, 'Spacious loft with a great view.', 'https://example.com/image22.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(23, 'Salt Lake City', 'Downtown', 'house', 400000.00, false, false, 'Beautiful house with mountain views.', 'https://example.com/image23.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(24, 'Kansas City', 'Crossroads', 'apartment', 1800.00, true, false, 'Modern apartment in a vibrant area.', 'https://example.com/image24.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(25, 'Cincinnati', 'Over-the-Rhine', 'condo', 350000.00, true, true, 'Charming condo in a historic district.', 'https://example.com/image25.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(26, 'Milwaukee', 'Downtown', 'house', 450000.00, false, false, 'Spacious house with a large yard.', 'https://example.com/image26.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(27, 'Tampa', 'Ybor City', 'townhouse', 300000.00, true, true, 'New townhouse in a historic area.', 'https://example.com/image27.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(28, 'Raleigh', 'Downtown', 'apartment', 2200.00, true, false, 'Stylish apartment close to parks.', 'https://example.com/image28.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(29, 'Virginia Beach', 'Oceanfront', 'condo', 500000.00, false, true, 'Luxury condo with ocean views.', 'https://example.com/image29.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(30, 'Jacksonville', 'Downtown', 'house', 350000.00, true, false, 'Beautiful house in a great location.', 'https://example.com/image30.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(31, 'Omaha', 'Old Market', 'loft', 2800.00, true, true, 'Spacious loft with modern amenities.', 'https://example.com/image31.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(32, 'Albuquerque', 'Nob Hill', 'apartment', 1500.00, false, false, 'Charming apartment in a historic area.', 'https://example.com/image32.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(33, 'Fresno', 'Downtown', 'condo', 300000.00, true, true, 'Modern condo with great amenities.', 'https://example.com/image33.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(34, 'Tucson', 'Downtown', 'house', 400000.00, false, false, 'Beautiful house with a large backyard.', 'https://example.com/image34.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(35, 'Bakersfield', 'Downtown', 'townhouse', 250000.00, true, true, 'New townhouse in a family-friendly community.', 'https://example.com/image35.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(36, 'Anchorage', 'Downtown', 'apartment', 1800.00, true, false, 'Stylish apartment with great views.', 'https://example.com/image36.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(37, 'Chattanooga', 'North Shore', 'condo', 350000.00, false, true, 'Charming condo in a vibrant area.', 'https://example.com/image37.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(38, 'Boise', 'Downtown', 'house', 450000.00, true, false, 'Beautiful house with modern design.', 'https://example.com/image38.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(39, 'Des Moines', 'Downtown', 'loft', 2600.00, true, true, 'Spacious loft with a great view.', 'https://example.com/image39.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724'),
(40, 'Little Rock', 'Downtown', 'apartment', 2000.00, false, false, 'Modern apartment in a vibrant area.', 'https://example.com/image40.jpg', '2025-04-15 20:37:55.675724', '2025-04-15 20:37:55.675724');


3) 

Para correr en modo desarrollo (debe desplegar la BD en postgresql)
npm run start:dev 

Para correr en modo produccion

npm run start:prod