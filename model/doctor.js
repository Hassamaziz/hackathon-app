import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const DoctorSchema = new mongoose.Schema({
  doctorId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  schedule: [slotSchema],
});

export const DoctorModel = mongoose.models?.doctors || mongoose.model('doctors', DoctorSchema);
