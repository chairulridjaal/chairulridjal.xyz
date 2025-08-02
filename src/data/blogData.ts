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
      image?: string;
      imageAlt?: string;
      imageCaption?: string;
      contentParts?: {
        type: 'text' | 'image' | 'code';
        content: string;
        image?: string;
        imageAlt?: string;
        imageCaption?: string;
      }[];
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
    title: "From Sochi With Purpose — My World Youth Festival 2024 Journey",
    slug: "world-youth-festival-2024-sochi-journey",
    date: "2024-03-15",
    excerpt: "What it’s like to join 20,000+ young people in Russia for a week of cultural exchange, energy dialogue, and global youth collaboration.",
    readTime: "9 min read",
    tags: ["world-youth-festival", "sochi", "youth-leadership", "culture", "renewable-energy"],
    status: "Published",
    image: "/assets/images/blog/WYF-2024.jpg",
    imageAlt: "World Youth Festival 2024 in Sochi",
    content: {
      intro: "Back in March 2024, I found myself halfway across the world — in Sochi, Russia, standing among thousands of young people from every continent at the World Youth Festival. It was surreal. For the first time, I wasn’t just reading about international collaboration — I was living it. And through this once-in-a-lifetime experience, I discovered new perspectives on culture, leadership, and the global urgency for clean energy.",
      sections: [
        {
          title: "Landing in Sochi: A Collision of Cultures",
          content: "From the moment I arrived, I knew this wasn’t just another conference. The streets were alive with parades, traditional dress, flags, music, and chants in dozens of languages. Delegates from more than 180 countries had come together — artists, scientists, entrepreneurs, and activists, all united by a belief in youth potential. It felt like a United Nations of pure vibes.\n\nAs an Indonesian delegate, I was proud to carry our culture into that space. And I quickly realized how powerful shared cultural experiences can be — people connected over dances, food, jokes, even misunderstandings. We weren’t there to be perfect; we were there to learn from each other."
        },
        {
          title: "My Mission: Energy, Justice, and Southeast Asia",
          content: "I joined several forums on sustainability and innovation, where I shared about Indonesia’s massive untapped solar energy potential — over **1,134 GW**, yet still underutilized. I talked about the community solar models we’re piloting back home, and how youth-led innovation is helping bridge energy access gaps.\n\nI remember someone from South Africa asking me, 'How do you deal with grid failures and overcapacity at the same time?' That one question led to a two-hour discussion between six of us — from the Philippines, Kenya, Mexico, and Kazakhstan — comparing how outdated infrastructure holds us all back from renewables. That’s when I really felt the power of this festival: it wasn’t about showing off achievements, but about honestly comparing struggles."
        },
        {
          title: "Energy and Culture Are Not Separate",
          content: "One of the most eye-opening moments came during a roundtable when someone said, 'The energy transition is not just technological. It’s cultural.'\n\nThat hit me hard. Because in Indonesia, especially in rural areas, the energy conversation is not just about watts and kilowatts — it’s about trust, tradition, ownership. If we’re going to build a renewable future, it has to be one that respects and includes local knowledge and values.\n\nSo I started weaving that message into my conversations: that clean energy isn’t just clean *technically* — it has to be *socially* clean too. Fair. Equitable. Community-powered."
        },
        {
          title: "Friendships That Fuel the Future",
          content: "Outside of sessions, I met people who genuinely shifted how I see the world. I traded pins with someone from Armenia. I learned a traditional song from Nigeria. I stood in a group of five people from five continents, and we just talked — not about achievements or politics, but about how it feels to be young and hopeful and scared at the same time.\n\nThose late-night talks by the Black Sea, the spontaneous dance-offs, the endless group photos — they reminded me that global collaboration isn’t always formal. Sometimes, it starts with laughter and shared humanity."
        },
        {
          title: "Returning Home With New Purpose",
          content: "After the festival, I didn’t just return to Indonesia — I came back with a global mindset. I came back with new collaborators, new questions, and a deeper sense of what kind of leader I want to be. I want to build technology that brings people together. I want to help design energy systems that honor local voices. And I want to keep amplifying the message that young people — from anywhere — *can* and *should* lead.\n\nThe world feels a lot smaller now, and a lot more connected. And that’s exactly what gives me hope."
        }
      ],
      conclusion: "Sochi was more than a place. It was a moment in time where I felt like the whole world paused to listen to its youth. And we had a lot to say. We’re not waiting to be asked anymore — we’re already building, questioning, and leading. I’m proud to be part of that generation.",
    },
    author: {
      name: "Chairulridjal",
      bio: "Youth delegate and full-stack developer passionate about sustainability, cultural inclusion, and clean energy innovation."
    },
    seo: {
      metaDescription: "An Indonesian delegate reflects on his journey to the 2024 World Youth Festival in Sochi — exploring culture, collaboration, and climate justice.",
      keywords: ["World Youth Festival", "Sochi 2024", "youth leadership", "renewable energy", "Indonesia climate", "international collaboration"]
    }
  },
  {
    id: 2,
    title: "How HYLI 2024 in Bali Taught Me to Lead for Clean Energy",
    slug: "hitachi-young-leaders-initiative-2024-bali",
    date: "2024-07-29",
    excerpt: "Inside the Hitachi Young Leaders Initiative — where youth from across Asia gathered in Bali to propose real solutions for clean energy and sustainable cities.",
    readTime: "8 min read",
    tags: ["clean-energy", "HYLI2024", "leadership", "southeast-asia", "youth"],
    status: "Published",
    image: "/assets/images/blog/HYLI-2024.jpg",
    imageAlt: "Delegates of HYLI 2024 in Bali discussing SDG 7 initiatives",
    content: {
      intro: "I still remember the subject line: “Congratulations – you’ve been selected.” I had been chosen to represent Indonesia at the **Hitachi Young Leaders Initiative (HYLI) 2024** in Bali — a regional program that brings together university students from across Asia to tackle real-world challenges. Our focus? **Affordable and Clean Energy (SDG 7)**.\n\nAt the time, I knew the basics — energy poverty, renewable targets, climate urgency. But HYLI made it all feel real. It wasn’t about theory. It was about solving the region’s biggest energy problems, and doing it *together*.",
      sections: [
        {
          title: "Cross-Border Conversations, One Clean Energy Mission",
          content: "From day one, it was clear: everyone came to work. We were grouped into multicultural teams and given a serious challenge — design a clean energy solution for aging, overcrowded Asian cities struggling with energy access, grid inefficiencies, and rising demand.\n\nI was placed in a team with delegates from Japan, the Philippines, Malaysia, and Singapore. It was a clash of perspectives at first, but soon became a fusion. We talked through everything: regulatory gaps, cost of solar panels, cultural resistance, and how to bring people into the energy conversation."
        },
        {
          title: "Our Solution: Community-Driven, Tech-Supported",
          content: "Eventually, we proposed a **three-pronged model**:\n1. **Community-Based Solar Projects** — urban co-ownership of solar panels on schools, rooftops, and mosques.\n2. **Smart Energy Management Systems (SEMS)** — real-time energy usage monitoring to ease pressure on local grids.\n3. **Grid Reconductoring** — upgrading transmission lines in older neighborhoods to reduce energy loss.\n\nIt wasn’t just slides and buzzwords. We had engineers from Hitachi and experts from the energy sector reviewing our ideas. I’ll never forget how one of them told us, 'This is something that could actually work.'"
        },
        {
          title: "Lessons in Leadership (and Letting Go)",
          content: "As someone used to leading projects, HYLI taught me something new: how to lead *without control*. With a diverse team, leadership became less about giving direction and more about listening, translating, and building consensus.\n\nWe had disagreements — should we focus more on community organizing or tech innovation? But we always circled back to one question: what would actually help people the most?\n\nAnd as we refined our proposal, I felt proud not just of the solution, but of how we reached it. Together."
        },
        {
          title: "Beyond the Panel Discussions",
          content: "One thing that made HYLI stand out was the downtime. In between forums, we’d grab coffee and talk about anything: how energy debates are unfolding in Japan, how Singapore balances policy and technology, how Indonesia has 17,000 islands and 1,134 GW of solar potential — and yet still struggles with access.\n\nIt was in these informal chats that the magic happened. Because those conversations don’t end when the conference does. They stick with you. They shape how you think."
        },
        {
          title: "Why HYLI Changed Me",
          content: "By the time we delivered our final pitch in front of regional leaders and industry guests, I wasn’t nervous anymore. I was excited.\n\nOur project didn’t just represent a technical plan — it represented a new way of thinking: youth-led, community-centered, future-facing. That’s something I want to keep carrying forward — into my campus, into my community work, into the systems I help build.\n\nAnd I think the beach helped too. Bali was beautiful — but what I’ll remember more is the room full of youth who came not just to learn, but to lead."
        }
      ],
      conclusion: "HYLI 2024 didn’t just teach me about energy systems. It taught me that the best solutions come from collaboration — across countries, disciplines, and experiences. I left Bali with new friends, new ideas, and a much stronger belief that the clean energy transition must be **youth-powered**.",
    },
    author: {
      name: "Chairulridjal",
      bio: "Full-stack developer, youth climate advocate, and Indonesian delegate to HYLI 2024.",
    },
    seo: {
      metaDescription: "An Indonesian student shares his experience at the Hitachi Young Leaders Initiative 2024 in Bali, where Asian youth collaborated on clean energy solutions.",
      keywords: ["HYLI 2024", "Bali", "clean energy", "SDG 7", "Indonesia renewable energy", "youth leadership in Asia"]
    }
  },
  {
    id: 3,
    title: "What Brazil Taught Me About People-Powered Energy",
    slug: "renew-our-power-2025-brazil",
    date: "2025-04-20",
    excerpt: "From the Amazon to West Java — what I learned at the Renew Our Power Gathering in Brazil about justice, ownership, and building solar from the ground up.",
    readTime: "8 min read",
    tags: ["renewable-energy", "climate-justice", "community-solar", "brazil", "youth"],
    status: "Published",
    image: "/assets/images/blog/ROP-2025.jpg",
    imageAlt: "Youth delegates at the Renew Our Power Gathering 2025 in Brazil",
    content: {
      intro: "In April 2025, I flew across the world to join the **Renew Our Power (ROP) Gathering** — a global training for youth energy leaders held deep in Brazil’s Amazon region. But it wasn’t a flashy summit. There were no ballrooms or hotel lobbies. Just open skies, wooden benches, local meals, and some of the most committed climate activists I’ve ever met.\n\nIt felt raw, honest, and deeply necessary. Because at ROP, energy isn’t just a technical issue. It’s about power — literally and politically. Who controls it, who benefits, and who’s still being left behind.",
      sections: [
        {
          title: "Relearning What Energy Means",
          content: "I came in thinking I knew energy. I’d studied power grids, solar PV tech, and policy frameworks. But in Brazil, I started to understand the emotional side of energy: how much it shapes dignity, autonomy, and community identity.\n\nWe listened to youth leaders from remote Amazonian villages talk about what it felt like to finally power their homes with community-built solar systems — no more candles, no more diesel fumes. That kind of story hits different when it’s not in a report, but in someone’s voice, sitting right across from you."
        },
        {
          title: "Workshops Under Trees, Dialogues Without Suits",
          content: "Everything about ROP was stripped of formality. We held workshops on circular energy economies sitting on plastic chairs. We debated solar co-ops vs. mini-grids on picnic mats. Our facilitators weren’t distant experts — they were youth our age who had already built power systems for their communities.\n\nIt made me ask myself: why can’t we do this in Indonesia?\n\nBecause even though Brazil and Indonesia are half a world apart, we share a lot: rural energy injustice, urban overconsumption, and a government-centric energy system that often overlooks the people it’s supposed to serve."
        },
        {
          title: "Energy is Power — In Every Sense",
          content: "One session that stuck with me focused on energy governance. A Bolivian activist said, 'We don’t want to just use clean energy. We want to *own* it.' That was the moment I started thinking beyond solar panels. Community ownership, participatory design, and just energy transitions became my new obsessions.\n\nBecause a solar panel can be green on paper but unjust in practice — if it displaces communities, ignores local culture, or benefits only the powerful.\n\nI realized my work isn’t just about electrifying buildings. It’s about shifting power structures, too."
        },
        {
          title: "New Friends, New Frameworks",
          content: "My favorite part? The people. I met youth organizers from Colombia, Haiti, the Caribbean, and across Latin America. We shared what we were working on, traded strategies, and laughed a lot.\n\nI told them about Indonesia’s untapped solar potential and the project I was developing for schools in West Java. They helped me think through ways to make it more community-led — how to train students, involve parents, and make the tech less intimidating.\n\nThose conversations redefined collaboration for me. It wasn’t about LinkedIn connections — it was about solidarity."
        },
        {
          title: "Bringing the Lessons Home",
          content: "Since coming back, I’ve been working on adapting the ideas I learned in Brazil to local schools in Cianjur and Bogor. We’re designing solar-powered water harvesting and irrigation systems — but also creating ownership models where students, teachers, and villagers contribute and benefit together.\n\nROP didn’t give me a plug-and-play solution. It gave me a way of thinking: **energy as liberation**. That mindset stays with me every time I open Figma to wireframe a dashboard or write a grant proposal.\n\nBecause the most powerful systems are the ones that empower."
        }
      ],
      conclusion: "Brazil taught me that the clean energy movement doesn’t need more saviors — it needs collaborators. People willing to listen, share, and build from the ground up. I went to the Amazon thinking about kilowatts. I came home thinking about justice.\n\nThat shift changed everything.",
    },
    author: {
      name: "Chairulridjal",
      bio: "Youth solar advocate and Indonesian delegate to the Renew Our Power Gathering 2025 in Brazil.",
    },
    seo: {
      metaDescription: "Chairulridjal reflects on his time at the Renew Our Power 2025 Gathering in Brazil — exploring energy justice, grassroots solutions, and youth-powered collaboration.",
      keywords: ["Renew Our Power", "community solar", "energy justice", "Brazil", "youth leadership", "Indonesia energy access"]
    }
  },
  {
    id: 4,
    title: "Leading IEEE IPB: What It’s Really Like to Run a Student Tech Org",
    slug: "ieee-ipb-president-experience",
    date: "2025-07-01",
    excerpt: "Behind the title: what I’ve learned as President of IEEE Student Branch IPB University — from managing people to sparking innovation to staying human.",
    readTime: "7 min read",
    tags: ["ieee", "student-leadership", "organization", "tech-community", "ipb-university"],
    status: "Published",
    image: "/assets/images/blog/IEEE-2025.JPEG",
    imageAlt: "IEEE IPB Student Branch President leading a discussion",
    content: {
      intro: "If you had told me a few years ago that I’d be leading a campus tech organization — with 60+ members, multiple divisions, industry programs, and an actual impact strategy — I probably would’ve laughed.\n\nBut here I am in 2025, serving as President of **IEEE IPB Student Branch**, trying to turn our little community into a hub of tech and purpose.\n\nIt’s been challenging, often chaotic, and surprisingly meaningful.",
      sections: [
        {
          title: "Not Just Events and Logos",
          content: "When people think of student orgs, they usually imagine webinars and workshops. And sure, we do that — but leading IEEE is more than planning events.\n\nIt’s about creating a **vision**. For me, that vision is simple: tech for impact. Whether we’re building mini projects or inviting speakers, I want us to always ask, _how does this help people?_ That’s where our 2025 theme comes in — **'Beyond Tech. Towards Impact.'**"
        },
        {
          title: "From Techies to Team Players",
          content: "One of my biggest lessons has been learning to work with — and support — very different people. Some are introverted coders. Some are event pros. Some just joined to learn something new.\n\nAs president, I’ve learned to balance structure and creativity. Weekly check-ins are essential, but so are moments where I just ask, 'Hey, how are you doing?' Because burnout is real, and so is the pressure students feel.\n\nLeadership, I’m finding, is less about charisma and more about **consistency and care**."
        },
        {
          title: "Tech for the SDGs",
          content: "One of our core programs this year is **Tech for Humanity**, a biweekly knowledge series where we explore how technology can support the **Sustainable Development Goals (SDGs)**. We’ve done sessions on AI for education (SDG 4), precision agriculture (SDG 2), and of course — clean energy (SDG 7).\n\nI love seeing members connect the dots between what they’re learning in class and what’s happening in the world. It’s the kind of perspective I wish I had earlier in my studies."
        },
        {
          title: "ComVIEEEx and What We’re Building",
          content: "We also launched **ComVIEEEx** — our first-ever company visit program. This August, we’re bringing 50+ students into real-world tech environments, from startups to power plants. It’s part exposure, part career preparation, part relationship-building.\n\nBecause IEEE shouldn’t just be a campus brand. It should be a bridge — between students and the industries they’ll shape one day."
        },
        {
          title: "What It’s Teaching Me",
          content: "I used to think technical skill was everything. Now, I realize people skills are just as crucial. Listening, asking good questions, managing timelines, writing proposals, resolving tension — I’ve had to learn it all, often on the fly.\n\nSome days I still get imposter syndrome. But then I look back at how far the team has come — the momentum, the collaboration, the small wins — and I remind myself: you don’t have to be the smartest to lead. You just have to show up, care, and keep learning."
        }
      ],
      conclusion: "Leading IEEE IPB has been one of the most exhausting and rewarding experiences I’ve ever had. And we’re still just getting started.\n\nThis year is our blueprint year — a foundation for future members to build on. My hope is that whoever takes over next will continue what we’ve started: not just advancing technology, but anchoring it in **purpose, people, and possibility.**",
    },
    author: {
      name: "Chairulridjal",
      bio: "President of IEEE Student Branch IPB University and a believer in technology that serves people.",
    },
    seo: {
      metaDescription: "Chairulridjal shares what it's like leading the IEEE IPB Student Branch — from running projects and building teams to using tech for the SDGs.",
      keywords: ["IEEE IPB", "student leadership", "tech organization", "SDGs", "campus innovation", "engineering student life"]
    }
  },
  {
    id: 5,
    title: "Why I Keep Coming Back to Renewable Energy",
    slug: "why-renewable-energy-matters-to-me",
    date: "2025-08-01",
    excerpt: "From student projects to global gatherings, renewable energy has always been at the center. Here’s why I care, and where I think we’re headed.",
    readTime: "7 min read",
    tags: ["renewable-energy", "climate", "sustainability", "solar", "personal-reflection"],
    status: "Published",
    image: "/assets/images/blog/RE-2025.JPG",
    imageAlt: "Illustration of solar panels and youth collaboration",
    content: {
      intro: "People sometimes ask me why I keep talking about renewable energy. Why I keep joining events, building clean energy projects, or bringing it up in conversations that aren’t even about energy.\n\nI used to think it was just about climate. And yes — the climate crisis is real and terrifying. But for me, it’s also about **possibility**. About designing a world where power is clean, distributed, fair — and in the hands of more people.",
      sections: [
        {
          title: "It Started With Questions",
          content: "Growing up in Indonesia, I always wondered why some places had unreliable electricity while others were lit up all night. It didn’t seem fair.\n\nLater, when I learned how much sunlight Indonesia gets — and how little solar we actually use — it honestly shocked me. **1,134 GW** of solar potential, and we’re barely scratching the surface?\n\nThat disconnect lit something in me. I wanted to understand the system. And maybe, find ways to fix it."
        },
        {
          title: "From Theory to Action",
          content: "Since then, I’ve tried to bring renewable energy into every part of my work. In Bali, at HYLI, I helped propose urban solar-sharing systems. In Brazil, I learned about energy justice from Amazonian youth building their own microgrids.\n\nAnd back home in Cianjur, I’m now designing a school project that uses **solar-powered rainwater harvesting and irrigation**, with students involved at every step.\n\nEach experience taught me something new: the tech matters, but the **people** matter more. A project only works if the community trusts it, understands it, and owns it."
        },
        {
          title: "It’s More Than Just Solar",
          content: "Renewables aren’t just about electricity — they’re about systems. About **rethinking how we live**, how we build, how we distribute resources.\n\nI’ve become really interested in questions like: How can solar systems support farming? What happens when schools generate their own power? What does a youth-owned energy co-op look like?\n\nTo me, renewables represent a shift — not just from fossil fuels, but from centralized power to local resilience. That excites me more than any wattage chart ever could."
        },
        {
          title: "The Role I Want to Play",
          content: "I’m not trying to be the smartest engineer in the room. I’m trying to be the kind of builder who **listens first**, codes with purpose, and designs with people in mind.\n\nI want to contribute to better solar tech — panels that are more efficient, affordable, and adaptable to Indonesia’s terrain. I want to help bring down costs and raise awareness. I want to mentor younger students who care but don’t know where to start.\n\nAnd I want to keep writing and sharing — because stories move people, and people move systems."
        }
      ],
      conclusion: "Renewable energy isn’t a trend to me. It’s a path — one I keep choosing because it makes sense, and because it aligns with the world I want to help build.\n\nCleaner, yes. But also fairer, freer, and more community-driven.\n\nWe’re not just transitioning our energy. We’re transforming our future. And I want to be part of that — from Java to Brazil to anywhere in between.",
    },
    author: {
      name: "Chairulridjal",
      bio: "Tech builder and clean energy advocate passionate about solar innovation and youth-powered solutions.",
    },
    seo: {
      metaDescription: "Chairulridjal shares why renewable energy drives everything he does — from student projects to global gatherings — and what the future of clean energy could look like.",
      keywords: ["renewable energy", "solar", "climate", "clean technology", "Indonesia energy future", "personal energy journey"]
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
