exports.createPages = async function({ actions, graphql, reporter }) {
  const result = await graphql(
    `
      query {
        allCosmicjsImages {
          nodes {
            slug
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panic("failed ro create pages", result.errors)
  }
  result.data.allCosmicjsImages.nodes.forEach(edge => {
    const slug = edge.slug
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve(`./src/template/Layout`),
      context: { slug: slug },
    })
  })
}
