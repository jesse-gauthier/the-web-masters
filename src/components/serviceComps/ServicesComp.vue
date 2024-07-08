<template>
  <div class="hidden md:block py-14" role="region" aria-label="Solutions">
    <div class="inner-wrapper">
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <li
          class="p-3 rounded-md border-2 border-[#2b3c4f]"
          v-for="solution of solutions"
          :key="solution"
          role="listitem"
        >
          {{ solution }}
        </li>
      </ul>
      <router-link
        to="services"
        class="my-12 mx-auto flex w-[fit-content] px-6 btn bg-white border-1 border-[#2b3c4f] hover:bg-[#2b3d4f] hover:text-white hover:underline underline-offset-4"
        role="button"
        aria-label="More Services"
        >More Services</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const solutions = [
  'E-commerce Development',
  'Information Architecture',
  'SEO',
  'Application Development',
  'UI/UX Design',
  'Content Management Systems',
  'Web Analytics',
  'Cloud Solutions',
  'Security Audits',
  'Accessibility Compliance',
  'Website Refresh'
]

// const servicesContent = ref({
//   wordpress: {
//     title: 'WordPress Development',
//     description:
//       "Our WordPress services are tailored to empower your digital presence with both flexibility and power. As the world's leading content management system, WordPress offers an unparalleled blend of usability and customization, making it the ideal platform for everything from vibrant blogs to robust e-commerce sites. We provide custom theme design, plugin development, and ongoing maintenance to ensure your WordPress site remains secure and up-to-date."
//   },
//   shopify: {
//     title: 'Shopify Development',
//     description:
//       "Specializing in Shopify, we offer bespoke e-commerce solutions that drive sales and enhance the online shopping experience. Shopify's robust platform is the cornerstone of our approach, allowing us to design visually stunning and highly functional online stores. From custom theme development to seamless app integration, we ensure your store not only stands out but also operates flawlessly, catering to your unique business needs."
//   },
//   uxUiDesign: {
//     title: 'UX/UI Design',
//     description:
//       "Our UX/UI design services ensure that your digital products are not only aesthetically pleasing but also highly functional and user-friendly. We focus on creating engaging user experiences that drive user satisfaction and conversions. Our design process involves thorough research, user testing, and iterative design to build interfaces that meet your users' needs and exceed their expectations."
//   },
//   websiteOptimization: {
//     title: 'Website Optimization',
//     description:
//       'Enhance your website’s performance and user experience with our optimization services. We focus on improving site speed, navigation, and responsiveness to ensure your website operates smoothly across all devices. This service is crucial for businesses looking to improve their existing online platforms and provide a seamless user experience.'
//   },
//   searchEngineOptimization: {
//     title: 'SEO',
//     description:
//       'Elevate your site’s visibility on search engines with our comprehensive SEO services. We employ the latest strategies in keyword research, content optimization, link building, and analytics to boost your rankings and attract more traffic. Our SEO experts are dedicated to making your website more discoverable and ensuring it attracts and retains high-quality traffic.'
//   },
//   consultation: {
//     title: 'Consultation Services',
//     description:
//       'At The Web Masters, our consultation services are designed to help you navigate the complexities of the digital landscape. Whether you’re looking to start a new project or enhance an existing website, our expert consultants provide personalized guidance and strategic insights tailored to your business goals. We assist in defining your digital strategy, choosing the right technologies, and optimizing your online presence for maximum impact.'
//   }
// })
</script>
