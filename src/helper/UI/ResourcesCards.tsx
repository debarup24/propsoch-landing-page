import React from "react";

interface ResourceData {
  id: number;
  type: string;
  title: string;
  descriptions: string;
  imageUrl: string;
}

const mockResourceData: ResourceData[] = [
  {
    id: 1,
    type: "Blog",
    title: "2025 Bangalore Real Estate",
    descriptions: "Explore micro-markets, price trends & upcoming hotspots.",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2048",
  },
  {
    id: 2,
    type: "Blog",
    title: "Home Buying Checklist",
    descriptions:
      "Navigate the home buying journey with confidence - from property search to final paperwork.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2048",
  },
  {
    id: 3,
    type: "Blog",
    title: "Home Buying Guide 101",
    descriptions:
      "Track your purchase journey with an essential checklist of documents, inspections, and key milestones.",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2048",
  },
];

const ResourcesCards = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {mockResourceData.map((resource) => (
        <div
          key={resource.id}
          className="group flex flex-col cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:scale-105"
        >
          {/* Image Container */}
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <img
              src={resource.imageUrl}
              alt={resource.title}
              className="h-full w-full object-cover transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col pt-5 pb-2">
            <span className="mb-2 text-sm font-medium text-[#FF6D33] capitalize">
              {resource.type}
            </span>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {resource.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              {resource.descriptions}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcesCards;
