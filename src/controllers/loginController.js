
export const SingInController = (req, res) => {
    res.render('singin',{singinup:false,showHeader: true, showSingInUp: true, flexCenter: 'display-flex-center'});
}

export const SingUpController = (req, res) => {
    res.render('singup',{singinup:false,showHeader: true, showSingInUp: true, flexCenter: 'display-flex-center'});
}