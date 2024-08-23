import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
    <section class="space-y-6">
      <assignment-list :assignments="filter.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filter.completed" title="Completed"></assignment-list>

      <form>
        <div class="border border-gray-600 text-black">
          <input placeholder="New assignment..." class="p-2"/>
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>

    </section>
  `,

  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, key: 1 },
        { name: "Read chapter 4 ", complete: false, key: 2 },
        { name: "Turn in homework", complete: false, key: 3 },
        { name: "Turn on lights", complete: false, key: 4 },
      ],
    };
  },
  computed: {
    filter() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },
};
