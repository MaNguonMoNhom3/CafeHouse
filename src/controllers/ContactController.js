export const getContact = (req, res) => {
    try {
        let sess = req.session;
        let user = sess.user || "";
        res.render("frontend/contact", {
            singinup: true,
            showHeader: true,
            contact: true,
            showCart: true,
            showHeaderContent: true,
            layout: "home-layout",
            user: { user: user, isExist: user ? true : false },
        });
    } catch (err) {
        res.status(500).json("error", err);
    }
};
