class HomeController {
    // GET Home page
    index(req, res){
        res.sendFile( __dirname + "/src/views/frontend/" + "index.html" );
    }
}
export default new HomeController;