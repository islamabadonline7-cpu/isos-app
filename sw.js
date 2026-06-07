/* ==========================================================
   ISOS SUPER APP SERVICE WORKER v20.0
   Islamabad Online Services
   Offline + PWA + Performance Engine
   ========================================================== */

const CACHE_NAME = "isos-superapp-v20";

const STATIC_ASSETS = [

    "./",

    "index.html",

    "generator.html",

    "template.html",

    "style.css",

    "isos-brain.js",

    "isos-menu.js",

    "manifest.json",

    "logo.png"

];

/* ==========================================================
   INSTALL
   ========================================================== */

self.addEventListener(
    "install",
    event => {

        console.log(
            "ISOS SW Installing..."
        );

        self.skipWaiting();

        event.waitUntil(

            caches.open(
                CACHE_NAME
            ).then(cache => {

                return cache.addAll(
                    STATIC_ASSETS
                );

            })

        );

    }
);

/* ==========================================================
   ACTIVATE
   ========================================================== */

self.addEventListener(
    "activate",
    event => {

        console.log(
            "ISOS SW Activated"
        );

        event.waitUntil(

            caches.keys().then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if(
                            key !== CACHE_NAME
                        ){

                            return caches.delete(
                                key
                            );

                        }

                    })

                );

            })

        );

        return self.clients.claim();

    }
);

/* ==========================================================
   FETCH STRATEGY
   Cache First + Network Fallback
   ========================================================== */

self.addEventListener(
    "fetch",
    event => {

        if(
            event.request.method !== "GET"
        ){
            return;
        }

        event.respondWith(

            caches.match(
                event.request
            ).then(cached => {

                if(cached){

                    return cached;

                }

                return fetch(
                    event.request
                )
                .then(response => {

                    const clone =
                        response.clone();

                    caches.open(
                        CACHE_NAME
                    ).then(cache => {

                        cache.put(
                            event.request,
                            clone
                        );

                    });

                    return response;

                })
                .catch(() => {

                    return caches.match(
                        "index.html"
                    );

                });

            })

        );

    }
);

/* ==========================================================
   BACKGROUND UPDATE
   ========================================================== */

self.addEventListener(
    "message",
    event => {

        if(
            event.data &&
            event.data.type ===
            "SKIP_WAITING"
        ){

            self.skipWaiting();

        }

    }
);

/* ==========================================================
   END OF FILE
   ISOS SUPER APP SERVICE WORKER v20
   ========================================================== */
