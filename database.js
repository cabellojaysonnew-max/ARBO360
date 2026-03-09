
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ARBO Admin CMS</title>

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

</head>

<body class="bg-gray-100">

<header class="bg-gray-800 text-white p-5">
<h1 class="text-2xl font-bold">ARBO 365 Admin</h1>
</header>

<div class="p-10 grid md:grid-cols-2 gap-8">

<div class="bg-white p-6 rounded shadow">

<h2 class="font-bold mb-3">Add / Edit ARBO</h2>

<input id="name" placeholder="ARBO Name" class="border p-2 w-full mb-2">
<input id="location" placeholder="Location" class="border p-2 w-full mb-2">
<input id="experience" placeholder="Experience" class="border p-2 w-full mb-2">
<input id="image" placeholder="Image URL" class="border p-2 w-full mb-2">
<input id="lat" placeholder="Latitude" class="border p-2 w-full mb-2">
<input id="lng" placeholder="Longitude" class="border p-2 w-full mb-2">

<button onclick="saveArbo()" class="bg-green-600 text-white px-4 py-2 rounded">
Save ARBO
</button>

</div>

<div class="bg-white p-6 rounded shadow">

<h2 class="font-bold mb-3">Upload Panorama</h2>

<input type="file" id="panoUpload" class="border p-2 w-full">

<button onclick="uploadPano()" class="bg-blue-600 text-white px-4 py-2 mt-3 rounded">
Upload Panorama
</button>

</div>

<div class="bg-white p-6 rounded shadow md:col-span-2">

<h2 class="font-bold mb-3">Article / Story Editor</h2>

<input id="title" placeholder="Article Title" class="border p-2 w-full mb-2">

<textarea id="content" placeholder="Article content" class="border p-2 w-full"></textarea>

<button onclick="saveArticle()" class="bg-purple-600 text-white px-4 py-2 mt-3 rounded">
Publish
</button>

</div>

</div>

<script src="../js/admin.js"></script>

</body>
</html>
