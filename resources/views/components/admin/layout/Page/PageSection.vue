<template>
  <section class="section">
    <div class="section-header">
      <slot name="header" :header="header" :back-link="backLink">
        <div v-if="backLink" class="section-header-back">
          <Link :href="backLink" class="btn btn-icon">
            <i class="fas fa-arrow-left"></i>
          </Link>
        </div>
        <h1>{{ header }}</h1>
      </slot>
    </div>

    <div class="section-body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/inertia-vue3";
import { inject, watch } from "vue";

const props = withDefaults(
  defineProps<{
    header: string;
    backLink?: string;
    fullWidth?: boolean;
  }>(),
  {
    backLink: undefined,
    fullWidth: false,
  }
);

const { wrapPage } = inject("page-wrapper") as {
  wrapPage(condition: boolean): void;
};

watch(
  () => props.fullWidth,
  (value) => wrapPage(value),
  {
    immediate: true,
  }
);
</script>

<style scoped></style>
