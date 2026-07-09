export default {
  async fetch(request) {
    return handleRequest(request);
  }
};

/* ============================================================
   ISOS Enterprise AI Worker
   Version : 25.3.3
   Build   : 003.0
   Module  : Enterprise Core Refactor
============================================================ */

const APP = {
  version: "25.3.3",
  build: "003.0",
  module: "Enterprise Core Refactor",
  ai: false
};

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

async function handleRequest(request) {

  switch (request.method) {

    case "OPTIONS":
      return handleOptions();

    case "GET":
      return handleGet();

    case "POST":
      return await handlePost(request);

    default:
      return jsonResponse(
        {
          success: false,
          error: "Method Not Allowed"
        },
        405
      );

  }

}

function handleOptions() {
  return new Response(null, {
    headers: HEADERS
  });
}

function handleGet() {

  return jsonResponse({
    success: true,
    version: APP.version,
    build: APP.build,
    module: APP.module,
    endpoints: {
      GET: true,
      POST: true,
      OPTIONS: true
    }
  });

}

async function handlePost(request) {

  const body = await parseBody(request);

  if (!body.success) {
    return jsonResponse(body.response, 400);
  }

  const validation = validateRequest(body.data);

  if (!validation.success) {
    return jsonResponse(validation.response, 400);
  }

  return jsonResponse({
    success: true,
    message: "Request validation passed.",
    title: validation.title,
    meta: {
      version: APP.version,
      build: APP.build,
      ai: APP.ai
    }
  });

}

async function parseBody(request) {

  try {

    const data = await request.json();

    return {
      success: true,
      data
    };

  } catch {

    return {
      success: false,
      response: {
        success: false,
        error: "Invalid JSON body."
      }
    };

  }

}

function validateRequest(data) {

  const title = (data.title || "").trim();

  if (!title) {

    return {
      success: false,
      response: {
        success: false,
        error: "Title is required."
      }
    };

  }

  return {
    success: true,
    title
  };

}

function jsonResponse(data, status = 200) {

  return new Response(
    JSON.stringify(data),
    {
      status,
      headers: HEADERS
    }
  );

}