const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: "desc",
      title: "Description",
      type: "string"
    }
  ]
}

export default project;