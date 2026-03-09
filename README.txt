
DAR ARBO VIRTUAL TOURISM PLATFORM

Features
- ARBO tourism map
- Multi-scene 360 farm tours
- Walking navigation between scenes
- Click on 360 image to get hotspot coordinates
- Marketplace for ARBO products
- Admin dashboard for hotspots and orders
- Installable mobile app (PWA)

Required Google Sheets

ARBOS
id | name | location | panorama | lat | lng

SCENES
id | arbo_id | name | panorama

PRODUCTS
id | scene | name | price | pitch | yaw | image

ORDERS
date | product | customer | phone | quantity

Folders needed

/tours
/images

360 images must be equirectangular.
