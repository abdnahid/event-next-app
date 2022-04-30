const handler = (req, res) => {
  console.log(req.method);
  const { email, name } = req.body;
  if (req.method === 'POST') {
    res.status(201).json({ message: 'Submitted Successfully', name, email });
  }
};

export default handler;
