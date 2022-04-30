const handler = (req, res) => {
  const id = req.query.eventId;
  if (req.method === 'POST') {
    const { name, email } = req.body;
    res.status(201).json({ message: 'Success', id, name, email });
  } else {
    res.status(200).json({ message: 'GET works' });
  }
};

export default handler;
