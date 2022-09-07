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
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: String,
    maxLength: Number,
    filterInput: RegExp,
  },
  emits: ['update:modelValue', 'action'],
  setup (props, { emit }) {

    const inputHandler = (event: {target: HTMLInputElement}) => {
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

<style scoped src="./TextField.css"></style>
