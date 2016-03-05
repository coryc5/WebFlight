var hello = require('./images/hello.js');
var tea = './images/Hot-Tea.jpg';
var pizza = './images/pizza.png';
var fs = require('fs');
var sha1 = require('sha1');

var Sha1ImageHashing = {};
Sha1ImageHashing.arrayOfImages = arrayOfImages;


hashedImgObj = {};

function arrayOfImages(array){
  hashedImgObj = {};
  //array.forEach(imageHashing);
  console.log('is the imageobj populated?', hashedImgObj)
}

arrayOfImages([tea,pizza])


function imageHashing(image){
  console.log('this is');
    fs.readFile(image, function(err, data){
    if (err) throw err;
    console.log(data);
    var sha1Encoded = sha1(image);
    //console.log('image path', image)
    //console.log('encoded', sha1Encoded);
     hashedImgObj[image] = sha1Encoded;
    console.log('is the imageobj populated??', hashedImgObj);
  })
  console.log('asynchronous');
}
imageHashing(tea);

module.exports = Sha1ImageHashing;
