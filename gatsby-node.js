const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const tagTemplate = path.resolve('./src/templates/tags.js')
    const careerTemplate = path.resolve('./src/templates/career.js')
    const countryTemplate = path.resolve('./src/templates/country.js')

    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                        tags
                        country
                        occupation
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
        //Career Page
        const career = edge.node.occupation
        var safeCareer = ""

        for (var i = 0; i < career.length; i++){
            if (career[i] == " "){
                safeCareer += "-"
            } else{
                safeCareer += career[i]
            }
        }

        createPage({
            component: careerTemplate,
            path: `/career/${safeCareer}`,
            context: {
                slug: safeCareer
            }
        })

        //Country Page

        const country = edge.node.country
        var safeCountry = ""

        for (var i = 0; i < country.length; i++){
            if (country[i] == " "){
                safeCountry += "-"
            } else{
                safeCountry += country[i]
            }
        }

        createPage({
            component: countryTemplate,
            path: `/country/${safeCountry}`,
            context: {
                slug: safeCountry
            }
        })
        
        //Tag Pages
        arrTags = edge.node.tags.split(",")
        arrTags.forEach((tag) => {
            createPage({
                component: tagTemplate,
                path: `/tag/${tag}`,
                context: {
                    slug: tag
                }
            })
        })
    })
}