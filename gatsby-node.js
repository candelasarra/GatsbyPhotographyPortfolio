exports.createPages = async function({ actions, graphql, reporter }) {
  const result = await graphql(
    `
      query {
        allContentfulPhotos {
          edges {
            node {
              title
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panic("failed ro create pages", result.errors)
  }
  result.data.allContentfulPhotos.edges.forEach(edge => {
    const title = edge.node.title
    actions.createPage({
      path: `/${title.replace(/\s+/g, "-").toLowerCase()}`,
      component: require.resolve(`./src/template/Layout`),
      context: { title: title },
    })
  })
}
