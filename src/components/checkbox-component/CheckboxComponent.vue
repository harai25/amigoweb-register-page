<template>
  <div class="checkbox-component">

    <input
      class="checkbox-component__input"
      type="checkbox"
      :value="modelValue"
      @change="checked"
    />

    <label class="checkbox-component__label">
      <slot>
      </slot>
    </label>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CheckboxComponent',
  props: {
    modelValue: Boolean,
  },
  emits: ['update:modelValue'],
  setup (_, {emit}) {
    const checked = (event: {target: HTMLInputElement}) => {
      emit('update:modelValue', event.target.checked)
    }

    return {
      checked
    }
  },
})
</script>

<style scoped src="./CheckboxComponent.css"></style>
