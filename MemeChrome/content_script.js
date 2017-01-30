var images = document.images;
var imageGenerator = 'https://placeimg.com/640/480/any';
for (var i = 0; i < images.length; i++) {
  var width = images[i].clientWidth;
  var height = images[i].clientHeight;
  if (images[i].src.match(/.gif/)){
    var newURL = imageGenerator + width + '/' + height;
    images[i].src = newURL;
  }
}