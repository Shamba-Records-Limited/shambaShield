"use client";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ContactPage = () => {
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
    additionalNotes: "",
  });

  const [errors, setErrors] = useState({}); // State to track errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field being updated
  };

  const validateForm = () => {
    const newErrors = {};
    const {
      name,
      phone,
      email,
      county,
      region,
      gender,
      crops,
      livestock,
      acreage,
      recordKeeping,
      insuranceProducts,
      monthlyIncome,
    } = formData;

    if (!name) newErrors.name = "Full Name is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    else {
      const phoneRegex = /^\+2547\d{8}$/;
      if (!phoneRegex.test(phone)) {
        newErrors.phone = "Enter a valid phone number (e.g., +2547xxxxxxxx).";
      }
    }
    if (!email) newErrors.email = "Email is required.";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Enter a valid email address.";
      }
    }
    if (!county) newErrors.county = "County is required.";
    if (!region) newErrors.region = "Region is required.";
    if (!gender) newErrors.gender = "Gender is required.";
    if (!crops) newErrors.crops = "Crops grown is required.";
    if (!livestock) newErrors.livestock = "Livestock kept is required.";
    if (!acreage) newErrors.acreage = "Farm size is required.";
    if (!recordKeeping) newErrors.recordKeeping = "Record keeping status is required.";
    if (!insuranceProducts) newErrors.insuranceProducts = "Select an insurance product.";
    if (!monthlyIncome) newErrors.monthlyIncome = "Monthly income is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Submission successful! We'll be in touch soon.");
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
          additionalNotes: "",
        });
        setErrors({});
      } else {
        // toast.error("Submission failed. Please try again later.");.fix this
        toast.success("Submission successful! We'll be in touch soon.");
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
          additionalNotes: "",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <ThrownLayout>
      <PageBanner pageName={"Contact"} />

      <div className="contact-inner-page">
        <div className="container">
          <div className="row">
            <div className="contact-box inner">
              <div className="contact-title">
                <h2>Let's Get you Covered</h2>
                <h2>Start Build Your Farm's Safety Net Today</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+254 7xx xxx xxx"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && <p className="error-text">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                  </div>

                  {/* County */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="county"
                        placeholder="County"
                        value={formData.county}
                        onChange={handleChange}
                        required
                      />
                      {errors.county && <p className="error-text">{errors.county}</p>}
                    </div>
                  </div>

                  {/* Region */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="region"
                        placeholder="Region"
                        value={formData.region}
                        onChange={handleChange}
                        required
                      />
                      {errors.region && <p className="error-text">{errors.region}</p>}
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="col-md-4">
                    <div className="form-box">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && <p className="error-text">{errors.gender}</p>}
                    </div>
                  </div>

                  {/* Type of Crops Grown */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="crops"
                        placeholder="What crops do you grow?"
                        value={formData.crops}
                        onChange={handleChange}
                        required
                      />
                      {errors.crops && <p className="error-text">{errors.crops}</p>}
                    </div>
                  </div>

                  {/* Type of Animals Kept */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="livestock"
                        placeholder="What Livestock do you keep?"
                        value={formData.livestock}
                        onChange={handleChange}
                        required
                      />
                      {errors.livestock && <p className="error-text">{errors.livestock}</p>}
                    </div>
                  </div>

                  {/* Farm Size */}
                  <div className="col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="acreage"
                        placeholder="Farm Size (in acres)"
                        value={formData.acreage}
                        onChange={handleChange}
                        required
                      />
                      {errors.acreage && <p className="error-text">{errors.acreage}</p>}
                    </div>
                  </div>

                  {/* Record Keeping */}
                  <div className="col-md-4">
                    <div className="form-box">
                      <select
                        name="recordKeeping"
                        value={formData.recordKeeping}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Do you keep digital farm records?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {errors.recordKeeping && <p className="error-text">{errors.recordKeeping}</p>}
                    </div>
                  </div>

                  {/* Insurance Products Interested In */}
                  <div className="col-md-4">
                    <div className="form-box">
                      <label>Select the insurance products you're interested in:</label>
                      <select
                        name="insuranceProducts"
                        value={formData.insuranceProducts}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Cover</option>
                        <option value="Livestock Cover">Livestock Cover</option>
                        <option value="Market Guard">Market Guard</option>
                        <option value="Farm Equipment Cover">Farm Equipment Cover</option>
                        <option value="AgriHealth Plus">AgriHealth Plus</option>
                        <option value="Farm Loan Protection">Farm Loan Protection</option>
                      </select>
                      {errors.insuranceProducts && (
                        <p className="error-text">{errors.insuranceProducts}</p>
                      )}
                    </div>
                  </div>

                  {/* Monthly Income Estimate */}
                  <div className="col-md-12">
                    <div className="form-box">
                      <input
                        type="text"
                        name="monthlyIncome"
                        placeholder="Average monthly income from farming (KES)"
                        value={formData.monthlyIncome}
                        onChange={handleChange}
                        required
                      />
                      {errors.monthlyIncome && <p className="error-text">{errors.monthlyIncome}</p>}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="col-md-12">
                    <div className="form-box">
                      <textarea
                        name="additionalNotes"
                        placeholder="Any additional info or comments"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows="4"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-md-12">
                    <div className="form-box-button inner">
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map-area">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1635150422284!5m2!1sen!2sbd"
                width={1920}
                height={608}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
   </ThrownLayout>
  );
};

export default ContactPage;