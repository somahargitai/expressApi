const endpoint1 = (req, res) => {
  console.log('/endpoint_1');

  res.type('application/json');
  res.status(200);
  return res.json('test response endpoint 1');
};


module.exports = endpoint1;