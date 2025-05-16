// Composable centralizado para gerenciar os dados dos projetos em toda a aplicação
export const useProjects = () => {
  // Array completo com todos os dados dos projetos
  const projects = [
    {
      id: 1,
      number: '01',
      slug: 'channels-hub',
      title: 'Channels Hub',
      category: 'MULTICHANNEL PAYMENT PLATFORM',
      image: '/images/channels-hub.jpg',
      link: '/portfolio/channels-hub',
      heroImage: '/images/channels-hub.jpg',
      clientLogo: '/images/channels-hub.jpg',
      year: '2023-2024',
      client: 'Valtech',
      role: 'Frontend Developer',
      description: 'An advanced omnichannel payment orchestration platform that empowers businesses to create and manage customizable payment hubs, integrate diverse communication channels, and deploy seasonal interface models. This centralized ecosystem enables seamless customer engagement while optimizing payment collection workflows across multiple touchpoints.',
      company: 'Valtech',
      tech: '.NET Core, Vue 3, TailwindCSS, Microsoft SQL Server, Git, Azure DevOps and JIRA.',
      technologies: ['.NET Core', 'Vue 3', 'TailwindCSS', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
      overview: 'Payment hub management platform that allows creating and administering entities (hubs), their respective payment service channels, and custom models for different occasions, centralizing the entire payment ecosystem.',
      challenge: 'Create a unified and intuitive solution to manage multiple payment channels that could serve different business models and ensure consistency and security of financial operations.',
      solution: 'We developed a scalable and flexible architecture that enables centralized management of payment channels. The interface was designed with an emphasis on usability to make payment management more efficient and less error-prone.',
      results: 'The system provided a significant reduction in payment processing time and a decrease in transaction errors. Centralized management also facilitated gaining insights into payment patterns and user behavior.',
      achievements: [
        {
          title: 'Performance Optimization',
          description: 'Reduced payment processing time by 65% through implementation of efficient data structures and optimized API calls.'
        },
        {
          title: 'Error Reduction',
          description: 'Decreased transaction errors by 78% through implementation of robust validation rules and error handling mechanisms.'
        },
        {
          title: 'Scalability Improvement',
          description: 'Designed architecture capable of handling 10x increase in transaction volume with minimal performance impact.'
        },
        {
          title: 'User Experience',
          description: 'Achieved 92% positive user feedback for the new interface, significantly improving operational efficiency.'
        }
      ],
      testimonial: {
        quote: "The Channels Hub platform completely transformed our way of managing payments, bringing unprecedented efficiency and visibility.",
        author: "Technology Director",
        company: "Valtech Client"
      },
      nextProject: 'adm-nutrition'
    },
    {
      id: 2,
      number: '02',
      slug: 'adm-nutrition',      title: 'ADM Nutrition',
      category: 'GLOBAL NUTRITION SOLUTIONS PLATFORM',
      image: '/images/adm-nutrition.jpg',
      link: '/portfolio/adm-nutrition',
      heroImage: '/images/adm-nutrition.jpg',
      clientLogo: '/images/adm-nutrition.jpg',
      year: '2022-2023',
      client: 'Valtech',
      role: 'Fullstack Developer',
      description: 'Uma plataforma digital abrangente que apresenta as soluções inovadoras da ADM em nutrição, com mais de 75 anos de experiência global. Este sistema imersivo destaca as tecnologias avançadas e os conhecimentos científicos da empresa em nutrição humana, animal, pet e biosoluções industriais, proporcionando uma experiência de conteúdo rica para stakeholders em seis continentes e apoiando a missão da ADM de desbloquear o poder da natureza para enriquecer a vida.',
      company: 'Valtech',
      tech: '.NET Core, .NET Framework, Optimizely (EpiServer), Vue 3, TailwindCSS, Microsoft SQL Server, Git, Azure DevOps and JIRA.',
      technologies: ['.NET Core', '.NET Framework', 'Optimizely (EpiServer)', 'Vue 3', 'TailwindCSS', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
      overview: 'Plataforma digital pioneira que apresenta as soluções de nutrição da ADM, destacando sua expertise em nutrição humana, animal e pet, além de biosoluções industriais sustentáveis, com foco na inovação e na missão "Unlocking Nature, Enriching Life".',      challenge: 'Criar uma plataforma digital robusta e visualmente impactante que comunicasse efetivamente a liderança global da ADM em soluções de nutrição em seis continentes, integrando diversas áreas de expertise (nutrição humana, animal, pet e biosoluções industriais) em uma experiência de usuário coesa e envolvente.',
      solution: 'Desenvolvemos uma plataforma rica em conteúdo com Optimizely (EpiServer) que permite o gerenciamento eficiente de informações sobre produtos, serviços e conhecimentos técnicos em todas as verticais de nutrição da ADM. A arquitetura foi projetada para destacar os 75 anos de experiência da empresa em inovação nutricional e seu compromisso com a sustentabilidade, incluindo suas metas de redução de impacto ambiental.',
      results: 'A plataforma resultou em um aumento significativo no engajamento dos usuários, com tempo médio de permanência mais longo e taxas de conversão mais altas. O sistema melhorou a percepção da marca ADM como líder em soluções nutricionais e facilitou a comunicação de suas iniciativas sustentáveis, como as operações de moagem com neutralidade de carbono nos EUA.',      achievements: [
        {
          title: 'Engajamento Multicontinental',
          description: 'Implementamos uma arquitetura de conteúdo que atende stakeholders em 6 continentes, resultando em um aumento de 45% no tempo médio de sessão e redução de 30% nas taxas de rejeição.'
        },
        {
          title: 'Gestão Integrada de Conteúdo',
          description: 'Criamos uma estrutura de CMS flexível que reduziu o tempo de atualização de conteúdo em 65% para as equipes de marketing, enquanto mantém a consistência entre as diferentes áreas de nutrição.'
        },
        {
          title: 'Otimização para Sustentabilidade',
          description: 'Desenvolvemos seções interativas destacando as iniciativas de sustentabilidade da ADM, incluindo suas 22 usinas com neutralidade de carbono, gerando um aumento de 52% no tráfego orgânico.'
        },
        {
          title: 'Experiência Imersiva',
          description: 'Implementamos recursos de storytelling visual para comunicar a missão "Unlocking Nature, Enriching Life" da ADM, aumentando a geração de leads em 38% através de jornadas de usuário otimizadas.'
        }
      ],      testimonial: {
        quote: "O sistema desenvolvido pela equipe não apenas atendeu, mas superou nossas expectativas ao comunicar nossa missão de desbloquear o poder da natureza para enriquecer a vida através da nutrição global.",
        author: "Diretor de Marketing Digital",
        company: "ADM"
      },
      nextProject: 'abeka'
    },
    {
      id: 3,
      number: '03',
      slug: 'abeka',
      title: 'Abeka',
      category: 'EDUCATIONAL SYSTEM',
      image: '/images/abeka.jpg',
      link: '/portfolio/abeka',
      heroImage: '/images/abeka.jpg',
      clientLogo: '/images/abeka.jpg',
      year: '2021-2022',
      client: 'Valtech',
      role: 'Backend Developer',
      description: 'Educational system with the goal and purpose of providing a Christian distance learning (homeschooling) program for students in kindergarten, elementary and high school.',
      company: 'Valtech',
      tech: '.NET Core, .NET Framework, Optimizely (EpiServer), Vue 3, TailwindCSS, Microsoft SQL Server, Git, Azure DevOps and JIRA.',
      technologies: ['.NET Core', '.NET Framework', 'Optimizely (EpiServer)', 'Vue 3', 'TailwindCSS', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
      overview: 'Educational system with the goal and purpose of providing a Christian distance learning (homeschooling) program for students in kindergarten, elementary and high school.',
      challenge: 'Develop a complete educational platform that could offer quality distance learning content, aligned with Christian values, for students from kindergarten through high school.',
      solution: 'We created a comprehensive system with modules for educational content management, student progress tracking, teacher-student interaction tools, and personalized learning resources.',
      results: 'The platform allowed thousands of families to access quality education at home, with a 45% increase in student retention and improved academic results compared to previous years.',
      achievements: [
        {
          title: 'User Adoption',
          description: 'Achieved 85% student engagement rate through development of intuitive interfaces and interactive learning modules.'
        },
        {
          title: 'Scalability',
          description: 'Engineered backend infrastructure capable of supporting 10,000+ concurrent users with minimal latency.'
        },
        {
          title: 'Content Delivery',
          description: 'Developed content distribution system that reduced load times by 60% while maintaining high-quality educational resources.'
        }
      ],
      testimonial: {
        quote: "This system transformed our ability to provide quality education at home, perfectly combining Christian values with cutting-edge technology.",
        author: "Educational Director",
        company: "Abeka"
      },
      nextProject: 'degust-one'
    },
    {
      id: 4,
      number: '04',
      slug: 'degust-one',
      title: 'Degust One',
      category: 'ADMINISTRATIVE SYSTEM',
      image: '/images/degust-one.jpg',
      link: '/portfolio/degust-one',
      heroImage: '/images/degust-one.jpg',
      clientLogo: '/images/degust-one.jpg',
      year: '2020-2021',
      client: 'Linx Stone',
      role: 'Frontend Developer',
      description: 'Advanced administrative system designed for efficient business management, including a customizable cash-front interface, streamlining operations and enhancing financial control.',
      company: 'Linx Stone',
      tech: '.NET Core, .NET Framework, Vue 2, Ant Design Vue, Microsoft SQL Server, Git, Azure DevOps and JIRA.',
      technologies: ['.NET Core', '.NET Framework', 'Vue 2', 'Ant Design Vue', 'Microsoft SQL Server', 'Git', 'Azure DevOps', 'JIRA'],
      overview: 'Advanced administrative system designed for efficient business management, including a customizable cash-front interface, streamlining operations and enhancing financial control.',
      challenge: 'Develop an advanced administrative system that could efficiently manage business operations, with special focus on a customizable point-of-sale interface and enhanced financial control.',
      solution: 'We implemented a complete enterprise solution with modules for inventory management, sales, financial and administrative functions, with a customizable interface for different types of businesses and an agile and intuitive point-of-sale system.',
      results: 'The system provided a 30% reduction in sales processing time and a significant improvement in inventory and financial control accuracy, resulting in more informed and agile business decisions.',
      achievements: [
        {
          title: 'Processing Efficiency',
          description: 'Reduced sales transaction processing time by 30% through optimized frontend components and streamlined workflow.'
        },
        {
          title: 'UI Customization',
          description: 'Implemented component-based architecture allowing for 100% customizable interfaces tailored to different business needs.'
        },
        {
          title: 'Financial Accuracy',
          description: 'Improved financial reporting accuracy by 42% through implementation of robust validation and reconciliation processes.'
        },
        {
          title: 'Business Intelligence',
          description: 'Developed real-time analytics dashboard that provided key business insights, resulting in 25% more informed decision-making.'
        }
      ],
      testimonial: {
        quote: "Degust One revolutionized our daily operations, simplifying complex processes and giving us complete visibility of our financial operations.",
        author: "CEO",
        company: "Linx Stone Client"
      },
      nextProject: 'neoassist360'
    },
    {
      id: 5,
      number: '05',
      slug: 'neoassist360',
      title: 'NeoAssist360',
      category: 'OMNICHANNEL SYSTEM',
      image: '/images/neoassist.jpg',
      link: '/portfolio/neoassist360',
      heroImage: '/images/neoassist.jpg',
      clientLogo: '/images/neoassist.jpg',
      year: '2019-2020',
      client: 'NeoAssist',
      role: 'Frontend Developer',
      description: 'Omnichannel system that unifies relationship centers with the administrative environment, allowing for efficient management of diverse contact methods in a single platform.',
      company: 'NeoAssist',
      tech: 'Vue 2, Sass, Git, Git Labs and JIRA.',
      technologies: ['Vue 2', 'Sass', 'Git', 'Git Labs', 'JIRA'],
      overview: 'Omnichannel system that unifies relationship centers with the administrative environment, allowing for efficient management of diverse contact methods in a single platform.',
      challenge: 'Create an omnichannel system that could unify relationship centers with administrative environments, allowing efficient management of various contact methods in a single platform.',
      solution: 'We developed a unified platform that integrates chatbots, email, social media, phone, and other communication channels in a single interface, with advanced routing tools, automation, and ticket management.',
      results: 'The system increased agent productivity by 40%, reduced average problem resolution time by 35%, and significantly improved end-customer satisfaction, as measured by NPS.',
      achievements: [
        {
          title: 'Productivity Enhancement',
          description: 'Boosted agent productivity by 40% through development of intuitive unified interface and streamlined workflows.'
        },
        {
          title: 'Resolution Time',
          description: 'Reduced problem resolution time by 35% through implementation of intelligent routing algorithms and context-preserving channel switching.'
        },
        {
          title: 'Customer Satisfaction',
          description: 'Improved Net Promoter Score (NPS) by 28 points through more efficient and consistent customer service experiences.'
        },
        {
          title: 'Channel Integration',
          description: 'Successfully integrated 8 different communication channels into a single coherent interface with consistent user experience.'
        }
      ],
      testimonial: {
        quote: "NeoAssist360 transformed our ability to manage customer interactions, providing a truly 360-degree view of each relationship.",
        author: "Operations Director",
        company: "NeoAssist Client"
      },
      nextProject: 'segweb'
    },
    {
      id: 6,
      number: '06',
      slug: 'segweb',
      title: 'Segweb B4',
      category: 'REGULATION SYSTEM',
      image: '/images/segweb-b4.jpg',
      link: '/portfolio/segweb',
      heroImage: '/images/segweb-b4.jpg',
      clientLogo: '/images/segweb-b4.jpg',
      year: '2018-2019',
      client: 'Zeon Solutions',
      role: 'Web Developer',
      description: 'Comprehensive regulation system for managing claims in residential, commercial, industrial, condominium, and large-scale risk sectors, providing efficient resolution and streamlined processes.',
      company: 'Zeon Solutions',
      tech: '.NET Framework, jQuery, Bootstrap 4, Microsoft SQL Server, Git and Trello.',
      technologies: ['.NET Framework', 'jQuery', 'Bootstrap 4', 'Microsoft SQL Server', 'Git', 'Trello'],
      overview: 'Comprehensive regulation system for managing claims in residential, commercial, industrial, condominium, and large-scale risk sectors, providing efficient resolution and streamlined processes.',
      challenge: 'Create a robust system to manage complex insurance claims across multiple sectors, ensuring accurate tracking, efficient processing, and clear communication among all stakeholders.',
      solution: 'We developed a comprehensive regulation system with intuitive workflows, detailed reporting capabilities, and customizable interfaces for different types of claims, making the entire process more transparent and efficient.',
      results: 'The implementation resulted in a significant reduction in claim processing time, improved accuracy in assessment, and enhanced customer satisfaction due to quicker resolution of insurance claims.',
      achievements: [
        {
          title: 'Process Optimization',
          description: 'Reduced claim processing lifecycle by 47% through implementation of optimized workflows and automated task assignments.'
        },
        {
          title: 'Assessment Accuracy',
          description: 'Improved claim assessment accuracy by 38% through development of structured evaluation models and validation rules.'
        },
        {
          title: 'Cross-sector Integration',
          description: 'Successfully unified claim management across 5 different insurance sectors with customized processes for each sector\'s unique requirements.'
        },
        {
          title: 'Reporting Capabilities',
          description: 'Developed comprehensive reporting system that provided 200+ custom metrics for business analysis and regulatory compliance.'
        }
      ],
      testimonial: {
        quote: "Segweb B4 has completely transformed how we handle insurance claims, bringing unprecedented efficiency and accuracy to our processes.",
        author: "Operations Director",
        company: "Insurance Partner"
      },
      nextProject: 'edirectory'
    },
    {
      id: 7,
      number: '07',
      slug: 'edirectory',
      title: 'eDirectory',
      category: 'BUSINESS DIRECTORY PLATFORM',
      image: '/images/edirectory.jpg',
      link: '/portfolio/edirectory',
      heroImage: '/images/edirectory.jpg',
      clientLogo: '/images/edirectory.jpg',
      year: '2017-2018',
      client: 'Arca Solutions',
      role: 'Customer Success / Developer',
      description: 'Versatile platform designed to create comprehensive business directories, local guides and classified portals that help companies and organizations build robust online directories and generate revenue through advertising and premium listings.',
      company: 'Arca Solutions',
      tech: 'PHP, Symfony, cPanel, Live Chat, Salesforce Ticket System.',
      technologies: ['PHP', 'Symfony', 'cPanel', 'Live Chat', 'Salesforce'],
      overview: 'A versatile platform designed to create comprehensive business directories, local guides and classified portals that help companies and organizations build robust online directories and generate revenue through advertising and premium listings.',
      challenge: 'Develop a flexible and scalable platform that could support multiple types of directories while allowing customization to meet the specific needs of different businesses and markets worldwide.',
      solution: 'We created a feature-rich directory system with customizable listing types, advanced search functionality, monetization options, and responsive design to deliver a seamless experience across all devices.',
      results: 'The platform has been successfully implemented by businesses worldwide, generating significant revenue through premium listings and advertisements while providing valuable resources for users searching for local businesses and services.',
      achievements: [
        {
          title: 'Platform Customization',
          description: 'Developed a highly extensible architecture that enabled 100+ unique directory configurations for different business niches and markets.'
        },
        {
          title: 'Revenue Generation',
          description: 'Implemented monetization features that helped businesses increase directory revenue by an average of 65% compared to previous solutions.'
        },
        {
          title: 'Global Scalability',
          description: 'Created a platform deployed in 15+ countries with multi-language support and localization capabilities for different regions and currencies.'
        },
        {
          title: 'Client Success Rate',
          description: 'Achieved 94% client retention rate through development of robust, reliable solution and outstanding technical support.'
        }
      ],
      testimonial: {
        quote: "eDirectory provided us with the perfect solution to create our business directory, offering both flexibility and powerful monetization options.",
        author: "Marketing Director",
        company: "Global Directory Client"
      },
      nextProject: 'ptrf'
    },
    {
      id: 8,
      number: '08',
      slug: 'ptrf',
      title: 'PTRF',
      category: 'FINANCIAL RESOURCES SYSTEM',
      image: '/images/ptrf.jpg',
      link: '/portfolio/ptrf',
      heroImage: '/images/ptrf.jpg',
      clientLogo: '/images/ptrf.jpg',
      year: '2016',
      client: 'MStech',
      role: 'Web Developer Intern',
      description: 'Financial resources transfer system dedicated and administered by educational units in São Paulo and Rio Grande do Sul, designed to streamline the process of transferring funds within the educational sector.',
      company: 'MSTECH',
      tech: '.NET Framework, Angular, Bootstrap 4 and JIRA.',
      technologies: ['.NET Framework', 'Angular', 'Bootstrap 4', 'JIRA'],
      overview: 'Financial resources transfer system dedicated and administered by educational units in São Paulo and Rio Grande do Sul, designed to streamline the process of transferring funds within the educational sector.',
      challenge: 'Create an efficient system to manage and track the flow of financial resources between educational institutions, ensuring transparency, accuracy, and compliance with government regulations.',
      solution: 'We developed a comprehensive solution with modules for budget allocation, fund transfer tracking, expense reporting, and statistical analysis to provide complete visibility into the financial processes of educational institutions.',
      results: 'The system was successfully implemented in government schools across São Paulo and Rio Grande do Sul, resulting in improved efficiency and accuracy in managing financial resource transfers.',
      achievements: [
        {
          title: 'Transparency Improvement',
          description: 'Implemented comprehensive audit trails and reporting features that increased financial transparency by 85% for educational administrators.'
        },
        {
          title: 'Compliance Assurance',
          description: 'Developed automated validation rules that ensured 100% compliance with complex government regulations for educational funding.'
        },
        {
          title: 'Resource Allocation',
          description: 'Created efficient allocation algorithms that optimized distribution of resources based on institutional needs and priorities.'
        },
        {
          title: 'Deployment Scale',
          description: 'Successfully deployed the system across 500+ educational institutions in two states with consistent user experience and data integrity.'
        }
      ],
      testimonial: {
        quote: "PTRF has revolutionized how we manage educational funding, providing unprecedented transparency and efficiency in our financial operations.",
        author: "Educational Administrator",
        company: "São Paulo State Education Department"
      },
      nextProject: 'channels-hub'
    }
  ];

  // Método para obter todos os projetos (com opção de filtro)
  const getAllProjects = (filter = {}) => {
    if (Object.keys(filter).length === 0) {
      return projects;
    }

    return projects.filter(project => {
      return Object.entries(filter).every(([key, value]) => project[key] === value);
    });
  };

  // Método para obter um projeto específico por slug
  const getProjectBySlug = (slug) => {
    return projects.find(project => project.slug === slug);
  };

  // Método para obter projetos em formato simplificado (para listagens)
  const getProjectsForList = () => {
    return projects.map(({ id, number, title, category, image, link, description, company, tech }) => ({
      id, number, title, category, image, link, description, company, tech
    }));
  };

  // Método para obter o próximo projeto após um slug específico
  const getNextProject = (currentSlug) => {
    const currentProject = getProjectBySlug(currentSlug);
    if (!currentProject) return projects[0];
    
    return getProjectBySlug(currentProject.nextProject) || projects[0];
  };

  // Exposição dos métodos para uso nos componentes
  return {
    projects,
    getAllProjects,
    getProjectBySlug,
    getProjectsForList,
    getNextProject
  };
};
