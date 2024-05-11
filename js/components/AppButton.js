export default {
  template: `
    <button class="bg-purple-600 hover:bg-purple-500 text-white border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
      <slot />
    </button>
  `,
  data() {
    return {
      processing: true,
    };
  },
};
