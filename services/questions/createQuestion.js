const { Question } = require('../../models');

module.exports = (req, res) => {

			const{
				question,
				description,
				answers
			} = req.body;


	Question
		  .create({
			question, description,answers
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
