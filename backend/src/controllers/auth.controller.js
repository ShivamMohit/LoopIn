export const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  return res.status(200).json({
    message: "Login successful"
    });
}


export const register = (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  return res.status(200).json({
    message: "Registration successful"
  });
}


export const logout = (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  return res.status(200).json({
    message: "Registration successful"
  });
}