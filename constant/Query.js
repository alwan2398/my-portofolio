export const getNewProjects = `*[_type == "projects"] | order(_updatedAt desc) [0...4]{
  title,
  description,
  "image": image.asset->url,
  "slug": slug.current
}`;

export const getRiview = `*[_type == "riview"]{
  name,
  rating,
  message
  }`;

export const getDetailProject = `*[_type == "projects" && slug.current == $slug]{
    title,
    description,
    "image": image.asset->url,
    "slug": slug.current,
    githubUrl,
    demoUrl,
    feature[]{
      title,
      "icon": icon.asset->url
    }
  }`;
