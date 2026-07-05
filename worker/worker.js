export default {
  async fetch(request, env) {

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (request.method === "GET") {
      return new Response(
        JSON.stringify({
          success: true,
          worker: "ISOS ENTERPRISE AI",
          version: "25.2.0",
          status: "Foundation Ready"
        }),
        { headers }
      );
    }

    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Method Not Allowed"
        }),
        {
          status: 405,
          headers
        }
      );
    }

    try {

      const body = await request.json();

      const title = (body.title || "").trim();

      if (!title) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Title is required."
          }),
          {
            status: 400,
            headers
          }
        );
      }

      return new Response(
        JSON.stringify({

          success: true,

          article: `Test Article: ${title}`,

          seo: {
            title: title,
            meta_description: "Test Description",
            focus_keyword: title,
            slug: title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")
          },

          faq: [],

          social: {
            facebook: "",
            linkedin: "",
            twitter: "",
            whatsapp: ""
          },

          images: [],

          meta: {
            version: "25.2.0",
            ai: false,
            generated_at: new Date().toISOString()
          }

        }),
        { headers }
      );

    } catch (error) {

      return new Response(
        JSON.stringify({
          success: false,
          error: error.message
        }),
        {
          status: 500,
          headers
        }
      );

    }

  }
}
