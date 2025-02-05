<template>
  <header
    :class="[
      'w-[100%] bg-[#2b3d4f] flex justify-between items-center px-5 text-white border-b-2 border-[#febf45] z-[99]',
      { sticky: isSticky },
    ]"
    role="banner"
  >
    <div class="navbar brand-font">
      <MobileNav
        :isSticky="isSticky"
        :isOpen="isOpen"
        @toggle="isOpen = !isOpen"
      />
      <DesktopNav :links="links" />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LogoComponent from "./branding/LogoComponent.vue";
import MobileNav from "./MobileNav.vue";
import DesktopNav from "./DesktopNav.vue";

const isOpen = ref(false);
const isSticky = ref(false);

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

const handleScroll = () => {
  requestAnimationFrame(() => {
    isSticky.value = window.scrollY > 65.1;
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.active {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 8px;
  text-decoration-color: #febf45;
}

.fa-canadian-maple-leaf {
  color: #ff0000;
}

.menu {
  top: 7dvh;
  right: 0dvw !important;
}
.state-focus:focus {
  color: orange !important;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: -20%;
  background-color: #273441;
  padding: 10px;
  border-radius: 3px;
}

.sticky {
  position: sticky;
  top: 0;
  z-index: 1000;
  transition:
    top 0.2s cubic-bezier(0.3, 0.73, 0.3, 0.74),
    padding 0.2s ease-in-out;
}
</style>
