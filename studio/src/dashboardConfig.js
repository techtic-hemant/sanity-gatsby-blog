export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e82fd7af5b28b1c5e0304f4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tqtxc5j9',
                  apiId: '4497d889-c8f2-416a-8af0-c9036f1f19c4'
                },
                {
                  buildHookId: '5e82fd7a4a5846ee633e416f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4q78v5xg',
                  apiId: '1ae01ee2-100c-4e30-8e3c-175c7a65e91d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/techtic-hemant/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4q78v5xg.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
