export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed",
    });
  }

  try {
    const body = req.body ?? {};

    console.log("Contact inquiry received:", {
      name: body.name,
      company: body.company,
      phone: body.phone,
      email: body.email,
      service: body.service,
      message: body.message,
    });

    return res.status(200).json({
      ok: true,
      message: "Inquiry received",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      ok: false,
      message: "Something went wrong",
    });
  }
}