import index from '../../../../pages/task/account/sign-in.vue'

import { defineComponent } from '#app'

const argTypes = { click: { action: 'click' } }
type ArgTypesType = { argTypes: typeof argTypes }

export default {
  component: index,
  title: 'page/task/account/password/sign-in',
  argTypes,
}

const Template = (_: never, { argTypes }: ArgTypesType) =>
  defineComponent({
    components: { index },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<index v-bind="$props" @click="click">index</index>',
  })

export const Default = Template.bind({})
