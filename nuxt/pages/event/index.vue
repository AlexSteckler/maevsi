<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <EventList />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// data
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
  title: Veranstaltungen entdecken
en:
  title: Explore events
</i18n>
