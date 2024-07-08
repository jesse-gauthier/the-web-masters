<template>
  <section class="bg-white py-4" aria-labelledby="packages-heading">
    <div class="w-[90vw] mx-auto flex flex-col justify-center">
      <h2 id="packages-heading" class="py-3 text-3xl mb-5">All Packages Include:</h2>
      <div class="flex gap-5 flex-col md:flex-row lg:flex-nowrap justify-center">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="md:w-1/3 p-3 flex flex-col justify-between"
        >
          <h3 class="font-bold text-xl my-2">{{ feature.title }}</h3>
          <div
            class="flex gap-5 flex-col md:flex-row items-center"
            aria-labelledby="feature-{{ feature.title }}"
          >
            <svg v-html="feature.svg" class="w-[120px] md:w-[420px]" aria-hidden="true"></svg>
            <p id="feature-{{ feature.title }}">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'Blazing Fast Speeds',
    description:
      'Our websites are built with the latest technologies to ensure they load quickly and run smoothly, providing a better experience for your visitors and improved search engine rankings. Experience blazing speed with every project!',
    svg: `<svg
              class= "w-[120px] md:w-[420px]"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
        >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#EDEDED"
                  d="M50 0c-27.614 0-50 22.385-50 49.999 0 27.615 22.386 50.001 50 50.001s50-22.386 50-50.001c0-27.614-22.386-49.999-50-49.999z"
                ></path>
                <path
                  fill="#D5D5D5"
                  d="M78.559 27.014l1.427 1.428-37.697 33.551-4.283-4.283 40.553-30.696z"
                ></path>
                <path
                  fill="#BEBEBE"
                  d="M61 76.999v6h-6v-6h-2v6h-6v-6h-2v6h-6v-6h-2v8h26v-8h-2z"
                ></path>
                <path
                  fill="#EFC75E"
                  d="M47.031 8.094c-15.203 1.044-28.29 10.351-34.742 23.434l5.424 2.656c5.767-11.646 17.669-19.813 31.333-20.166.32-.008.636 0 .954 0v-6.014c-.983 0-1.971.021-2.969.09z"
                ></path>
                <path
                  fill="#E2574C"
                  d="M85.985 49.988c0 5.471-1.437 10.873-3.686 15.61-.689 1.452-.172 3.182 1.235 3.976l.054.03c1.564.882 3.537.234 4.305-1.381 2.63-5.533 4.107-11.843 4.107-18.235 0-7.042-1.743-13.672-4.807-19.5l-5.326 2.794c2.624 4.993 4.118 10.674 4.118 16.706z"
                ></path>
                <path
                  fill="#3DB39E"
                  d="M16.407 69.613l.054-.029c1.408-.775 1.924-2.467 1.234-3.887-2.439-5.021-3.886-11.12-3.658-17.104.209-5.493 1.686-10.681 4.13-15.293l-5.356-2.81c-2.57 4.867-4.211 10.29-4.674 16.029-.619 7.668.863 15.368 3.965 21.744.767 1.578 2.74 2.213 4.305 1.35z"
                ></path>
                <path
                  fill="#F4B459"
                  d="M50 8.004v6.014c14.174.001 26.436 8.185 32.301 20.095l5.392-2.652c-6.847-13.899-21.151-23.454-37.693-23.457z"
                ></path>
                <path
                  fill="#324D5B"
                  d="M76.559 22.014l1.427 1.428-35.697 38.551-4.283-4.283 38.553-35.696z"
                ></path>
                <path
                  fill="#1E2D36"
                  d="M50 44.999c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"
                ></path>
              </g>
            </svg > `
  },
  {
    title: 'Fully Responsive Design',
    description:
      'Our websites adapt seamlessly to any device, ensuring a perfect display whether on a desktop, tablet, or smartphone. With our responsive design, your site will look great and function flawlessly across all platforms, enhancing user experience and accessibility.',
    svg: `<svg
              class="w-[120px] md:w-[420px]"
              viewBox="0 0 73 73"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>fundamentals/css/responsive-design</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="fundamentals/css/responsive-design"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="container" transform="translate(2.000000, 2.000000)" fill-rule="nonzero">
                    <rect
                      id="mask"
                      stroke="#172550"
                      stroke-width="2"
                      fill="#FFFFFF"
                      x="-1"
                      y="-1"
                      width="71"
                      height="71"
                      rx="14"
                    ></rect>
                    <g id="responsive" transform="translate(10.000000, 15.000000)">
                      <rect
                        id="Rectangle-path"
                        fill="#445EA0"
                        x="19"
                        y="31"
                        width="8"
                        height="4"
                      ></rect>
                      <path
                        d="M31,35 L12.4985622,35 C12.224309,35 12,35.1925367 12,35.4278407 L12,37.5721593 C12,37.8074633 12.2244068,38 12.4985622,38 L31,38 L31,35 Z"
                        id="Shape"
                        fill="#293D7C"
                      ></path>
                      <path
                        d="M45.478643,0 L0.521357041,0 C0.234620887,0 0,0.236804983 0,0.526210375 L0,30.4737896 C0,30.7632982 0.234620887,31 0.521357041,31 L32.3784999,31 L32.3784999,15.2442176 C32.3784999,14.8462078 32.6993664,14.5222512 33.0938075,14.5222512 L46,14.5222512 L46,0.526210375 C46,0.236804983 45.7653791,0 45.478643,0 Z"
                        id="Shape"
                        fill="#293D7C"
                      ></path>
                      <path
                        d="M2,24.6978912 C2,24.8641498 2.13927482,25 2.30960075,25 L31.7827631,25 L31.7827631,14.6526736 C31.7827631,14.2716808 32.1003542,13.9615749 32.4907688,13.9615749 L43,13.9615749 L43,5 L2,5 L2,24.6978912 Z"
                        id="Shape"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M3.73271044,24.6978912 L3.73271044,5 L2,5 L2,24.6978912 C2,24.8641498 2.12024101,25 2.26728956,25 L4,25 C3.85295145,25 3.73271044,24.864051 3.73271044,24.6978912 Z"
                        id="Shape"
                        fill="#D9EAFC"
                      ></path>
                      <circle id="Oval" fill="#445EA0" cx="22.9" cy="27.9" r="1.5"></circle>
                      <path
                        d="M31.8,16 L26.1190132,16 C25.9435559,16 25.8,16.1439693 25.8,16.3199317 L25.8,22.6800683 C25.8,22.8560307 25.9435559,23 26.1190132,23 L31.8,23 L31.8,16 Z"
                        id="Shape"
                        fill="#C3DDF4"
                      ></path>
                      <path
                        d="M33.190583,13.4380791 L38,13.4380791 L38,7.45736687 C38,7.20581509 37.7678753,7 37.4841674,7 L8.51583262,7 C8.23212468,7 8,7.20581509 8,7.45736687 L8,13.5426331 C8,13.7941849 8.23212468,14 8.51583262,14 L32.4745041,14 C32.5182467,13.683868 32.8224848,13.4380791 33.190583,13.4380791 Z"
                        id="Shape"
                        fill="#C3DDF4"
                      ></path>
                      <path
                        d="M42.6903992,2 L2.30960075,2 C2.13927482,2 2,2.16514092 2,2.36721967 L2,5 L43,5 L43,2.36721967 C43,2.16514092 42.860624,2 42.6903992,2 Z"
                        id="Shape"
                        fill="#FFAF10"
                      ></path>
                      <path
                        d="M4,2 L2.26728956,2 C2.12024101,2 2,2.16514092 2,2.36721967 L2,5 L3.73262312,5 L3.73262312,2.36721967 C3.73271044,2.16514092 3.85295145,2 4,2 Z"
                        id="Shape"
                        fill="#FF9518"
                      ></path>
                      <g id="Group" transform="translate(8.000000, 16.000000)" fill="#5DC1D8">
                        <path
                          d="M8.86265868,1.72081538 L0.798467066,1.72081538 C0.401628743,1.72081538 0.0799041916,1.35929231 0.0799041916,0.913123077 C0.0799041916,0.466953846 0.401628743,0.105430769 0.798467066,0.105430769 L8.86265868,0.105430769 C9.25949701,0.105430769 9.58122156,0.466953846 9.58122156,0.913123077 C9.58122156,1.35929231 9.25949701,1.72081538 8.86265868,1.72081538 Z"
                          id="Shape"
                        ></path>
                        <path
                          d="M8.86265868,4.35787692 L0.798467066,4.35787692 C0.401628743,4.35787692 0.0799041916,3.99635385 0.0799041916,3.55018462 C0.0799041916,3.10401538 0.401628743,2.74249231 0.798467066,2.74249231 L8.86265868,2.74249231 C9.25949701,2.74249231 9.58122156,3.10401538 9.58122156,3.55018462 C9.58122156,3.99624615 9.25949701,4.35787692 8.86265868,4.35787692 Z"
                          id="Shape"
                        ></path>
                        <path
                          d="M8.86265868,6.99493846 L0.798467066,6.99493846 C0.401628743,6.99493846 0.0799041916,6.63341538 0.0799041916,6.18724615 C0.0799041916,5.74107692 0.401628743,5.37955385 0.798467066,5.37955385 L8.86265868,5.37955385 C9.25949701,5.37955385 9.58122156,5.74107692 9.58122156,6.18724615 C9.58122156,6.63341538 9.25949701,6.99493846 8.86265868,6.99493846 Z"
                          id="Shape"
                        ></path>
                        <path
                          d="M15.1913772,1.72081538 L11.0403832,1.72081538 C10.6435449,1.72081538 10.3218204,1.35929231 10.3218204,0.913123077 C10.3218204,0.466953846 10.6435449,0.105430769 11.0403832,0.105430769 L15.1913772,0.105430769 C15.5882156,0.105430769 15.9099401,0.466953846 15.9099401,0.913123077 C15.9099401,1.35929231 15.5882156,1.72081538 15.1913772,1.72081538 Z"
                          id="Shape"
                        ></path>
                        <path
                          d="M15.1913772,4.35787692 L11.0403832,4.35787692 C10.6435449,4.35787692 10.3218204,3.99635385 10.3218204,3.55018462 C10.3218204,3.10401538 10.6435449,2.74249231 11.0403832,2.74249231 L15.1913772,2.74249231 C15.5882156,2.74249231 15.9099401,3.10401538 15.9099401,3.55018462 C15.9099401,3.99624615 15.5882156,4.35787692 15.1913772,4.35787692 Z"
                          id="Shape"
                        ></path>
                        <path
                          d="M15.1913772,6.99493846 L11.0403832,6.99493846 C10.6435449,6.99493846 10.3218204,6.63341538 10.3218204,6.18724615 C10.3218204,5.74107692 10.6435449,5.37955385 11.0403832,5.37955385 L15.1913772,5.37955385 C15.5882156,5.37955385 15.9099401,5.74107692 15.9099401,6.18724615 C15.9099401,6.63341538 15.5882156,6.99493846 15.1913772,6.99493846 Z"
                          id="Shape"
                        ></path>
                      </g>
                      <g id="Group-2" transform="translate(31.000000, 13.000000)">
                        <path
                          d="M18.2250591,0 C18.6512766,0 19,0.377080343 19,0.837956318 L19,26.1620437 C19,26.6229197 18.6512766,27 18.2250591,27 L0.77494086,27 C0.348723387,27 0,26.6229197 0,26.1620437 L0,0.837956318 C0,0.377080343 0.348723387,0 0.77494086,0 L18.2250591,0 Z"
                          id="Shape"
                          fill="#445EA0"
                        ></path>
                        <path
                          d="M1.49163302,22 C1.22123486,22 1,21.776008 1,21.5022399 L1,1.49776008 C1,1.22399204 1.22123486,1 1.49163302,1 L16.508367,1 C16.7787651,1 17,1.22399204 17,1.49776008 L17,21.5022399 C17,21.776008 16.7787651,22 16.508367,22 L1.49163302,22 Z"
                          id="Shape"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          d="M3.39618388,21.5022399 L3.39618388,1.49776008 C3.39618388,1.22399204 3.66790114,1 4,1 L1.60381612,1 C1.27171725,1 1,1.22399204 1,1.49776008 L1,21.5022399 C1,21.776008 1.27171725,22 1.60381612,22 L4,22 C3.66790114,22 3.39618388,21.776008 3.39618388,21.5022399 Z"
                          id="Shape"
                          fill="#D9EAFC"
                        ></path>
                        <path
                          d="M8.52222957,25 C8.23500331,25 8,24.8116367 8,24.5814148 L8,24.4185852 C8,24.1883633 8.23500331,24 8.52222957,24 L10.4777704,24 C10.7649967,24 11,24.1883633 11,24.4185852 L11,24.5814148 C11,24.8116367 10.7649967,25 10.4777704,25 L8.52222957,25 Z"
                          id="Shape"
                          fill="#293D7C"
                        ></path>
                        <path
                          d="M17,3 L17,1.51832271 C17,1.23324522 16.7787651,1 16.508367,1 L1.49163302,1 C1.22123486,1 1,1.23324522 1,1.51832271 L1,3 L17,3 Z"
                          id="Shape"
                          fill="#FFAF10"
                        ></path>
                        <path
                          d="M4,1 L1.60381612,1 C1.27171725,1 1,1.23324522 1,1.51832271 L1,3 L3.39618388,3 L3.39618388,1.51832271 C3.39618388,1.23324522 3.66790114,1 4,1 Z"
                          id="Shape"
                          fill="#FF9518"
                        ></path>
                        <rect
                          id="Rectangle"
                          fill="#C3DDF4"
                          x="4"
                          y="4"
                          width="12"
                          height="5"
                          rx="1"
                        ></rect>
                      </g>
                    </g>
                  </g>
                  <rect
                    id="Rectangle-4"
                    fill="#5DC1D8"
                    fill-rule="nonzero"
                    x="47"
                    y="40"
                    width="12"
                    height="1.5"
                    rx="0.75"
                  ></rect>
                  <rect
                    id="Rectangle-4"
                    fill="#5DC1D8"
                    fill-rule="nonzero"
                    x="47"
                    y="42.25"
                    width="12"
                    height="1.5"
                    rx="0.75"
                  ></rect>
                  <rect
                    id="Rectangle-4"
                    fill="#5DC1D8"
                    fill-rule="nonzero"
                    x="47"
                    y="44.5"
                    width="12"
                    height="1.5"
                    rx="0.75"
                  ></rect>
                  <rect
                    id="Rectangle-4"
                    fill="#5DC1D8"
                    fill-rule="nonzero"
                    x="47"
                    y="46.75"
                    width="12"
                    height="1.5"
                    rx="0.75"
                  ></rect>
                  <rect
                    id="Rectangle-4"
                    fill="#5DC1D8"
                    fill-rule="nonzero"
                    x="47"
                    y="49"
                    width="12"
                    height="1.5"
                    rx="0.75"
                  ></rect>
                </g>
              </g>
            </svg>`
  },
  {
    title: 'User Friendly Designs',
    description:
      'Our designs prioritize ease of use, making your website intuitive and engaging for every visitor. We focus on creating a user-friendly interface that enhances usability and interaction, ensuring your website is not only beautiful but also accessible and easy to navigate.',
    svg: `<svg
              class="w-[120px] md:w-[420px] p-3"
              viewBox="0 0 64 64"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <defs></defs>
                <path
                  class="cls-3"
                  d="M51,26v-1.02c0-.62,.29-1.21,.79-1.58,1.95-1.46,3.21-3.78,3.21-6.4,0-4.72-4.09-8.48-8.91-7.95-3.52,.39-6.44,3.17-6.99,6.67-.49,3.13,.85,5.99,3.11,7.68,.5,.37,.79,.96,.79,1.59v1.02"
                ></path>
                <rect class="cls-8" height="8" width="2" x="46" y="18"></rect>
                <path
                  class="cls-7"
                  d="M24.58,40.04l-3,1.29c-1.01,.43-2.15,.43-3.15,0l-3-1.29c-1.47-.63-2.42-2.08-2.42-3.68v-5.36c0-3.31,2.69-6,6-6h2c3.31,0,6,2.69,6,6v5.36c0,1.6-.95,3.05-2.42,3.68Z"
                ></path>
                <path
                  class="cls-9"
                  d="M33.14,46c-1.82-1.85-4.35-3-7.14-3h-3c0,1.66-1.34,3-3,3s-3-1.34-3-3h-3c-5.52,0-10,4.48-10,10v7H26l4-14h3.14Z"
                ></path>
                <path class="cls-7" d="M15,56h2c1.1,0,2,.9,2,2v2h-4v-4h0Z"></path>
                <path
                  class="cls-9"
                  d="M10,32.73c-.29,.17-.64,.27-1,.27-1.1,0-2-.9-2-2s.9-2,2-2c.42,0,.81,.13,1.14,.36"
                ></path>
                <path
                  class="cls-9"
                  d="M30,32.73c.29,.17,.64,.27,1,.27,1.1,0,2-.9,2-2s-.9-2-2-2c-.42,0-.81,.13-1.14,.36"
                ></path>
                <path
                  class="cls-5"
                  d="M17,40.71l1.42,.61c1.01,.44,2.15,.44,3.16,0l1.42-.61v2.29c0,1.66-1.34,3-3,3s-3-1.34-3-3v-2.29Z"
                ></path>
                <polyline class="cls-4" points="26 60 30 46 52 46 48 60"></polyline>
                <path
                  class="cls-9"
                  d="M26.4,28.38h-.01c-.57-.23-1.23-.38-2.06-.38-4.33,0-4.33,4-8.67,4-1.13,0-1.97-.27-2.66-.67v-.33c0-3.31,2.69-6,6-6h2c2.37,0,4.42,1.38,5.39,3.38h.01Z"
                ></path>
                <path
                  class="cls-2"
                  d="M27,35.6v-4.6c0-3.31-2.69-6-6-6h-2c-3.31,0-6,2.69-6,6v4h-2c-.55,0-1-.45-1-1v-3c0-5.52,4.48-10,10-10,2.76,0,5.26,1.12,7.07,2.93s2.93,4.31,2.93,7.07v3.18c0,.48-.34,.89-.8,.98l-2.2,.44Z"
                ></path>
                <path class="cls-6" d="M39,52c.55,0,1,.45,1,1s-.45,1-1,1v-2Z"></path>
                <path
                  class="cls-8"
                  d="M20,37h0c-.11-.54,.24-1.07,.78-1.18l8.22-1.64v-2.86c0-4.79-3.61-8.98-8.38-9.3-5.24-.35-9.62,3.81-9.62,8.98v3h2v2h-2c-1.1,0-2-.9-2-2v-2.68c0-5.72,4.24-10.74,9.94-11.27,6.54-.62,12.06,4.53,12.06,10.95v3.18c0,.95-.67,1.77-1.61,1.96l-8.22,1.64c-.54,.11-1.07-.24-1.18-.78Z"
                ></path>
                <path
                  class="cls-8"
                  d="M20,60h-2v-2c0-.55-.45-1-1-1h-7c-.55,0-1-.45-1-1v-4c0-.27,.11-.52,.29-.71l1.29-1.29c.39-.39,1.02-.39,1.41,0h0c.39,.39,.39,1.02,0,1.41l-1,1v2.59h6c1.66,0,3,1.34,3,3v2Z"
                ></path>
                <rect class="cls-6" height="2" width="50" x="2" y="60"></rect>
                <rect class="cls-8" height="4" rx="1" ry="1" width="10" x="42" y="26"></rect>
                <path class="cls-9" d="M51,30c0,2.21-1.79,4-4,4s-4-1.79-4-4"></path>
                <circle class="cls-1" cx="47" cy="17" r="2"></circle>
                <rect class="cls-1" height="4" width="2" x="46" y="2"></rect>
                <rect
                  class="cls-1"
                  height="4"
                  transform="translate(5.55 29.02) rotate(-45)"
                  width="2"
                  x="36.81"
                  y="5.81"
                ></rect>
                <rect class="cls-1" height="2" width="4" x="32" y="16"></rect>
                <rect
                  class="cls-1"
                  height="2"
                  transform="translate(-7.45 34.41) rotate(-45)"
                  width="4"
                  x="35.81"
                  y="25.19"
                ></rect>
                <rect
                  class="cls-1"
                  height="4"
                  transform="translate(-2.06 47.41) rotate(-45)"
                  width="2"
                  x="55.19"
                  y="24.19"
                ></rect>
                <rect class="cls-1" height="2" width="4" x="58" y="16"></rect>
                <rect
                  class="cls-1"
                  height="2"
                  transform="translate(10.94 42.02) rotate(-45)"
                  width="4"
                  x="54.19"
                  y="6.81"
                ></rect>
                <rect class="cls-8" height="2" width="2" x="46" y="36"></rect>
                <rect class="cls-8" height="2" width="2" x="43" y="40"></rect>
                <rect class="cls-8" height="2" width="2" x="39" y="42"></rect>
              </g>
            </svg>`
  }
]
</script>

<style>
.cls-1 {
  fill: #f5dd90;
}

.cls-2 {
  fill: #e7ecef;
}

.cls-3 {
  fill: #ffbc0a;
}

.cls-4 {
  fill: #8b8c89;
}

.cls-5 {
  fill: #bc6c25;
}

.cls-6 {
  fill: #a3cef1;
}

.cls-7 {
  fill: #dda15e;
}

.cls-8 {
  fill: #6096ba;
}

.cls-9 {
  fill: #274c77;
}
</style>
