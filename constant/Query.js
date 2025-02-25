export const getNewProjects = `*[_type == "projects"]{
    title,
    description,
    "image": image.asset->url,
    "slug": slug.current,
    githubUrl,
    demoUrl
  }`;

export const getRiview = `*[_type == "riview"]{
  name,
  rating,
  message
  }`;
