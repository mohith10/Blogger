function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;
    console.log(email)
    res.status(200).json({ email: email, feedback:feedback });
  }
}
export default handler;
