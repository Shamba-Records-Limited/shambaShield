import mongoose from "mongoose";

const FarmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  county: { type: String, required: true },
  region: { type: String, required: true  },
  gender: { type: String , required: true },
  crops: [String],
  livestock: [String],
  acreage: { type: String , required: true  },
  recordKeeping: { type: String , required: true },
  insuranceProducts: { type: String , required: true },
  monthlyIncome: { type: Number , required: true },
  additionalNotes: { type: String , required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Farmer || mongoose.model("Farmer", FarmerSchema);
