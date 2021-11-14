<template>
  <div class="button" :class="{'button_active': active, 'button_disabled': !active}">
    <div class="button__text">
      <slot>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    active: Boolean,
  },
})
</script>

<style scoped src="@/assets/components/button-component/styles.css"></style>
