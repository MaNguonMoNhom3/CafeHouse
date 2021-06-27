
export const MenuController = (req, res) => {
    res.render('menu',{singinup:true,showHeader:true, menu : true, showCart: true});
}