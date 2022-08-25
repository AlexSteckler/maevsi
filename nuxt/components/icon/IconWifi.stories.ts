import { defineComponent } from 'vue'
import IconWifi from './IconWifi.vue'

const argTypes = { click: { action: 'click' } }
type ArgTypesType = { argTypes: typeof argTypes }

export default {
  component: IconWifi,
  title: 'icon/IconWifi',
  argTypes,
}

const Template = (_: never, { argTypes }: ArgTypesType) =>
  defineComponent({
    components: { IconWifi },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<IconWifi v-bind="$props" @click="click">IconWifi</IconWifi>',
  })

export const Default = Template.bind({})
