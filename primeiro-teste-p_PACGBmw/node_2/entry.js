// To use previous step data, pass the `steps` object to the run() function
export default defineComponent({
  async run({ steps, $ }) {
    steps.get_all_records.$return_value
    // Return data to use it in future steps
    return steps.trigger.event
  },
})
