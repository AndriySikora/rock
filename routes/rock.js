var express = require('express');
var router = express.Router();
var details = {
	itemGuitar:'Pete Townshend once played this guitar while his own axe was in the shop having bits of drumkit removed from it.',
	itemShades:'Yoko Onos sunglasses. While perhaps not valued much by Beatles fans, this pair is rumored to have been licked by John Lennon.',
	itemCowbell:'Remember the famous more cowbell skit from Saturday Night Live? Well, this is the actual cowbell.',
	itemHat:'Michael Jackson hat, as worn in the Billie Jean video. Not really rock memorabilia, but it smells better than Slash tophat.'
}
/* GET home page. */
router.get('/', function(req, res, next) {
  var title = req.query.title;
  res.send(details[title]);
})
module.exports = router;
