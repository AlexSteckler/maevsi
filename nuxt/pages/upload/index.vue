<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- "ImageUploadGallery" must come after "ModalImageSelection" for them to overlay properly! -->
    <ImageUploadGallery :username="signedInUsername" />
  </div>
</template>

<script setup lang="ts">
import { useMaevsiStore } from '~/store'

definePageMeta({
  middleware: [
    function (_to: any, _from: any) {
      const store = useMaevsiStore()

      if (!store.signedInUsername) {
        throw createError({ statusCode: 403 })
      }
    },
  ],
})

const { t } = useI18n()
const store = useMaevsiStore()

// data
const signedInUsername = store.signedInUsername
const title = t('title')

// initialization
useHeadDefault(title)
</script>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<i18n lang="yml">
de:
  title: Bildgalerie
en:
  title: Image gallery
</i18n>
