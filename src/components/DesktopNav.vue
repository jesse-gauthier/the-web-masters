<template>
  <div class="flex justify-between items-center">
    <div>
      <router-link to="/">
        <LogoComponent />
      </router-link>
    </div>
    <ul
      class="w-[100%] menu menu-horizontal px-1 flex justify-end"
      role="menubar"
    >
      <li
        v-for="(link, index) in links"
        :key="link.path"
        @mouseenter="showDropdown = index"
        @mouseleave="showDropdown = null"
        class="relative"
        role="none"
      >
        <router-link
          :to="link.path"
          class="text-xl state-focus hover:underline underline-offset-4 font-medium"
          :aria-label="link.name"
          role="menuitem"
          active-class="active"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LogoComponent from "./branding/LogoComponent.vue";

const props = defineProps({
  links: Array,
});

const showDropdown = ref(null);
</script>

<style scoped>
/* ...existing styles for desktop nav... */
</style>
