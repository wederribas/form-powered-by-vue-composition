<template>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input
        class="mr-2 leading-tight"
        type="checkbox"
        @input="(e) => input(e.target.checked)"
        :value="value"
      />
      <span class="text-sm">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, context) {
    function input(isChecked) {
      context.emit('input', isChecked)
    }

    return { input }
  },
}
</script>
