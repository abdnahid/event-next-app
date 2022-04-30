const handler = (req, res) => {
  if (req.method === 'POST') {
    const { _id, rating, comment } = req.body;
    res.status(201).json({ message: 'Success', _id, rating, comment });
  } else {
    res.status(200).json({ message: 'GET works' });
  }
};

export default handler;
