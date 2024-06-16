import Assignment from "./Assignment.js";

export default {
  components: { Assignment },

  template: `
    <!-- assignments -->
    <section v-show="assignments.length">
      <h2 class="font-bold mb-2">{{ title }}</h2>
      <ul>
        <assignment
          v-for="assignment in assignments" 
          :key="assignment.key"
          :assignment="assignment"
        ></assignment>
      </ul>
    </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },
};
