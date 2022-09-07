<template>
  <div class="drop-down-list-select">

    <input
      type="text"
      class="drop-down-list-select__input"
      readonly
      :placeholder="placeholder"
      :value="modelValue"
      @click="toggleList()"
      ref="input"
    >

    <div class="drop-down-list-select__btn" @click="toggleList()" ><i class="fas fa-chevron-down" /></div>

    <ul class="drop-down-list-select__list" v-show="isOpen">
      <li 
        class="drop-down-list-select__li"
        v-for="item in items"
        :key="item"
        @click="select(item)"
      >
        {{item}}
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

export default defineComponent({
  name: 'DropDownListSelect',
  props: {
    modelValue: String,
    placeholder: String,
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup (_, { emit }) {
    const input = ref<HTMLInputElement | null>(null)

    const isOpen = ref(false)

    const closeListerner = () => {
      isOpen.value = false
      if (input.value !== null) {
        input.value.blur()
      }
      window.removeEventListener('click', closeListerner)
    }

    const toggleList = () => {
      if (input.value !== null) {
        isOpen.value = !isOpen.value

        if (isOpen.value) {
          input.value.focus()
          window.addEventListener('mouseup', closeListerner)
        } else {
          input.value.blur()
        }
      }
    }

    const select = (item: string) => {
      emit('update:modelValue', item)
    }

    return {
      input,
      isOpen,
      toggleList,
      closeListerner,
      select,
    }
  }
})
</script>

<style scoped src="./DropDownListSelect.css"></style>
