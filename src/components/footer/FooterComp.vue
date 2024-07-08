<template>
  <footer
    class="footer p-10 bg-[#2b3d4f] flex gap-12 text-white justify-center min-h-[10vh]"
    role="contentinfo"
  >
    <nav aria-label="Services">
      <h2 class="footer-title">Services</h2>
      <ul class="">
        <li>
          <router-link class="link link-hover" to="/services">Web Development</router-link>
        </li>
        <li><router-link class="link link-hover" to="/services">WordPress</router-link></li>
        <li><router-link class="link link-hover" to="/services">UX Design</router-link></li>
        <li><router-link class="link link-hover" to="/services">Digital Marketing</router-link></li>
      </ul>
    </nav>
    <nav aria-label="Company">
      <h2 class="footer-title">Company</h2>
      <ul>
        <!-- <li><a href="/about-us" class="link link-hover">About us</a></li> -->
        <li><router-link class="link link-hover" to="/contact">Contact</router-link></li>
        <li><router-link class="link link-hover" to="/ourwork">Portfolio</router-link></li>
        <li>
          <router-link class="link link-hover" to="/privacy-policy">Privacy Policy</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
