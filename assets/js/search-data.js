// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-weaviate-starting-guide",
        
          title: "Weaviate Starting Guide",
        
        description: "A practical step-by-step tutorial on building a Retrieval-Augmented Generation (RAG) pipeline from scratch using Weaviate Vector Database, Python, and Google Gemini.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/WeaviateSG/intro-welcome.html";
          
        },
      },{id: "post-functional-and-concurrent-programming-principles-lecture-notes",
        
          title: "Functional and Concurrent Programming Principles [Lecture Notes]",
        
        description: "Lecture notes from an academic course about Functional and Concurrent Programming Principles. (mdbook on my github)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/fcp-principles/disclaimer.html";
          
        },
      },{id: "news-enrolled-in-a-master-s-degree-course-in-computer-science",
          title: 'Enrolled in a Master’s degree course in Computer Science.',
          description: "",
          section: "News",},{id: "news-received-bachelor-s-degree-in-computer-science-at-university-of-catania-grade-110-110-cum-laude",
          title: '🎓 Received Bachelor’s degree in Computer Science at University of Catania Grade: 110/110...',
          description: "",
          section: "News",},{id: "news-published-our-article-on-boosting-sampled-string-matching-with-fake-samples-in-12th-international-conference-on-fun-with-algorithms-fun-2024",
          title: 'Published our article on Boosting Sampled String Matching with Fake Samples in 12th...',
          description: "",
          section: "News",},{id: "news-i-recently-took-on-the-role-of-a-tutor-in-the-course-fondamenti-di-informatica-at-university-of-catania",
          title: 'I recently took on the role of a tutor in the course “Fondamenti...',
          description: "",
          section: "News",},{id: "news-published-our-article-on-benchmarking-gans-diffusion-models-and-flow-matching-for-t1w-to-t2w-mri-translation-in-cvgmmi-workshop-iciap-2025",
          title: 'Published our article on Benchmarking GANs, Diffusion Models, and Flow Matching for T1w-to-T2w...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%61%6D%6F%73%63%68%65%74%74%6F%39%39@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AndreaMoschetto", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrea-moschetto", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
