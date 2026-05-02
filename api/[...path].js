export default async function handler(req, res) {
  const BASE_URL = "http://38.47.180.195/student08/api";

  const path = req.query.path?.join("/") || "";
  const targetUrl = `${BASE_URL}/${path}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.authorization || "",
      },
      body:
        req.method !== "GET" && req.method !== "HEAD"
          ? JSON.stringify(req.body)
          : undefined,
    });

    const text = await response.text();

    res.status(response.status);

    try {
      res.json(JSON.parse(text));
    } catch {
      res.send(text);
    }
  } catch (error) {
    res.status(500).json({
      message: "Proxy error",
      error: error.message,
    });
  }
}