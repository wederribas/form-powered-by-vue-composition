<template>
  <form action="#" @submit.prevent class="w-full max-w-sm m-auto">
    <text-input
      v-model="fullName"
      label="Full Name"
      placeholder="Weder Ribas"
    />

    <text-input
      v-model="password"
      label="Password"
      placeholder="******************"
    />

    <checkbox v-model="newsletterOptIn" label="Send me the newsletter!" />

    <submit-button @click="submitForm" />
  </form>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'
import TextInput from './TextInput.vue'
import Checkbox from './Checkbox.vue'
import SubmitButton from './SubmitButton.vue'

export default {
  name: 'Form',
  components: {
    TextInput,
    Checkbox,
    SubmitButton,
  },
  setup() {
    const formState = reactive({
      fullName: '',
      password: '',
      newsletterOptIn: false,
    })

    async function submitForm() {
      console.log('submitted')
    }

    return {
      ...toRefs(formState),
      submitForm,
    }
  },
}
</script>
