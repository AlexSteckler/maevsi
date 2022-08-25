import { defineComponent } from 'vue'
import LoaderIndicatorSpinner from './LoaderIndicatorSpinner.vue'

export default {
  component: LoaderIndicatorSpinner,
  title: 'loader/LoaderIndicatorSpinner',
}

const Template = (_: never, { argTypes }: any) =>
  defineComponent({
    components: { LoaderIndicatorSpinner },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<div class="h-8 w-8"><LoaderIndicatorSpinner v-bind="$props">LoaderIndicatorSpinner</LoaderIndicatorSpinner></div>',
  })

export const Default = Template.bind({})
