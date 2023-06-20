export async function executeQraphQLRequest(
  query: string,
  variables: Record<string, any> = {}
) {
  return await fetch("https://data.klve.nl/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((r) => r.json())
    .then((r) => r.data);
}
