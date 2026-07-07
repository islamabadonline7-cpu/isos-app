/**
 * ============================================================
 * ISOS Enterprise AI
 * Version : v25.3.0
 * Build   : 002.1
 * Module  : HTTP Foundation
 * ============================================================
 */

const CONFIG = {
  VERSION: "25.3.0",
  BUILD: "002.1",
  WORKER_NAME: "ISOS Enterprise AI",

  API_URL: "https://api.groq.com/openai/v1/chat/completions",
  MODEL: "llama-3.3-70b-versatile",

  REQUEST_TIMEOUT: 30000,
  MAX_TOKENS: 3000,
  TEMPERATURE: 0.7
};

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

export default {

  async fetch(request, env) {

    /* ---------------------------------
       OPTIONS
    ---------------------------------- */

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: HEADERS
      });
    }

    /* ---------------------------------
       GET
    ---------------------------------- */

    if (request.method === "GET") {

      return new Response(

        JSON.stringify({

          success: true,

          status: "HTTP Foundation Ready",

          worker: CONFIG.WORKER_NAME,

          version: CONFIG.VERSION,

          build: CONFIG.BUILD,

          module: "HTTP Foundation"

        }),

        {
          headers: HEADERS
        }

      );

    }

    /* ---------------------------------
       POST
    ---------------------------------- */

    if (request.method === "POST") {

      return new Response(

        JSON.stringify({

          success: true,

          message: "POST endpoint is ready.",

          version: CONFIG.VERSION,

          build: CONFIG.BUILD

        }),

        {
          headers: HEADERS
        }

      );

    }

    /* ---------------------------------
       METHOD NOT ALLOWED
    ---------------------------------- */

    return new Response(

      JSON.stringify({

        success: false,

        error: "Method Not Allowed",

        allowed_methods: [

          "GET",

          "POST",

          "OPTIONS"

        ]

      }),

      {

        status: 405,

        headers: HEADERS

      }

    );

  }

};