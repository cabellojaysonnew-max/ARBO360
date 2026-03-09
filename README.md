
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ARBO 365 - Camarines Sur 1</title>

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>

</head>

<body class="bg-gray-50">

<header class="bg-green-700 text-white p-6">
<h1 class="text-3xl font-bold">ARBO 365</h1>
<p>Virtual Exploration of Agrarian Communities</p>
</header>

<section class="p-10 grid md:grid-cols-2 gap-8">

<div>
<h2 class="text-4xl font-bold mb-4">Explore ARBO Communities in 360°</h2>
<p class="mb-4">Discover ARBO farms across Camarines Sur 1 using immersive virtual tours.</p>

<a href="explore.html" class="bg-green-600 text-white px-6 py-3 rounded mr-3">
Explore ARBOs
</a>

<a href="map.html" class="bg-yellow-500 text-white px-6 py-3 rounded">
ARBO Map
</a>
</div>

<img src="assets/images/sample.jpg" class="rounded shadow">

</section>

<section class="p-10">

<h2 class="text-2xl font-bold mb-6">Featured ARBO Tours</h2>

<div id="arboGrid" class="grid md:grid-cols-3 gap-6"></div>

</section>

<script src="js/database.js"></script>
<script src="js/app.js"></script>

</body>
</html>
