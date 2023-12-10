// models/doctorsCred.js
import mongoose from 'mongoose';

const DoctorCredSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  
});

export const DoctorCredModel = mongoose.models.doctorsCred || mongoose.model('doctorsCred', DoctorCredSchema);
