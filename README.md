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

## Migrations

npx dotenv -e .env.development -- npx prisma db pull


##
Inserts DB Postgresql

INSERT INTO "Property" (city, neighborhood, type, price, featured, new, description, image_url, created_at, updated_at)
VALUES
  ('New York', 'Manhattan', 'apartment', 2500.00, true, false, 'A beautiful apartment in the heart of Manhattan.', 'https://example.com/image1.jpg', NOW(), NOW()),
  ('Los Angeles', 'Hollywood', 'house', 750000.00, false, true, 'A spacious house located in Hollywood.', 'https://example.com/image2.jpg', NOW(), NOW()),
  ('Chicago', 'Downtown', 'apartment', 1800.00, true, false, 'Modern apartment with great city views.', 'https://example.com/image3.jpg', NOW(), NOW()),
  ('Miami', 'South Beach', 'condo', 300000.00, true, true, 'Luxury condo near the beach.', 'https://example.com/image4.jpg', NOW(), NOW()),
  ('San Francisco', 'Mission District', 'house', 1200000.00, false, false, 'Charming house in the vibrant Mission District.', 'https://example.com/image5.jpg', NOW(), NOW()),
  ('Austin', 'Downtown', 'apartment', 2200.00, true, false, 'Stylish apartment in the heart of Austin.', 'https://example.com/image6.jpg', NOW(), NOW()),
  ('Seattle', 'Capitol Hill', 'condo', 400000.00, false, true, 'Cozy condo with a view of the Space Needle.', 'https://example.com/image7.jpg', NOW(), NOW()),
  ('Boston', 'Back Bay', 'apartment', 3000.00, true, false, 'Elegant apartment in a historic building.', 'https://example.com/image8.jpg', NOW(), NOW()),
  ('Denver', 'LoDo', 'loft', 2800.00, true, true, 'Spacious loft with modern amenities.', 'https://example.com/image9.jpg', NOW(), NOW()),
  ('Phoenix', 'Downtown', 'house', 350000.00, false, false, 'Beautiful house with a large backyard.', 'https://example.com/image10.jpg', NOW(), NOW()),
  ('Orlando', 'Lake Nona', 'townhouse', 450000.00, true, true, 'New townhouse in a family-friendly community.', 'https://example.com/image11.jpg', NOW(), NOW()),
  ('Atlanta', 'Midtown', 'apartment', 2000.00, true, false, 'Chic apartment close to parks and restaurants.', 'https://example.com/image12.jpg', NOW(), NOW()),
  ('Dallas', 'Uptown', 'condo', 500000.00, false, true, 'Luxury condo with rooftop access.', 'https://example.com/image13.jpg', NOW(), NOW()),
  ('San Diego', 'Gaslamp Quarter', 'apartment', 2700.00, true, false, 'Stylish apartment in the vibrant Gaslamp Quarter.', 'https://example.com/image14.jpg', NOW(), NOW()),
  ('Portland', 'Pearl District', 'loft', 3200.00, true, true, 'Modern loft with industrial charm.', 'https://example.com/image15.jpg', NOW(), NOW()),
  ('Las Vegas', 'The Strip', 'suite', 1500.00, false, false, 'Luxury suite with stunning views of the Strip.', 'https://example.com/image16.jpg', NOW(), NOW()),
  ('Philadelphia', 'Center City', 'apartment', 2400.00, true, false, 'Spacious apartment in the heart of Philadelphia.', 'https://example.com/image17.jpg', NOW(), NOW()),
  ('Houston', 'Downtown', 'house', 600000.00, false, true, 'Beautiful house with modern design.', 'https://example.com/image18.jpg', NOW(), NOW()),
  ('Charlotte', 'South End', 'townhouse', 350000.00, true, false, 'Charming townhouse in a trendy neighborhood.', 'https://example.com/image19.jpg', NOW(), NOW()),
  ('Nashville', 'Music Row', 'apartment', 2200.00, true, true, 'Stylish apartment near the music scene.', 'https://example.com/image20.jpg', NOW(), NOW()),
  ('Indianapolis', 'Downtown', 'condo', 300000.00, false, false, 'Modern condo with great amenities.', 'https://example.com/image21.jpg', NOW(), NOW()),
  ('Minneapolis', 'North Loop', 'loft', 2600.00, true, true, 'Spacious loft with a great view.', 'https://example.com/image22.jpg', NOW(), NOW()),
  ('Salt Lake City', 'Downtown', 'house', 400000.00, false, false, 'Beautiful house with mountain views.', 'https://example.com/image23.jpg', NOW(), NOW()),
  ('Kansas City', 'Crossroads', 'apartment', 1800.00, true, false, 'Modern apartment in a vibrant area.', 'https://example.com/image24.jpg', NOW(), NOW()),
  ('Cincinnati', 'Over-the-Rhine', 'condo', 350000.00, true, true, 'Charming condo in a historic district.', 'https://example.com/image25.jpg', NOW(), NOW()),
  ('Milwaukee', 'Downtown', 'house', 450000.00, false, false, 'Spacious house with a large yard.', 'https://example.com/image26.jpg', NOW(), NOW()),
  ('Tampa', 'Ybor City', 'townhouse', 300000.00, true, true, 'New townhouse in a historic area.', 'https://example.com/image27.jpg', NOW(), NOW()),
  ('Raleigh', 'Downtown', 'apartment', 2200.00, true, false, 'Stylish apartment close to parks.', 'https://example.com/image28.jpg', NOW(), NOW()),
  ('Virginia Beach', 'Oceanfront', 'condo', 500000.00, false, true, 'Luxury condo with ocean views.', 'https://example.com/image29.jpg', NOW(), NOW()),
  ('Jacksonville', 'Downtown', 'house', 350000.00, true, false, 'Beautiful house in a great location.', 'https://example.com/image30.jpg', NOW(), NOW()),
  ('Omaha', 'Old Market', 'loft', 2800.00, true, true, 'Spacious loft with modern amenities.', 'https://example.com/image31.jpg', NOW(), NOW()),
  ('Albuquerque', 'Nob Hill', 'apartment', 1500.00, false, false, 'Charming apartment in a historic area.', 'https://example.com/image32.jpg', NOW(), NOW()),
  ('Fresno', 'Downtown', 'condo', 300000.00, true, true, 'Modern condo with great amenities.', 'https://example.com/image33.jpg', NOW(), NOW()),
  ('Tucson', 'Downtown', 'house', 400000.00, false, false, 'Beautiful house with a large backyard.', 'https://example.com/image34.jpg', NOW(), NOW()),
  ('Bakersfield', 'Downtown', 'townhouse', 250000.00, true, true, 'New townhouse in a family-friendly community.', 'https://example.com/image35.jpg', NOW(), NOW()),
  ('Anchorage', 'Downtown', 'apartment', 1800.00, true, false, 'Stylish apartment with great views.', 'https://example.com/image36.jpg', NOW(), NOW()),
  ('Chattanooga', 'North Shore', 'condo', 350000.00, false, true, 'Charming condo in a vibrant area.', 'https://example.com/image37.jpg', NOW(), NOW()),
  ('Boise', 'Downtown', 'house', 450000.00, true, false, 'Beautiful house with modern design.', 'https://example.com/image38.jpg', NOW(), NOW()),
  ('Des Moines', 'Downtown', 'loft', 2600.00, true, true, 'Spacious loft with a great view.', 'https://example.com/image39.jpg', NOW(), NOW()),
  ('Little Rock', 'Downtown', 'apartment', 2000.00, false, false, 'Modern apartment in a vibrant area.', 'https://example.com/image40.jpg', NOW(), NOW());