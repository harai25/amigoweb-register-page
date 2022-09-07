<template>
  <div class="field">
    <div :if="label" class="field__label">
      {{label}}
    </div>

    <div class="field__body">
      <slot>
      </slot>
    </div>

    <div :if="errorMessage" class="field__error">
      {{errorMessage}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Field',
  props: {
    label: String,
    errorMessage: String
  }
})
</script>

<style scoped src="./FieldComponent.css"></style>
