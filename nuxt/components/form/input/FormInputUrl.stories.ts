import { defineComponent } from 'vue'
import FormInputUrl from './FormInputUrl.vue'

export default {
  component: FormInputUrl,
  title: 'form/input/FormInputUrl',
}

const Template = (_: never, { argTypes }: any) =>
  defineComponent({
    components: { FormInputUrl },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<FormInputUrl v-bind="$props">FormInputUrl</FormInputUrl>',
  })

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  formInput: {},
}
