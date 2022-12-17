  const projects = [
    {
      name: 'Webdev Gallery and Fruit API',
      description:
        "Learning the basics of the front-end programming, responsiveness, and map/filter functions",
      stack: ['JavaScript', 'HTML/CSS', 'API/Asynchronous'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      route: process.env.PUBLIC_URL + '/webdev',
    },
    {
      name: 'Bakery V1',
      description:
        'Learning React - the use of states',
      stack: ['React', 'HTML/CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      route: process.env.PUBLIC_URL + '/bakeryv1',
    },
    {
      name: 'Bakery V2',
      description:
        'React - further polishing react skills with UI/UX concepts in mind',
      stack: ['React', 'HTML/CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      route: process.env.PUBLIC_URL + '/bakeryv2',
    },
    {
      name: 'Flutter - Predict Age',
      description:
        'Learning development of mobile applications with Flutter, and how to involve asynchronous calls',
      stack: ['Flutter', 'API/asynchronous'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      route: process.env.PUBLIC_URL + '/flutter',
    },
  ]
  
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ]
  
  const contact = {
    email: 'lazypenguin888@mail.com',
  }
  
  export { projects, skills, contact }
  