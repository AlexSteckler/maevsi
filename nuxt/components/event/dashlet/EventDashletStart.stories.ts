import MockDate from 'mockdate'

import { defineComponent } from '#app'
import EventDashletStart from './EventDashletStart.vue'

MockDate.set('1970-01-01 00:00:00')

export default {
  component: EventDashletStart,
  title: 'event/dashlet/EventDashletStart',
}

const Template = (_: never, { argTypes }: any) =>
  defineComponent({
    components: { EventDashletStart },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<EventDashletStart v-bind="$props">EventDashletStart</EventDashletStart>',
  })

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  event: {
    start: new Date(),
  },
}
