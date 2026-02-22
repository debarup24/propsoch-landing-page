"use client";

import React from "react";

// Types for the table structure
interface ComparisonRow {
  feature: string;
  propsochValue: string;
  competitorValue: string;
}

interface ComparisonTableProps {
  activeTab: string;
}

const ProductComparisonTable = ({ activeTab }: ComparisonTableProps) => {
  // Data for different tabs
  const data: Record<
    string,
    { competitorName: string; rows: ComparisonRow[] }
  > = {
    "Online Portal": {
      competitorName: "Online portals (Housing/99Acres/Magicbricks)",
      rows: [
        {
          feature: "Information Depth",
          propsochValue: "80+ data points",
          competitorValue: "20-40 data points",
        },
        {
          feature: "Transparency",
          propsochValue: "Detailed pros & cons",
          competitorValue: "Only pros highlighted",
        },
        {
          feature: "Data Accuracy",
          propsochValue: "Verified by architects",
          competitorValue: "Loose verification",
        },
        {
          feature: "Service Validity",
          propsochValue: "Till you find your home",
          competitorValue: "Based on no. of contacts",
        },
        {
          feature: "Data Sources",
          propsochValue: "RERA, GMaps, CDP etc.",
          competitorValue: "Added by developer & broker",
        },
      ],
    },
    "Local Broker": {
      competitorName: "Local brokers",
      rows: [
        {
          feature: "Sales Practices",
          propsochValue: "Consultative, no pressure",
          competitorValue: "High pressure sales tactics",
        },
        {
          feature: "Transparency",
          propsochValue: "Detailed pros & cons",
          competitorValue: "Only pros highlighted",
        },
        {
          feature: "Project Curation",
          propsochValue: "Based on 20+ factors",
          competitorValue: "Not curated",
        },
        {
          feature: "Spam",
          propsochValue: "No spam",
          competitorValue: "High spamming until closure",
        },
        {
          feature: "Post sales support",
          propsochValue: "End-to-end support",
          competitorValue: "None",
        },
        {
          feature: "Project Curation 1",
          propsochValue: "Based on 20+ factors",
          competitorValue: "Not curated",
        },
        {
          feature: "Spam",
          propsochValue: "No spam",
          competitorValue: "High spamming until closure",
        },
        {
          feature: "Advisor",
          propsochValue: "Trained architects",
          competitorValue: "Local sales people",
        },
      ],
    },
  };

  const currentData = data[activeTab] || data["Online Portal"];

  return (
    <div className="w-full overflow-y-auto rounded-xl border border-orange-300 bg-white shadow-sm">
      <table className="w-full text-left border-collapse ">
        <thead>
          <tr className="border-b border-orange-300 bg-gray-50">
            <th className="px-6 py-4 text-sm font-semibold text-gray-500 w-1/3">
              What you care about
            </th>
            <th className="px-6 py-4 text-sm font-semibold bg-orange-100 text-gray-900 w-1/3 border-x border-orange-300">
              <div className="flex items-center gap-2">
                {/* Logo */}
                {/* <div className="bg-orange-500 p-1 rounded">
                  <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                </div> */}
                <span className="text-orange-600 font-bold text-lg ">
                  Propsoch
                </span>
              </div>
            </th>
            <th className="px-6 py-4 text-sm font-semibold text-gray-500 w-1/3">
              {currentData.competitorName}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-200">
          {currentData.rows.map((row, index) => (
            <tr key={index} className="transition-colors hover:bg-gray-50/50">
              <td className="px-6 py-5 text-sm font-medium text-gray-700">
                {row.feature}
              </td>
              {/* Propsoch Column with Highlight */}
              <td className="px-6 py-5 text-sm font-medium text-gray-900 bg-orange-100 border-x border-orange-300">
                {row.propsochValue}
              </td>
              <td className="px-6 py-5 text-sm text-gray-600">
                {row.competitorValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;
