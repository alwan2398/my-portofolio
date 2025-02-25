export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Project Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'string',
    },
    {
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'string',
    },
    {
      name: 'feature',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          title: 'Feature Item',
          fields: [
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
