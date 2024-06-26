export const homePageQuery = /* groq */ `
  *[_type == "home" && _id == "home"][0] {
    "header": {
      title,
      "ingress": headerIngress,
      "cta": headerCta,
      "image": headerImage,
      "backgroundColor": headerBackgroundColor
    }
  }
`
