/* ================================================================
   ISOS Enterprise AI Platform
   ----------------------------------------------------------------
   Worker        : worker-v25.3.4.js
   Version       : 25.3.4
   Build         : 004.0
   Status        : Development
   Module         : Enterprise Production Worker

   Organization  : Islamabad Online Services®
   Repository    : isos-app
   Branch        : v25-development

   Runtime       : Cloudflare Workers
   Language      : JavaScript (ES Modules)

   License       : Internal Use Only
   Maintainer    : Project Owner

   Description   :
   Enterprise production worker for the ISOS AI Platform.
   This file will be developed module-by-module following the
   official project standards defined in the AI documentation.

================================================================ */
/* ==========================================================
   Module 02
   Application Configuration
========================================================== */

const APP = Object.freeze({

  name: "ISOS Enterprise AI Platform",

  worker: "worker-v25.3.4.js",

  version: "25.3.4",

  build: "004.0",

  status: "Development",

  module: "Enterprise Production Worker",

  organization: "Islamabad Online Services®",

  repository: "isos-app",

  branch: "v25-development",

  runtime: "Cloudflare Workers",

  language: "JavaScript (ES Modules)",

  ai: false

});


/* ==========================================================
   Module 03
   Global Constants
========================================================== */

const HTTP = Object.freeze({

  OK: 200,

  CREATED: 201,

  BAD_REQUEST: 400,

  UNAUTHORIZED: 401,

  FORBIDDEN: 403,

  NOT_FOUND: 404,

  METHOD_NOT_ALLOWED: 405,

  INTERNAL_SERVER_ERROR: 500

});

const HEADERS = Object.freeze({

  "Access-Control-Allow-Origin": "*",

  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",

  "Access-Control-Allow-Headers": "Content-Type",

  "Content-Type": "application/json; charset=UTF-8"

});

/* ==========================================================
   Module 04
   Response Helpers
========================================================== */

function jsonResponse(data, status = HTTP.OK) {

  return new Response(

    JSON.stringify(data),

    {

      status,

      headers: HEADERS

    }

  );

}

function successResponse(data = {}) {

  return jsonResponse({

    success: true,

    ...data

  });

}

function errorResponse(

  message,

  status = HTTP.BAD_REQUEST

) {

  return jsonResponse(

    {

      success: false,

      error: message

    },

    status

  );

}


/* ==========================================================
   Module 05
   Request Router
========================================================== */

export default {

  async fetch(request) {

    return handleRequest(request);

  }

};

async function handleRequest(request) {

  switch (request.method) {

    case "OPTIONS":

      return handleOptions();

case "GET":

    const url = new URL(request.url);

    if (url.pathname === "/health") {
        return healthResponse();
    }

    return handleGet();

    case "POST":

      return await handlePost(request);

    default:

      return errorResponse(

        "Method Not Allowed",

        HTTP.METHOD_NOT_ALLOWED

      );

  }

}

/* ===========================================================
   Module 06
   OPTIONS Handler
=========================================================== */

function handleOptions() {

    return new Response(null, {
        headers: HEADERS
    });

}

/* ===========================================================
   Module 07
   GET Handler
=========================================================== */

function handleGet() {

  return successResponse({


    app: APP,

    endpoints: {
        GET: true,
        POST: true,
        OPTIONS: true
    },

    server: {
        runtime: APP.runtime,
        version: APP.version,
        build: APP.build,
        status: APP.status
    },

    timestamp: new Date().toISOString()

});

}

/* ===========================================================
   Module 08
   POST Handler
=========================================================== */

async function handlePost(request) {

const body = await parseBody(request);

if (!body.success) {

    return errorResponse(
        body.error,
        HTTP.BAD_REQUEST
    );

}

const validation = validateRequest(body.data);

if (!validation.success) {

    return errorResponse(
        validation.error,
        HTTP.BAD_REQUEST
    );

}

return successResponse({

    title: validation.title,

    data: body.data,

    meta: {

        worker: APP.worker,

        version: APP.version,

        build: APP.build,

        module: APP.module,

        timestamp: new Date().toISOString()

    }

});

}

/* ===========================================================
   Module 09
   JSON Parser
=========================================================== */

async function parseBody(request) {

    try {

        return {

            success: true,

            data: await request.json()

        };

    } catch {

        return {

            success: false,

            error: "Invalid JSON body."

        };

    }

}

/* ===========================================================
   Module 10
   Request Validation
=========================================================== */

function validateRequest(data) {

    const title = (data.title || "").trim();

    if (!title) {

        return {

            success: false,

            error: "Title is required."

        };

    }

    return {

        success: true,

        title

    };

}

/* ===========================================================
   Module 14
   Health Endpoint
=========================================================== */

function healthResponse() {

    return successResponse({

        health: "OK",

        service: APP.name,

        worker: APP.worker,

        version: APP.version,

        build: APP.build,

        status: APP.status,

        runtime: APP.runtime,

        timestamp: new Date().toISOString()

    });

}