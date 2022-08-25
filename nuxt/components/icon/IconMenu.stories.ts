import { defineComponent } from 'vue'
import IconMenu from './IconMenu.vue'

const argTypes = { click: { action: 'click' } }
type ArgTypesType = { argTypes: typeof argTypes }

export default {
  component: IconMenu,
  title: 'icon/IconMenu',
  argTypes,
}

const Template = (_: never, { argTypes }: ArgTypesType) =>
  defineComponent({
    components: { IconMenu },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<IconMenu v-bind="$props" @click="click">IconMenu</IconMenu>',
  })

export const Default = Template.bind({})
