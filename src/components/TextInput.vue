<template>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        :for="id"
      >
        {{ label }}
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        @input="(e) => input(e.target.value)"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },
  setup(props, context) {
    function input(value) {
      context.emit('input', value)
    }

    return {
      id: computed(() => props.label.toLowerCase().replace(' ', '')),
      input,
    }
  },
}
</script>
