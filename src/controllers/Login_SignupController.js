//
//
//admin
// get Login
export const login = async (req, res) => {
  try {
    res.render("backend/login", { layout: false });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
// get SignUp
export const signUp = async (req, res) => {
  try {
    res.render("backend/signup", { layout: false });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
