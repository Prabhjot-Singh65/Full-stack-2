const STATIC_CACHE = "static-cache-v1";
const API_CACHE = "api-cache-v1";

self.addEventListener("fetch", (event) => {

  const url = new URL(event.request.url);

  // API runtime caching
  if (url.hostname.includes("jsonplaceholder.typicode.com")) {

    event.respondWith(
      caches.open(API_CACHE).then(cache => {
        return fetch(event.request)
          .then(response => {

            cache.put(event.request, response.clone());

            return response;

          })
          .catch(() => {
            return caches.match(event.request);
          });
      })
    );

    return;
  }

  // Static caching
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );

});