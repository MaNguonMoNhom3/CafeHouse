//
//
//admin


// get Login
export const login = async (req, res) => {
  try {
    if(req.method == 'GET') {
      return res.render("backend/login", { layout: false });
    }
    if(req.method = 'POST') {
      if(req.body.username == 'admin' && req.body.password == 'admin') {
        req.session.user = req.body
        res.redirect("/admin")
      }
      res.redirect("/admin/login")
    }
  } catch (err) {
    
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
//logout
export const logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      res.redirect("/admin/login")
    })
  } catch (err) {
    res.status(500).json("error", err);
  }
};