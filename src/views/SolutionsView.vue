<template>
  <HeroComp />
  <div class="w-[80vw] mx-auto py-14">
    <ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <li
        class="bg-gray-700 text-white p-3 rounded-md"
        v-for="solution of solutions"
        :key="solution"
      >
        {{ solution }}
      </li>
    </ul>
  </div>
  <FeaturesComp />
  <ProjectsComp />
</template>

<script setup>
import HeroComp from '@/components/HeroComp.vue'
import FeaturesComp from '@/components/features/FeaturesComp.vue'
import ProjectsComp from '@/components/ProjectsComp.vue'
const solutions = [
  'E-commerce Development', // Crafting robust online stores with features like product management, inventory tracking, and custom checkout processes
  'Information Architecture', // Designing logical and intuitive structures for information display and navigation to enhance user experience
  'SEO', // Optimizing site structure, content, and metadata to improve search engine rankings and drive organic traffic
  'Consulting', // Providing strategic insights on digital transformation, web presence optimization, and technology investments
  'Application Development', // Developing bespoke web and mobile applications with modern frameworks and user-centric design
  'UI/UX Design', // Creating compelling and functional design interfaces based on thorough user research and design best practices
  'Content Management Systems', // Deploying and customizing CMS platforms like WordPress, Drupal, and Joomla for dynamic content handling
  'Social Media Integration', // Embedding social media functionality to foster community engagement and content sharing
  'Email Marketing', // Crafting targeted email campaigns with personalized content and analytics to measure effectiveness
  'Web Analytics', // Setting up and interpreting web analytics to gauge user behavior and refine marketing strategies
  'Cloud Solutions', // Offering scalable cloud hosting options and enterprise-grade cloud services for storage and computing
  'Security Audits', // Performing detailed security assessments and remediations to safeguard websites from vulnerabilities
  'Accessibility Compliance', // Ensuring websites are compliant with WCAG and ADA guidelines to serve all user groups
  'Responsive Design', // Implementing fluid layouts and adaptive features to ensure website usability across all device types
  'API Integration', // Connecting external APIs for enhanced functionality, such as payment gateways, mapping services, or CRM systems
  'Progressive Web Apps (PWA)', // Developing progressive web applications for native-like experience on web platforms
  'Data Visualization', // Implementing tools to visually represent data, making it easier to understand and actionable
  'Machine Learning Integration', // Incorporating AI and machine learning models for personalized experiences or predictive analytics
  'Internet of Things (IoT) Integration', // Integrating IoT capabilities for businesses looking to connect physical devices to their digital platforms
  'Multilingual Websites' // Creating multilingual sites to cater to diverse audiences and expand global reach
]
</script>
