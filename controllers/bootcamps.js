const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
	try {
		const bootcamps = await Bootcamp.find();

		res.status(200).json({
			success: true,
			count: bootcamps.length,
			data: bootcamps,
		});
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findById(req.params.id);

		if (!bootcamp) {
			return res.status(400).json({ success: false });
		}

		res.status(200).json({
			success: true,
			data: bootcamp,
		});
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// @desc    Create single bootcamp
// @route   POST /api/v1/bootcamps
// @access  Public
exports.createBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.create(req.body);

		res.status(201).json({
			success: true,
			data: bootcamp,
		});
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Public
exports.updateBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!bootcamp) {
			return res.status(400).json({ success: false });
		}

		res.status(200).json({ success: true, data: bootcamp });
	} catch (error) {
		return res.status(400).json({ success: false });
	}
};

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Public
exports.deleteBootcamp = async (req, res, next) => {
	try {
		const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

		if (!bootcamp) {
			return res.status(400).json({ success: false });
		}

		res.status(200).json({ success: true, data: {} });
	} catch (error) {
		return res.status(400).json({ success: false });
	}
};
