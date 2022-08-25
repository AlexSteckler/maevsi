import { defineComponent } from 'vue'
import IconImages from './IconImages.vue'

const argTypes = { click: { action: 'click' } }
type ArgTypesType = { argTypes: typeof argTypes }

export default {
  component: IconImages,
  title: 'icon/IconImages',
  argTypes,
}

const Template = (_: never, { argTypes }: ArgTypesType) =>
  defineComponent({
    components: { IconImages },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<IconImages v-bind="$props" @click="click">IconImages</IconImages>',
  })

export const Default = Template.bind({})
