<template>
  <IconArchive v-if="isArchived" :title="t('archived')" />
  <IconGlobe v-else-if="visibility === 'PUBLIC'" :title="t('public')" />
  <IconEyeOff v-else-if="visibility === 'PRIVATE'" :title="t('private')" />
  <IconBug v-else :title="t('bug')" />
</template>

<script setup lang="ts">
export interface Props {
  isArchived?: boolean
  visibility: string
}
withDefaults(defineProps<Props>(), {
  isArchived: false,
})

const { t } = useI18n()
</script>

<i18n lang="yml">
de:
  archived: archiviert
  bug: Bug
  private: privat
  public: öffentlich
en:
  archived: archived
  bug: bug
  private: private
  public: public
</i18n>
