<template>
  <div
    v-if="faq"
    @click="toggleExpand"
    class="px-3 flex gap-3 align-middle py-2"
    role="button"
    :aria-expanded="isExpanded"
    tabindex="0"
    @keydown.enter="toggleExpand"
    @keydown.space="toggleExpand"
  >
    <h4>{{ faq.question }}</h4>
  </div>
  <p
    class="p-3 border-t-2 mt-2 border-orange-400"
    v-if="isExpanded"
    :id="'answer-' + faq.id"
    tabindex="0"
  >
    {{ faq.answer }}
  </p>
</template>

<script>
import { ref, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'FaqCard',
  props: {
    faq: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { faq } = toRefs(props)
    const isExpanded = ref(false)

    const toggleExpand = () => {
      isExpanded.value = !isExpanded.value
    }

    return {
      faq,
      isExpanded,
      toggleExpand
    }
  }
})
</script>
s
