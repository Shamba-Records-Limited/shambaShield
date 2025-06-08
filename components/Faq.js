"use client";
import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      title: "How Soon Can I Get a Quote?",
      content:
        "You can get a personalized quote in under 30 minutes,online or through your local agent.",
    },
    {
      id: 2,
      title: "How Do I Choose the Right Plan?",
      content:
        "Start with your farm size and what matters most to you: livestock, crops, equipment, or income.",
    },
    {
      id: 3,
      title: "Can I Use My Phone to File Claims?",
      content:
        "Yes! Shamba Shield allows SMS or app-based claims with fast response and payout times.",
    },
    {
      id: 4,
      title: "How Is This Different From Other Insurance?",
      content:
        "We use your actual farm data to offer fairer pricing, faster support, and real understanding.",
    },
    {
      id: 5,
      title: "Do I Need to Be in a Co-op to Join?",
      content:
        "No — individual farmers, groups, and cooperatives are all welcome!",
    },
  ];

  const [active, setActive] = useState("event-1");

  return (
    <div className="tab_container">
      <h3 className="text-black pb-4">FAQs</h3>
      <div id="tab1" className="tab_content">
        <ul className="accordion ">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <a
                href="#"
                className={active == `event-${faq.id}` ? "active" : "" }
                onClick={(e) => {
                  e.preventDefault();
                  setActive(
                    active == `event-${faq.id}` ? null : `event-${faq.id}`
                  );
                }}
              >
                <span> {faq.title} </span>{" "}
                <i className="bi bi-chevron-double-right" />
              </a>
              <p
                style={{
                  display: active == `event-${faq.id}` ? "block" : "none",
                }}
              >
                {faq.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Faq;
