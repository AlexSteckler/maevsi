import { graphql } from 'msw'

import { defineComponent } from 'vue'
import FormInvitation from './FormInvitation.vue'

export default {
  component: FormInvitation,
  parameters: {
    msw: [
      graphql.query('allContacts', (_req, res, ctx) => {
        return res(
          ctx.data({
            allContacts: {
              nodes: [],
              pageInfo: {
                hasNextPage: false,
                __typename: 'PageInfo',
              },
              __typename: 'ContactsConnection',
            },
          })
        )
      }),
    ],
  },
  title: 'form/invitation/FormInvitation',
}

const Template = (_: never, { argTypes }: any) =>
  defineComponent({
    components: { FormInvitation },
    props: Object.keys(argTypes),
    template:
      // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
      '<FormInvitation v-bind="$props">FormInvitation</FormInvitation>',
  })

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
  event: {},
}
