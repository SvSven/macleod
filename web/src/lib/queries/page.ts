export const pageQuery = /* groq */ `
  *[_type == "page" && slug.current == $slug][0]
`
