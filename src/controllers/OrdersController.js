export const index = async (req, res) => {
  try {
    res.render("backend/orders", { layout: "admin-layout" });
  } catch (err) {
    res.status(500).json("error", err);
  }
};
