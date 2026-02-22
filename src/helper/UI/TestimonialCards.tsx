import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Debarup Sarkar",
    text: "Amazing service. Really helped us scale quickly!",
    role: "Software Engineer at Propsoch",
  },
  {
    id: 2,
    name: "Priya Mehta",
    text: "Highly professional team. Support was excellent throughout the project. Would definitely recommend them to anyone looking for quality development work.",
    role: "Senior Manager @Grant Thornton International",
  },
  {
    id: 3,
    name: "Arjun Kapoor",
    text: "Propsoch team helped a lot in finalizing my property. Rashmi from the team was especially helpful with timely insights and inputs that made my experience really smooth",
    role: "Intelligent Homebuyer",
  },
  {
    id: 4,
    name: "Ankita Srivastava",
    text: "Propsoch: A name we will remember throughout our life. Despite juggling between busy schedule and aimlessly looking for the flats on weekends along with random brokers and third party, little did we know about checkpoints for our 'dream home' in our not so tiny head. Now we were more clear and foussed on what we wanted with their help. Stuti, explored solutions to all my important & silly questions. Prashant, with his unwavering guidance, helped us out during site visits. The whole team helped us visualise our 'under contruction property' as it stands today by making reports and answering our endless questions till the D day 22nd july,2024. Well, how will i ever forget this day when we signed up our first dream home. It stand",
    role: "Chief of Product @ Walmart",
  },
  {
    id: 5,
    name: "Ankur Anand",
    text: "Had a great experience with them. They were with me throughout the journey, right from the sourcing of the options, going over the pros and cons, site visits and then helping my shortlist based on my requirements. Prashant and Stuti were very prompt in their communications, answered my query with patience and the right details and always helped me move forward with the right facts and details about each project. Would highly recommend them for anyone starting their real ",
    role: "Vice President @ Hirent",
  },
  {
    id: 6,
    name: "Avipsha Jana",
    text: "If you’re thinking of buying a house and are daunted by the whole process of searching, setting up visits and deciding which property is worthy of your investment, you should reach out to them. The real-estate market is full of brokers that will spam call you to death, who only want to sell you a property, sometimes even without taking your requirements into consideration. PropSoch takes a refreshing approach with the buyer’s requirement at the centre, and the entire home buying journey becomes hassle-free to the point of being enjoyable. From understanding what you want, explaining you what the market looks like, setting up visits to giving detailed analysis that help you take a decision, everything they do will make your home-buying experience a lot easier. Highly recommend them to an",
    role: "R&D Head @ Godrej Consumer",
  },
  {
    id: 7,
    name: "Raman Pillai",
    text: "Propsoch team helped a lot in finalizing my property. Rashmi from the team was especially helpful with timely insights and inputs that made ",
    role: "CEO @ Hotel Pillai",
  },
  {
    id: 8,
    name: "Skanda T.",
    text: "PropSoch takes a refreshing approach with the buyer’s requirement at the centre, and the entire home buying journey becomes hassle-free to the point of being enjoyable. From understanding what you want, explaining you what the market looks like, setting up visits to giving detailed analysis that help you take a decision ",
    role: "HR at Propsoch",
  },
  {
    id: 9,
    name: "Mukul Roy",
    text: "PropSoch takes a refreshing approach with the buyer’s requirement at the centre, and the entire home buying journey becomes hassle-free to the point of being enjoyable. From understanding what you want, explaining you what the market looks like, setting up visits to giving detailed analysis that help you take a decision ",
    role: "Software Development Manager at Google",
  },
  {
    id: 10,
    name: "Pratik Dongaokar",
    text: "Fantastic team, they simplify and ease the process of decision making. Ashish along with his team Stuti and Prashanth were very helpful in enabling our decision. They have a  ",
    role: "Marketing Director @ TMRW",
  },
  {
    id: 11,
    name: "Harish Rao",
    text: "I love the concept. Saw ad on insta immediately liked the idea behind this startup. And the experience didn't disappoint. From the very initial proposal to booking the property in just 3 weeks. Still can't believe how easy it was. Shout out to Akshaya for being  ",
    role: "Senior Product Manager @ Thoughtspot",
  },
];

const TestimonialCards = () => {
  return (
    <div className="bg-transparent min-h-screen p-10">
      <div className="max-w-6xl mx-auto">
        {/* Masonry container */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="mb-6 break-inside-avoid rounded-xl border border-orange-200 bg-slate-100 p-6 text-gray-700"
            >
              <p className="text-sm text-gray-800 mb-4">{item.text}</p>

              <i className="font-semibold">{item.name}</i>
              <p className="text-orange-500 text-xs font-light ">
                — {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
