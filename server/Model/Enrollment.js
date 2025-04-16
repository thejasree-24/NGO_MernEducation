const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  enrolledAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);