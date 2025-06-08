"use client";
import { useState } from "react";

export default function FarmerRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    county: "",
    region: "",
    gender: "",
    crops: "",
    livestock: "",
    acreage: "",
    recordKeeping: "",
    insuranceProducts: "",
    monthlyIncome: "",
    additionalNotes: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const formattedData = {
        ...formData,
        crops: formData.crops.split(',').map(crop => crop.trim()), 
        livestock: formData.livestock.split(',').map(animal => animal.trim())
      };

      const response = await fetch('/api/farmers', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Farmer registered successfully!");
        setFormData({
          name: "", phone: "", email: "", county: "", region: "", gender: "",
          crops: "", livestock: "", acreage: "", recordKeeping: "",
          insuranceProducts: "", monthlyIncome: "", additionalNotes: ""
        });
      } else {
        setStatus("❌ " + (result.error || "Something went wrong!"));
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Register a Farmer</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required /><br /><br />
        <input name="phone" type="tel" placeholder="+254 7xx xxx xxx" value={formData.phone} onChange={handleChange} required /><br /><br />
        <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} /><br /><br />
        <input name="county" type="text" placeholder="County" value={formData.county} onChange={handleChange} /><br /><br />
        <input name="region" type="text" placeholder="Region" value={formData.region} onChange={handleChange} /><br /><br />
        
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br /><br />

        <input name="crops" type="text" placeholder="What crops do you grow? (comma separated)" value={formData.crops} onChange={handleChange} /><br /><br />
        <input name="livestock" type="text" placeholder="What livestock do you keep? (comma separated)" value={formData.livestock} onChange={handleChange} /><br /><br />
        <input name="acreage" type="text" placeholder="Farm Size (in acres)" value={formData.acreage} onChange={handleChange} /><br /><br />

        <select name="recordKeeping" value={formData.recordKeeping} onChange={handleChange} required>
          <option value="">Do you keep digital farm records?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select><br /><br />

        <select name="insuranceProducts" value={formData.insuranceProducts} onChange={handleChange} required>
          <option value="">Select Insurance Product</option>
          <option value="Livestock Cover">Livestock Cover</option>
          <option value="Market Guard">Market Guard</option>
          <option value="Farm Equipment Cover">Farm Equipment Cover</option>
          <option value="AgriHealth Plus">AgriHealth Plus</option>
          <option value="Farm Loan Protection">Farm Loan Protection</option>
        </select><br /><br />

        <input name="monthlyIncome" type="text" placeholder="Average Monthly Income (KES)" value={formData.monthlyIncome} onChange={handleChange} /><br /><br />

        <textarea name="additionalNotes" placeholder="Any additional info or comments" value={formData.additionalNotes} onChange={handleChange} rows="4"></textarea><br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "20px", color: status.startsWith('✅') ? "green" : "red" }}>
          {status}
        </p>
      )}
    </div>
  );
}
