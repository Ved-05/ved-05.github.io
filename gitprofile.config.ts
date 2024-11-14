// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ved-05', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Suved Ghanmode',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/suvedghanmode/',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    website: 'https://ved-05.github.io',
    email: 'suved.s.ghanmode@outlook.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'Object Oriented Programming (OOPs) & Design (OOD)',
    'Unit Testing (JUnit)',
    'SOLID',
    'Design Patterns',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Kubernetes',
    'Apache Kafka',
    'Apache Flink',
    'Apache Spark',
    'Akka',
    'Spring Boot',
    'Splunk',
    'Grafana',
    'Confluence',
    'JIRA'
  ],
  experiences: [
    {
      company: 'DREAM Lab, Indian Institute of Science',
      position: 'Project Associate',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'http://cds.iisc.ac.in/faculty/simmhan/',
    },
    {
      company: 'HERE Technologies',
      position: 'Software Engineer II',
      from: 'November 2021',
      to: 'July 2023',
      companyLink: 'http://here.com',
    },
    {
      company: 'GlobalLogic',
      position: 'Trainee -> Associate -> Software -> Senior Software Engineer',
      from: 'July 2019',
      to: 'October 2023',
      companyLink: 'http://globallogic.com',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Indian Institute of Science, Bangalore',
      degree: 'Masters (Research) - Computational & Data Sciences',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Government College of Engineering, Amravati',
      degree: 'Bachelor of Technology - Computer Science & Engineering',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Evaluating Strategies for Federated Graph Learning',
      conferenceName: '2023 IEEE 30th International Conference on High Performance Computing, Data and Analytics Workshop (HiPCW)',
      // journalName: 'Journal Name',
      authors: 'Pranjal Naman, Suved Ghanmode, Yogesh Simmham',
      link: 'https://www.computer.org/csdl/proceedings-article/hipcw/2023/837800a065/1WnrOX5H7hK',
      description:
        'Rapid advancements in the field of Graph Neural Networks (GNNs) have led to their high effectiveness in learning meaningful representations from graph data structures. Despite these advances, there are cases where graph data cannot be collected and stored centrally, owing primarily to privacy concerns. Federated Learning (FL) has emerged as a promising machine learning paradigm for distributed training of a shared model on decentralized data. This exploits parallelism and ensures the privacy of the local training data on each client. In this extended abstract, we examine different communication and architectural patterns for FL when training GNNs and report preliminary performance comparisons for these strategies over GNN datasets trained on a cluster.',
    },
    {
      title: 'TARIS: Scalable Incremental Processing of Time-Respecting Algorithms on Streaming Graphs',
      // conferenceName: 'Conference Name',
      journalName: 'IEEE Transactions on Parallel and Distributed Systems',
      authors: 'Ruchi Bhoot, Suved Ghanmode, Yogesh Simmham',
      link: 'https://www.computer.org/csdl/journal/td/2024/12/10700690/20Fh335TJMQ',
      description:
        'Temporal graphs change with time and have a lifespan associated with each vertex and edge. These graphs are suitable to process time-respecting algorithms where the traversed edges must have monotonic timestamps. Interval-centric Computing Model (ICM) is a distributed programming abstraction to design such temporal algorithms. There has been little work on supporting time-respecting algorithms at large scales for streaming graphs, which are updated continuously at high rates (Millions/s), such as in financial and social networks. In this article, we extend the windowed-variant of ICM for incremental computing over streaming graph updates. We formalize the properties of temporal graph algorithms and prove that our model of incremental computing over streaming updates is equivalent to batch execution of ICM. We design TARIS, a novel distributed graph platform that implements these incremental computing features. We use efficient data structures to reduce memory access and enhance locality during graph updates. We also propose scheduling strategies to interleave updates with computing, and streaming strategies to adapt the execution window for incremental computing to the variable input rates. Our detailed and rigorous evaluation of temporal algorithms on large-scale graphs with up to 2B edges show that TARIS out-performs contemporary baselines, Tink and Gradoop, by 3–4 orders of magnitude, and handles a high input rate of 83k–587M Mutations/s with latencies in the order of seconds–minutes.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
