import { Message } from '../models/Message.js';
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
export const createMessage = async (req, res) => {
    const body = req.body;
    try {
        const me = await new Message({ name: body.name, email: body.email, subject: body.subject, message: body.message });
        me.save();
        res.redirect("/contact");
    } catch (err) {
        res.status(500).json("error", err);
    }
}