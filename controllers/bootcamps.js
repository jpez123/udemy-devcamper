// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: 'Show all bootcamps',
	});
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Get bootcamp ${req.params.id}`,
	});
};

// @desc    Create single bootcamp
// @route   POST /api/v1/bootcamps
// @access  Public
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: 'Create new bootcamps',
	});
};

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Public
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Update bootcamp ${req.params.id}`,
	});
};

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Public
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Delete bootcamp ${req.params.id}`,
	});
};
