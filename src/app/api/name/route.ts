export async function GET() {
  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1",
    {
        next: {
            revalidate: 0
        }
    }
  );

  const data = await response.json();

  const name = data.query.random[0].title;

  return new Response(
    JSON.stringify({
      name,
    }),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }
  );
}
