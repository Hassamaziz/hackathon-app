

import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
  },
  medicalHistory: {
    type: String,
    required: true,
  },
});

export const PatientModel= mongoose.models?.patients|| mongoose.model('patients',patientSchema)

