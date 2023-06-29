const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 }
    },
    {
      name: "headimage",
      title: "Headline Image",
      type: "image",
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
      options: { maxLength: 96 }
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
          {
            type: 'block',
            marks: {
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'link',
                  fields: [
                    {
                      name: 'url',
                      type: 'string'
                    }
                  ]
                }
              ],
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
                { title: 'Code', value: 'code' },
                { title: 'Highlight', value: 'highlight' }
              ]
            }      
          },
          {
            type: 'image'
          }
      ],
      validation: (Rule: { required: () => any; }) => Rule.required()
    },
    {
      name: "unlisted",
      title: "Unlisted?",
      type: "boolean",
      initialValue: false
    }
  ]
}

export default article;