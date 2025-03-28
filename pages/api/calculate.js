export default function handler(req, res) {
  if (req.method === "POST") {
    const { input1, input2, input3 } = req.body;

    // Replace this with your actual calculation logic
    const result1 = parseFloat(input1) + parseFloat(input2) * parseFloat(input3);
    const result2 = result1 * 1.2;
    const result3 = result1 * 1.5;

    res.status(200).json({
      result1,
      result2,
      result3
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
