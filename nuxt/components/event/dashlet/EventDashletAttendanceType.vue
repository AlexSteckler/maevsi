<template>
  <EventDashlet v-if="event.isInPerson || event.isRemote">
    <span class="flex gap-2">
      <IconHandshake v-if="event.isInPerson" :title="t('inPerson')" />
      <IconWifi v-if="event.isRemote" :title="t('remote')" />
    </span>
    {{
      [
        ...(event.isInPerson ? [t('inPerson')] : []),
        ...(event.isRemote ? [t('remote')] : []),
      ].join(', ')
    }}
  </EventDashlet>
</template>

<script setup lang="ts">
import { Event } from '~/types/event'

export interface Props {
  event: Event
}
withDefaults(defineProps<Props>(), {})

const { t } = useI18n()
</script>

<i18n lang="yml">
de:
  inPerson: vor Ort
  remote: digital
en:
  inPerson: in person
  remote: remote
</i18n>
