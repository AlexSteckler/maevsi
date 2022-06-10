import { defineComponent } from '#app'
import IconExclamationCircle from './IconExclamationCircle.vue'

const argTypes = { click: { action: 'click' } }
type ArgTypesType = { argTypes: typeof argTypes }

export default {
  component: IconExclamationCircle,
  title: 'icon/IconExclamationCircle',
  argTypes,
}

const Template = (_: never, { argTypes }: ArgTypesType) =>
  defineComponent({
    components: { IconExclamationCircle },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<IconExclamationCircle v-bind="$props" @click="click">IconExclamationCircle</IconExclamationCircle>',
  })

export const Default = Template.bind({})
