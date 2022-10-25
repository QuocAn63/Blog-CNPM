
class SiteController {

    index(req, res) {
        res.send('hello world');
    }
}

module.exports = new SiteController();
