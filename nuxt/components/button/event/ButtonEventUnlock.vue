<template>
  <ButtonColored
    :aria-label="t('eventUnlock')"
    :to="localePath('/task/event/unlock')"
    @click="$emit('click')"
  >
    {{ t('eventUnlock') }}
    <template #prefix>
      <IconKey />
    </template>
  </ButtonColored>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<i18n lang="yml">
de:
  eventUnlock: Einladungscode eingeben
en:
  eventUnlock: Enter invitation code
</i18n>
