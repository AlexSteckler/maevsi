import { defineComponent } from 'vue'
import LoaderIndicatorText from './LoaderIndicatorText.vue'

export default {
  component: LoaderIndicatorText,
  title: 'loader/LoaderIndicatorText',
}

const Template = (_: never, { argTypes }: any) =>
  defineComponent({
    components: { LoaderIndicatorText },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<LoaderIndicatorText v-bind="$props">LoaderIndicatorText</LoaderIndicatorText>',
  })

export const Default = Template.bind({})
