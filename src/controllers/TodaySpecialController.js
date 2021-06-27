
export const TodaySpecialController = (req, res) => {
    res.render('today-special',{singinup:true,showHeader: true, todayspecial : true, showCart: true});
}