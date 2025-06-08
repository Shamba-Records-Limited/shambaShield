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

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formattedData = {
        ...formData,
        crops: formData.crops.split(',').map(crop => crop.trim()),
        livestock: formData.livestock.split(',').map(animal => animal.trim())
      };

      const res = await fetch('/api/farmers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      if (res.ok)
      setStatus({ type: 'success', message: 'Farmer Registered Successfully!' });
      setFormData({
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

    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Register Farmer</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
        <input name="county" value={formData.county} onChange={handleChange} placeholder="County" className="input" />
        <input name="region" value={formData.region} onChange={handleChange} placeholder="Region" className="input" />

        <select name="gender" value={formData.gender} onChange={handleChange} className="input" required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input name="crops" value={formData.crops} onChange={handleChange} placeholder="Crops (comma separated)" className="input" />
        <input name="livestock" value={formData.livestock} onChange={handleChange} placeholder="Livestock (comma separated)" className="input" />
        <input name="acreage" value={formData.acreage} onChange={handleChange} placeholder="Acreage" className="input" />

        <select name="recordKeeping" value={formData.recordKeeping} onChange={handleChange} className="input" required>
          <option value="">Do you keep digital records?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select name="insuranceProducts" value={formData.insuranceProducts} onChange={handleChange} className="input" required>
          <option value="">Select Insurance Product</option>
          <option>Livestock Cover</option>
          <option>Market Guard</option>
          <option>Farm Equipment Cover</option>
          <option>AgriHealth Plus</option>
          <option>Farm Loan Protection</option>
        </select>

        <input name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} placeholder="Monthly Income" className="input" />
        <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Additional Notes" className="input"></textarea>

        <button type="submit" className="button" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status && (
          <p className={status.type === 'error' ? 'text-red-500' : 'text-green-500'}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
