<template>
  <div class="flex justify-between w-full lg:navbar-start">
    <div class="flex justify-between align-middle w-screen items-center px-3">
      <router-link to="/" aria-label="Home">
        <LogoComponent />
      </router-link>
      <div
        tabindex="0"
        role="button"
        aria-label="Toggle Navigation Menu"
        class=""
        @click="$emit('toggle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-10 mr-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <div
        v-if="isOpen"
        tabindex="0"
        class="fixed h-[100dvh] bg-[#2b3d4f] w-screen left-0 top-0 z-50 py-3 px-8"
        aria-label="Mobile Navigation Menu"
      >
        <div class="mr-8">
          <div class="flex justify-between">
            <router-link
              @click="$emit('toggle')"
              :class="
                isSticky
                  ? 'max-w-[10dvw] lg:max-w-[7dvw] xl:max-w-[5dvw]'
                  : 'max-w-[20dvw] lg:max-w-[15dvw] xl:max-w-[7dvw]'
              "
              to="/"
              aria-label="Home"
            >
              <LogoComponent />
            </router-link>
            <div
              tabindex="0"
              role="button"
              aria-label="Close Navigation Menu"
              class="btn btn-ghost lg:hidden self-center"
              @click="$emit('toggle')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <ul class="text-right text-xl *:my-2 mt-12" role="menu">
            <li v-for="(link, index) in links" :key="link.path" role="none">
              <router-link
                class="poppins-regular btn w-[200px] font-medium"
                :to="link.path"
                @click="$emit('toggle')"
                :aria-label="link.name"
                role="menuitem"
                active-class="active"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LogoComponent from "./branding/LogoComponent.vue";

const props = defineProps({
  isSticky: Boolean,
  isOpen: Boolean,
});

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    subPages: [{ name: "WordPress", path: "wordpress" }],
  },
  { name: "Contact", path: "/contact" },
  { name: "Free SEO Audit", path: "/freeseo" },
];
</script>

<style scoped>
/* ...existing styles for mobile nav... */
</style>
