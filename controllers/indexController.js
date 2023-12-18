exports.test = (req, res, next) => {
    res.status(200).json({ success: true, message: "Test route." });
};

exports.create = (req, res, next) => {
    res.status(200).json({ success: true, body: req.body });
};
