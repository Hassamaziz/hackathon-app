import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    required: true,
    unique: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
});

export const AppointmentModel = mongoose.models?.appointments || mongoose.model('appointments', appointmentSchema);

