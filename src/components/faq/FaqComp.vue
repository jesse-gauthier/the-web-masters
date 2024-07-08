<template>
  <section class="inner-wrapper">
    <h3 class="text-center text-5xl">Frequently Asked Questions</h3>
    <ul class="my-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <li
        class="shadow border-[0.50px] border-[#577594] rounded-md cursor-pointer self-start"
        v-for="faq in faqs"
        :key="faq.question"
      >
        <FaqCard :faq="faq" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import FaqCard from './FaqCard.vue'

const faqs = [
  {
    question: 'What services do you offer?',
    icon: 'fa-solid fa-circle-info',
    answer:
      'We offer a range of services including website design, development, SEO optimization, content creation, e-commerce solutions, and maintenance.'
  },
  {
    question: 'How long does it take to build a website?',
    icon: 'fa-solid fa-clock',
    answer:
      'The time to build a website can vary depending on its complexity and your requirements, but typically it takes between 4 to 12 weeks from initial concept to go-live.'
  },
  {
    question: 'Can you help us rank higher in search engines?',
    icon: 'fa-solid fa-magnifying-glass-chart',
    answer:
      'Yes, we provide SEO services that include keyword research, on-page optimization, link building, and content strategy to improve your search engine rankings.'
  },
  {
    question: 'Will our website be mobile-friendly?',
    icon: 'fa-solid fa-mobile-screen-button',
    answer:
      'Absolutely, all of our websites are designed to be responsive, ensuring they work well on a variety of devices and screen sizes.'
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    icon: 'fa-solid fa-screwdriver-wrench',
    answer:
      'Yes, we offer ongoing support and maintenance services to ensure your website continues to operate smoothly and remains updated with the latest web standards.'
  },
  {
    question: 'How much will a website cost?',
    icon: 'fa-solid fa-dollar-sign',
    answer:
      'The cost of a website varies based on its features, complexity, and design. We provide a detailed quote after discussing your specific needs and requirements.'
  },
  {
    question: 'Can you integrate third-party services into our website?',
    icon: 'fa-solid fa-plug',
    answer:
      "Yes, we can integrate a variety of third-party services like social media, payment gateways, CRMs, and more to enhance your website's functionality."
  },
  {
    question: 'Will I be able to make changes to the website myself?',
    icon: 'fa-solid fa-user-gear',
    answer:
      'Yes, we build our websites on popular CMS platforms that allow you to easily manage and update your website’s content without needing technical knowledge.'
  },
  {
    question: 'What is your project management process?',
    icon: 'fa-solid fa-diagram-project',
    answer:
      'We follow a structured project management process that involves initial consultations, project planning, design, development, testing, and deployment, ensuring timely delivery.'
  },
  {
    question: 'Do you provide training on how to use the website?',
    icon: 'fa-solid fa-chalkboard-user',
    answer:
      'Yes, we provide training sessions and manuals that help you manage and update your website confidently and efficiently.'
  }
]
</script>
