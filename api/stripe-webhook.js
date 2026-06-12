export default async function handler(req, res) {
  console.log("Webhook received");
  console.log(req.body);

  return res.status(200).json({
    received: true
  });
}
