import { defineComponent } from 'vue'
import FormAccountPasswordReset from './FormAccountPasswordReset.vue'

export default {
  component: FormAccountPasswordReset,
  title: 'form/account/password/FormAccountPasswordReset',
}

const Template = (_: never, { argTypes }: any) =>
  defineComponent({
    components: { FormAccountPasswordReset },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<FormAccountPasswordReset v-bind="$props">FormAccountPasswordReset</FormAccountPasswordReset>',
  })

export const Default = Template.bind({})
