<template>
  <div class="auth">
    <div class="auth__header">
      <div class="info">
        <div class="info__title">
          <h1>
            Регистрация
          </h1>
        </div>
        <div class="info__description">
          Уже есть аккаунт? <a class="info__link" href='#'>Войти</a>
        </div>
      </div>
    </div>
    <div class="auth__body">
      <div class="form">
        <field-component label="Имя" :errorMessage="form.errors.name">
          <text-field
            placeholder="Введите Ваше имя"
            v-model="form.fields.name"
            :filterInput="/^[a-zA-Zа-яА-ЯёЁ -]+$/"
          />
        </field-component>

        <field-component label="Email" :errorMessage="form.errors.email">
          <text-field
            placeholder="Введите ваш email"
            v-model="form.fields.email"
            @action="form.errors.email = ''"
          />
        </field-component>

        <field-component label="Номер телефона" :errorMessage="form.errors.phone">
          <text-field
            placeholder="Введите номер телефона"
            v-model="form.fields.phone"
            :filterInput="/^[0-9)(+-]+$/"
            @action="form.errors.phone = ''"
            :maxLength="11"
          />
        </field-component>

        <field-component label="Язык" :errorMessage="form.errors.language">
          <drop-down-list-select
            placeholder="Язык"
            v-model="form.fields.language"
            :items="languageList"
          />
        </field-component>

        <field-component :errorMessage="form.errors.isTermOfUse">
          <checkbox-component
            v-model="form.fields.isTermOfUse"
          >
            Принимаю <a href="#">условия</a> использования
          </checkbox-component>
        </field-component>

        
      <transition>
        <button-component :active="canBeEdit" @click="registration()">
          Зарегистрироваться
        </button-component>
      </transition>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { generateForm } from './utils/form'
import { RegistrationForm, Language } from './types/RegistrationForm'
import ButtonComponent from './components/button-component/ButtonComponent.vue'
import FieldComponent from './components/field-component/FieldComponent.vue'
import TextField from './components/text-field/TextField.vue'
import DropDownListSelect from './components/drop-down-list-select/DropDownListSelect.vue'
import CheckboxComponent from './components/checkbox-component/CheckboxComponent.vue'
import emailValidator from './utils/emailValidator'

export default defineComponent({
  name: 'App',
  components: {
    ButtonComponent,
    FieldComponent,
    TextField,
    DropDownListSelect,
    CheckboxComponent,
  },
  setup () {
    const registrationInitial: RegistrationForm = {
      name: '',
      email: '',
      phone: '',
      language: Language.EMPTY,
      isTermOfUse: false,
    }

    const form = reactive(generateForm(registrationInitial))

    const languageList: Language[] = [
      Language.RUSSIAN,
      Language.ENGLISH,
      Language.CHINNESE,
      Language.SPANISH
    ]

    const canBeEdit = computed(() => !!(
      form.fields.name &&
      form.fields.email &&
      form.fields.phone &&
      form.fields.language &&
      form.fields.isTermOfUse
    ))

    const valid = () => {
      form.cleanAllErrors()
      let isError = false
      if (!emailValidator(form.fields.email)) {
        form.errors.email = 'Введено не корректное значение'
        isError = true
      }
      if (form.fields.phone.length !== 11) {
        form.errors.phone = 'Номер телефона должен состоять из 11 символов'
        isError = true
      }
      return !isError
    }

    const registration = () => {
      if (valid()) {
        console.log('successful')
      }
    }

    return {
      form,
      languageList,
      canBeEdit,
      registration,
    }
  }
})
</script>

<style src="@/assets/css/styles.css"></style>
<style src="@/assets/css/fonts.css"></style>
<style src="@/assets/fontawesome/css/all.css"></style>
