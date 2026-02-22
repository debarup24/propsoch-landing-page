import ActionButton from "@/helper/Custom Buttons/ActionBTN";
import AdvisorPanel from "@/helper/UI/AdvisorPanel";
import React from "react";

const AdvisorConnect = () => {
  const mockBenefits = [
    { id: 1, text: "1:1 discussion from experienced Property Advisors" },
    {
      id: 2,
      text: "Live calls every week with property experts, Q&A, Opportunity discuss",
    },
    { id: 3, text: "2000+ of detail reports of upcoming projects" },
    {
      id: 4,
      text: "Exclusive discounts on your property power team, from lenders to solicitors",
    },
    {
      id: 5,
      text: "Exchange hot leads and packaged deals on the Propsoch Club Community portal",
    },
  ];

  const mockAdvisor1 = [
    {
      id: 1,
      name: "Satyendra Banerjee",
      role: "Top Property Advisor in India",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      quote: "Let's discuss about the next opportunity",
      tags: [
        "Efficiency",
        "Floor-to-Ceiling Height",
        "Project Density",
        "The Human Design Experiment",
      ],
    },
    {
      id: 2,
      name: "Sabitri Chau",
      role: "Top Property Advisor in India",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      quote: "Excited to meet you all",
      tags: [
        "High Returns",
        "Legal Safety",
        "Market Trends",
        "Sustainable Living",
      ],
    },
    {
      id: 3,
      name: "Gopal",
      role: "Top Property Advisor in India",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      quote: "Helping you find the perfect home",
      tags: [
        "Vastu",
        "Budget Planning",
        "Location Advantage",
        "Construction Quality",
      ],
    },
  ];

  return (
    <section className="bg-orange-50 pb-4">
      <AdvisorPanel
        title={
          <>
            Never stop <span className="text-orange-500">learning</span> from{" "}
            <br />
            the top 2% of Advisors
          </>
        }
        subtitle="The India's #1 place for Intelligent Home Buyer"
        benefits={mockBenefits}
        advisors={mockAdvisor1}
      />
      <div className="flex justify-center mt-8">
        <ActionButton size="lg" variant="brand">
          Book An Appointment
        </ActionButton>
      </div>
    </section>
  );
};

export default AdvisorConnect;
