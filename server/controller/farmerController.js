import Farmer from "@/server/models/Farmer";

export async function createFarmer(data) {
  try {
    const farmer = new Farmer({
      ...data,
      crops: Array.isArray(data.crops) ? data.crops : [],
      livestock: Array.isArray(data.livestock) ? data.livestock : []
    });

    await farmer.save();
    return farmer;
  } catch (error) {
    throw new Error('Failed to create farmer: ' + error.message);
  }
}

export async function getAllFarmers() {
  try {
    const farmers = await Farmer.find().sort({ createdAt: -1 });
    return farmers;
  } catch (error) {
    throw new Error('Failed to fetch farmers: ' + error.message);
  }
}
