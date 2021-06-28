
export const CheckoutController = (req, res) => {
    res.render('checkout',{ showHeader:false, showCart : false, singinup: true});
}