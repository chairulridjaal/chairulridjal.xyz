export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  status: 'Published' | 'Draft';
  image: string;
  imageAlt: string;
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
      code?: string;
    }[];
    conclusion: string;
  };
  author: {
    name: string;
    bio: string;
  };
  seo: {
    metaDescription: string;
    keywords: string[];
  };
}

// Helper function to create a URL slug from title
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Climate-Tech Solutions with Code",
    slug: "building-climate-tech-solutions-with-code",
    date: "2025-01-15",
    excerpt: "How I'm using technology to tackle climate challenges and create sustainable solutions for the future.",
    readTime: "5 min read",
    tags: ["climate-tech", "sustainability", "javascript"],
    status: "Published",
    image: "/assets/images/HerdSphere Logo_ Livestock Management Solution.png",
    imageAlt: "Climate technology and coding visualization",
    content: {
      intro: "Climate change is one of the most pressing challenges of our time, and as developers, we have a unique opportunity to be part of the solution. Through code, we can create tools that help monitor environmental changes, optimize energy consumption, and build sustainable systems that reduce our carbon footprint.",
      sections: [
        {
          title: "The Power of Data Visualization",
          content: "One of the most impactful ways developers can contribute to climate action is through data visualization. By making complex climate data accessible and understandable, we can help people make informed decisions about their environmental impact."
        },
        {
          title: "Building Efficient Applications",
          content: "Every line of code we write has an environmental impact. Optimizing our applications for performance doesn't just improve user experience—it also reduces energy consumption on servers and devices worldwide.",
          code: `// Example: Optimizing API calls to reduce server load
const useMemoizedData = (apiCall) => {
  return useMemo(() => {
    return apiCall();
  }, [apiCall]);
};

// Use efficient algorithms
const optimizedSort = (data) => {
  // QuickSort for better performance
  return data.sort((a, b) => a.value - b.value);
};`
        },
        {
          title: "Green Hosting and Infrastructure",
          content: "Choosing eco-friendly hosting providers and optimizing our deployment strategies can significantly reduce the carbon footprint of our applications. This includes using CDNs effectively, implementing proper caching strategies, and choosing data centers powered by renewable energy."
        },
        {
          title: "IoT and Environmental Monitoring",
          content: "Internet of Things (IoT) devices combined with smart software can help monitor air quality, water usage, energy consumption, and more. These systems provide real-time data that can drive immediate action and long-term policy decisions."
        }
      ],
      conclusion: "As developers, we're not just building software—we're shaping the future. By conscious coding practices, choosing sustainable technologies, and building tools that help others make environmentally friendly decisions, we can contribute to a more sustainable world. Every commit is a chance to make a positive impact."
    },
    author: {
      name: "Chairulridjal",
      bio: "Full-stack developer passionate about climate tech and sustainable software development."
    },
    seo: {
      metaDescription: "Learn how developers can contribute to climate action through efficient coding practices, green hosting, and building sustainable software solutions.",
      keywords: ["climate tech", "sustainable development", "green coding", "environmental programming", "eco-friendly software"]
    }
  },
  {
    id: 2,
    title: "My Journey into Full-Stack Development",
    slug: "my-journey-into-full-stack-development",
    date: "2025-01-10",
    excerpt: "From learning my first programming language to building complex web applications - here's my story.",
    readTime: "7 min read",
    tags: ["career", "web-development", "react"],
    status: "Published",
    image: "/assets/images/HerdSphere Logo_ Livestock Management Solution.png",
    imageAlt: "Full-stack development journey illustration",
    content: {
      intro: "From writing my first 'Hello World' program to building complex web applications, my journey into full-stack development has been filled with challenges, breakthroughs, and continuous learning. Here's how I navigated the world of modern web development.",
      sections: [
        {
          title: "The Beginning: HTML, CSS, and JavaScript",
          content: "Like many developers, I started with the holy trinity of web development. Learning HTML gave me structure, CSS brought beauty, and JavaScript added interactivity. These fundamentals remain crucial even as frameworks evolve."
        },
        {
          title: "Discovering React and Modern Frontend",
          content: "React revolutionized how I think about user interfaces. The component-based architecture and virtual DOM opened up new possibilities for creating dynamic, efficient applications.",
          code: `// My first React component - simple but powerful
function Welcome({ name }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}!</h1>
      <p>Welcome to the world of React.</p>
    </div>
  );
}

// Modern React with hooks
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
        },
        {
          title: "Backend Adventures with Node.js",
          content: "Moving to the backend with Node.js felt natural after mastering JavaScript. Building APIs, handling databases, and understanding server architecture completed my full-stack journey."
        },
        {
          title: "The DevOps Learning Curve",
          content: "Deployment, CI/CD, and cloud services were initially intimidating but became essential skills. Learning Docker, understanding cloud platforms, and automating deployments transformed how I ship applications."
        }
      ],
      conclusion: "Full-stack development is a journey, not a destination. Every project teaches something new, every bug is a learning opportunity, and every feature implemented is a step toward mastery. The key is to stay curious, keep building, and never stop learning."
    },
    author: {
      name: "Chairulridjal",
      bio: "Full-stack developer passionate about climate tech and sustainable software development."
    },
    seo: {
      metaDescription: "A personal journey from beginner to full-stack developer, covering frontend, backend, and DevOps technologies in modern web development.",
      keywords: ["full-stack development", "web development journey", "React", "Node.js", "career in tech", "learning programming"]
    }
  },
  {
    id: 3,
    title: "The Future of AI in Environmental Science",
    slug: "the-future-of-ai-in-environmental-science",
    date: "2025-01-05",
    excerpt: "Exploring how artificial intelligence can revolutionize environmental research and conservation efforts.",
    readTime: "6 min read",
    tags: ["AI", "environment", "machine-learning"],
    status: "Draft",
    image: "/assets/images/HerdSphere Logo_ Livestock Management Solution.png",
    imageAlt: "AI and environmental science concept",
    content: {
      intro: "Artificial Intelligence is transforming every industry, and environmental science is no exception. From climate modeling to species conservation, AI is opening new frontiers in our understanding and protection of the natural world.",
      sections: [
        {
          title: "Climate Modeling and Prediction",
          content: "AI algorithms can process vast amounts of climate data to create more accurate models and predictions, helping scientists and policymakers make informed decisions about climate action."
        },
        {
          title: "Wildlife Conservation",
          content: "Machine learning is being used to track endangered species, analyze migration patterns, and detect illegal activities like poaching through satellite imagery and camera traps."
        },
        {
          title: "Environmental Monitoring",
          content: "Smart sensors combined with AI can monitor air quality, water pollution, and ecosystem health in real-time, providing early warnings for environmental threats."
        }
      ],
      conclusion: "The intersection of AI and environmental science holds immense promise for addressing our planet's most pressing challenges. As technology continues to advance, we have the opportunity to create innovative solutions for a sustainable future."
    },
    author: {
      name: "Chairulridjal",
      bio: "Full-stack developer passionate about climate tech and sustainable software development."
    },
    seo: {
      metaDescription: "Discover how artificial intelligence is revolutionizing environmental science, from climate modeling to wildlife conservation and environmental monitoring.",
      keywords: ["AI environmental science", "machine learning climate", "AI conservation", "environmental technology", "smart environmental monitoring"]
    }
  }
];

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get all published posts
export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.status === 'Published');
};

// Helper function to get related posts (by tags)
export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.status === 'Published' &&
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
};
