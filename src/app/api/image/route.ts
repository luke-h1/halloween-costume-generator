export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  try {
    const response = await fetch("https://api.edenai.run/v2/image/generation", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        providers: "deepai",
        text: text,
        resolution: "512x512",
      }),
    });

    const data = await response.json();

    const url = data.deepai.items[0].image_resource_url;

    return new Response(JSON.stringify({ url }), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch (e) {}
}
