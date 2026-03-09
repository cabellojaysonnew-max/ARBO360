
self.addEventListener("install",e=>{
e.waitUntil(
caches.open("arbo").then(c=>c.addAll(["index.html","style.css"]))
)
})

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
)
})
