const { DevelopingAttempt } = require('../../models');
/*
module.exports = (req, res) => {
  //const { id: receiver } = req.user;
  TrainingAttempt
      .find()
    .then(result => res
      .status(200)
      .json({
        data: result.map(o => o.toObject()),
      }))
    .catch(error => res
      .status(500)
      .json({ errors: [error.message.toUpperCase()] }));
};
*/

module.exports = (req, res) => {

    const {
        state1,
    } = req.body;

    DevelopingAttempt
        .find({ state: state1 })
        .then((developingAttempts) => {
            if (!developingAttempts) {
                res
                    .status(404)
                    .json({
                        errors: ['USER_NOT_FOUND'],
                    });
                return;
            }
            res
                .status(200)
                .json(developingAttempts);
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    error: error.toString(),
                });
        });
};
