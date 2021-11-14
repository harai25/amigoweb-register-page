<template>
  <div class="text-field">

    <input
      type="text"
      class="text-field__input"
      :placeholder="placeholder"
      :maxLength="maxLength"
      :value="modelValue"
      @input="inputHandler"
    >

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextField',
  props: {
    modelValue: String,
    placeholder: String,
    maxLength: Number,
    filterInput: RegExp,
  },
  emits: ['update:modelValue', 'action'],
  setup (props, { emit }) {

    const inputHandler = (event: any) => {
      emit('action')
      if (event.target.value === '') {
        emit('update:modelValue', '')
      }
      if (props.filterInput && !event.target.value.match(props.filterInput)) {
        event.target.value = props.modelValue
      } else {
        emit('update:modelValue', event.target.value)
      }
    }

    return {
      inputHandler
    }
  }
})
</script>

<style scoped src="@/assets/components/text-field/styles.css"></style>
