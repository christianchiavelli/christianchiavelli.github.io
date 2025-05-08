<script setup>
const featuredWorks = [
  {
    id: 1,
    number: '01',
    title: 'Channels Hub',
    category: 'PAYMENT MANAGEMENT SYSTEM',
    image: '/images/project1.jpg',
    link: '/portfolio/channels-hub',
    description: 'Plataforma de gerenciamento de hubs de pagamento que permite criar e administrar entidades (hubs), seus respectivos canais de atendimento para pagamento e modelos personalizados para diferentes ocasiões, centralizando todo o ecossistema de pagamentos.',
    company: 'Valtech',
    tech: '.NET Core, Vue 3, TailwindCSS, Microsoft SQL Server, Git, Azure DevOps and JIRA.'
  },
  {
    id: 2,
    number: '02',
    title: 'ADM Nutrition',
    category: 'INFORMATIONAL SYSTEM',
    image: '/images/project1.jpg',
    link: '/portfolio/adm-nutrition',
    description: 'Informational system with the goal and purpose of showcasing information about the ADM company, its products, and services, emphasizing its expertise and knowledge in human and animal nutrition.',
    company: 'Valtech',
    tech: '.NET Core, .NET Framework, Optimizely (EpiServer), Vue 3, TailwindCSS, Microsoft SQL Server, Git, Azure DevOps and JIRA.'
  },
  {
    id: 3,
    number: '03',
    title: 'Abeka',
    category: 'EDUCATIONAL SYSTEM',
    image: '/images/project2.jpg',
    link: '/portfolio/abeka',
    description: 'Educational system with the goal and purpose of providing a Christian distance learning (homeschooling) program for students in kindergarten, elementary and high school.',
    company: 'Valtech',
    tech: '.NET Core, .NET Framework, Optimizely (EpiServer), Vue 3, TailwindCSS, Microsoft SQL Server, Git, Azure DevOps and JIRA.'
  },
  {
    id: 4,
    number: '04',
    title: 'Degust One',
    category: 'ADMINISTRATIVE SYSTEM',
    image: '/images/project3.jpg',
    link: '/portfolio/degust-one',
    description: 'Advanced administrative system designed for efficient business management, including a customizable cash-front interface, streamlining operations and enhancing financial control.',
    company: 'Linx Stone',
    tech: '.NET Core, .NET Framework, Vue 2, Ant Design Vue, Microsoft SQL Server, Git, Azure DevOps and JIRA.'
  },
  {
    id: 5,
    number: '05',
    title: 'NeoAssist360',
    category: 'OMNICHANNEL SYSTEM',
    image: '/images/project4.jpg',
    link: '/portfolio/neoassist360',
    description: 'Omnichannel system that unifies relationship centers with the administrative environment, allowing for efficient management of diverse contact methods in a single platform.',
    company: 'NeoAssist',
    tech: 'Vue 2, Sass, Git, Git Labs and JIRA.'
  },
  {
    id: 6,
    number: '06',
    title: 'Segweb B4',
    category: 'REGULATION SYSTEM',
    image: '/images/project4.jpg',
    link: '/portfolio/segweb',
    description: 'Comprehensive regulation system for managing claims in residential, commercial, industrial, condominium, and large-scale risk sectors, providing efficient resolution and streamlined processes.',
    company: 'Zeon Solutions',
    tech: '.NET Framework, jQuery, Bootstrap 4, Microsoft SQL Server, Git and Trello.'
  },
  {
    id: 7,
    number: '07',
    title: 'eDirectory',
    category: 'BUSINESS DIRECTORY PLATFORM',
    image: '/images/project4.jpg',
    link: '/portfolio/edirectory',
    description: 'Versatile platform designed to create comprehensive business directories, local guides and classified portals that help companies and organizations build robust online directories and generate revenue through advertising and premium listings.',
    company: 'Arca Solutions',
    tech: 'PHP, Symfony, cPanel, Live Chat, Salesforce Ticket System.'
  },
  {
    id: 8,
    number: '08',
    title: 'PTRF',
    category: 'FINANCIAL RESOURCES SYSTEM',
    image: '/images/project4.jpg',
    link: '/portfolio/ptrf',
    description: 'Financial resources transfer system dedicated and administered by educational units in São Paulo and Rio Grande do Sul, designed to streamline the process of transferring funds within the educational sector.',
    company: 'MSTECH',
    tech: '.NET Framework, Angular, Bootstrap 4 and JIRA.'
  }
]

const getDelayClass = (index) => {
  const delayMap = {
    0: 'delay-0',
    1: 'delay-200',
    2: 'delay-400',
    3: 'delay-600',
    4: 'delay-800',
    5: 'delay-1000',
    6: 'delay-700',
  };
  return delayMap[index] || 'delay-0';
};
</script>

<template>
  <div class="py-20 opacity-0 animate-fade-in-up">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center mb-4">
        <h2 class="heading-2 mr-4">These are a selection of my recent works.</h2>
        <span class="h-px w-24 bg-gray-300"></span>
      </div>
      <p class="subtitle">Projects that showcase my experience and skills in front-end development.</p>
    </div>
  </div>

  <div class="mb-24">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-for="(project, index) in featuredWorks" :key="project.id"
        :class="[index % 2 === 0 ? 'bg-white' : 'bg-gray-50 rounded-lg', 'overflow-hidden opacity-0 animate-fade-in-up', getDelayClass(index)]">
        <WorksFeaturedProject :project="project" />
      </div>
    </div>
  </div>
</template>