export const newProjects = `*[_type == "projects"]{
    title,
    description,
    "image": image.asset->url,
    "slug": slug.current
  }`;
