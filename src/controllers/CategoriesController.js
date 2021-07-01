

export const index = async (req, res) => {
  try {
    res.render("backend/categories", { layout: "admin-layout" });
    // const categorys = await CategoryModel.find();
    // res.status(200).json(categorys);
  } catch (err) {
    res.status(500).json("error", err);
  }
};
