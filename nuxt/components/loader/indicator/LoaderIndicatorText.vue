<template>
  <div class="flex h-full items-center justify-center">
    <div class="animate-pulse" :title="t('globalLoading')">
      {{ t('globalLoading') }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
