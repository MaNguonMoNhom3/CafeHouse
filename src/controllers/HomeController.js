
export const HomeController = (req, res) => {
    res.render('home',{singinup:true,showHeader:true, home : true, showCart: true});
}