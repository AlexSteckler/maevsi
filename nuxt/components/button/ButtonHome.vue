<template>
  <ButtonColored
    :aria-label="t('home')"
    :to="localePath('/')"
    @click="$emit('click')"
  >
    {{ t('home') }}
    <template #prefix>
      <IconHome />
    </template>
  </ButtonColored>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<i18n lang="yml">
de:
  home: Nach Hause
en:
  home: Head home
</i18n>
