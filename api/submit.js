export default async function handler(req, res) {

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const APPS_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbzPFUTtGDWgyQOM6S3SQWqsw3BBvtu-USjLxp5Fh5uSTddSNr1Y6b8bmCuvgVXhSfGe/exec";

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.warn("Could not parse Apps Script response as JSON:", text);
      data = { status: "error", message: "Invalid response from Apps Script" };
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);
  } catch (err) {
    console.error("Serverless function error:", err);
    res
      .status(500)
      .json({ status: "error", message: err.message || "Request failed" });
  }
}
