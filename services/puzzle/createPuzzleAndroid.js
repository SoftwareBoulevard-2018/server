const { Puzzle } = require('../../models');

module.exports = (req, res) => {

	const Jimp = require("jimp");
	
	const path = require('path');
	
	const fs = require('fs');

	const { rewarded_resources, imagen, filename } = req.body;

	const ext = path.extname(imagen);

	const filename2 = imagen.substr(0, imagen.lastIndexOf('.'));
	
	var slicedImage = [];
	
	var originalImage = req.protocol + '://' + req.get('host') +"/static/puzzleImages/"+imagen;
	
	
	Jimp.read("static/puzzleImages/"+imagen).then(image => {
		const w = image.bitmap.width;
        const h = image.bitmap.height;
		var sliceWidth = w / 4;
		var sliceHeight = h / 4;
		var x = 0.0;
		var y = 0.0;
		sliceWidth=sliceWidth;
		sliceHeight=sliceHeight;
		const original = image.clone();
		for(var i=0; i<15; i++) {
			var slice = image.clone().crop(x,y,sliceWidth,sliceHeight);
			if((x+sliceWidth) >= w){
				x=0;
				y=y+sliceHeight;
			}
			else{
				x = x+sliceWidth;
			}
			slice.resize(237,171);
			slice.write("static/puzzleImages/"+filename2+"_"+i+ext);
			
		}
	});
	
	for(var i=0; i<15; i++) {
		slicedImage.push(req.protocol + '://' + req.get('host') +"/static/puzzleImages/"+filename2+"_"+i+ext);
	}
	
	Puzzle
	  .create({
		rewarded_resources, slicedImage, originalImage,
	  })
	  .then(() => {
		 res
			.status(200)
			.json({
				result: 'success',
			});
	   })
		.catch((error) => {
			res
			.status(500)
			.json({
				result: error && error.message ? error.message : error.toString(),
			});
		});
};