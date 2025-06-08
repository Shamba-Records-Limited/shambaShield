import { connectDB } from "@/server/utils/db";
import Farmer from "@/server/models/Farmer";

export async function POST(req) {
  await connectDB();

  try {
    const data = await req.json();

    const farmer = new Farmer({
      ...data,
      crops: Array.isArray(data.crops) ? data.crops : [],
      livestock: Array.isArray(data.livestock) ? data.livestock : []
    });

    await farmer.save();

    return Response.json({ message: "Farmer registered successfully" }, { status: 201 });

  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();

  try {
    const farmers = await Farmer.find().sort({ createdAt: -1 });
    return Response.json(farmers, { status: 200 });

  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
