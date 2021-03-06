const { DevelopingAttempt } = require('../../models');


module.exports = (req, res) => {
    // const { id: sender } = req.user;
    // TODO check whether client information is sanitize;
    // Check that receivers are allowed;

    DevelopingAttempt
        .create(req.body, function(err, newDevelopingAttempt){
            if (err){
                res
                    .status(500)
                    .json({
                        result: error && error.message ? error.message : error.toString(),
                    });
            }
            else {
                res
                    .status(200)
                    .json({
                        id: newDevelopingAttempt.id,
                    });
            }
    });
};
