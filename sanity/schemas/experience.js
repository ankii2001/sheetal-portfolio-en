export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [ 
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Comapny Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      name: "duration",
      title: "Duration",
      type: "number",
    },
    {
      name: "isCurrentWorkingHere",
      title: "IsCurrentWorkingHere",
      type: "boolean",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of : [{type: "string"}]
    },
  ],
};
