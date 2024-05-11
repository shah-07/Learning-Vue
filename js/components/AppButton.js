export default {
  template: `
    <button 
      :class="{
        'text-white border rounded px-5 py-2 disabled:cursor-not-allowed': true,
        'bg-blue-700 hover:bg-blue-600': type === 'primary',
        'bg-purple-700 hover:bg-purple-600': type === 'secondary',
        'bg-gray-700 hover:bg-gray-600': type === 'muted',
        'is-loading': processing
      }" 
      :disabled="processing">
      <slot />
    </button>
  `,

  props: {
    type: {
      type: String,
      default: "primary",
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },
};
