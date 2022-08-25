import { defineComponent } from 'vue'
import IconDotsVertical from './IconDotsVertical.vue'

const argTypes = { click: { action: 'click' } }
type ArgTypesType = { argTypes: typeof argTypes }

export default {
  component: IconDotsVertical,
  title: 'icon/IconDotsVertical',
  argTypes,
}

const Template = (_: never, { argTypes }: ArgTypesType) =>
  defineComponent({
    components: { IconDotsVertical },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<IconDotsVertical v-bind="$props" @click="click">IconDotsVertical</IconDotsVertical>',
  })

export const Default = Template.bind({})
