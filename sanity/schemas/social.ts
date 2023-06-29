const social = {
    name: "social",
    title: "Social Links",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required()
      },
      {
        name: "href",
        title: "HREF",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required()
      }
    ]
  }
  
export default social;