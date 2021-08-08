import { defineComponent } from '@nuxtjs/composition-api'
import EventDashletDuration from './EventDashletDuration.vue'

export default {
  component: EventDashletDuration,
  title: 'event/dashlet/EventDashletDuration',
}

const Template = (_: never, { argTypes }: any) =>
  defineComponent({
    components: { EventDashletDuration },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<EventDashletDuration v-bind="$props">EventDashletDuration</EventDashletDuration>',
  })

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  event: {
    start: '1970-01-01 00:00:00+00',
    end: '1970-01-01 00:00:00+00',
  },
}
