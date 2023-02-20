<template>
  <div
    :id="id"
    class="modal"
    :class="{ fade: withFade }"
    tabindex="-1"
    role="dialog"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog" :class="modalDialogClass" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <h5 class="modal-title">
              {{ title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&#120;</span>
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              {{ closeText }}
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="$emit('submit', $event)"
            >
              {{ submitText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ModalSize = "sm" | "md" | "lg";

const sizes = {
  sm: "modal-sm",
  md: "",
  lg: "modal-lg",
};

const getClassSize = (size: ModalSize) => sizes[size];

const emit = defineEmits<{
  (e: "show", value: JQuery.Event): void;
  (e: "shown", value: JQuery.Event): void;
  (e: "hide", value: JQuery.Event): void;
  (e: "hidden", value: JQuery.Event): void;
  (e: "submit", value: MouseEvent): void;
}>();

const props = withDefaults(
  defineProps<{
    id: string;
    title?: string;
    closeText?: string;
    submitText?: string;
    isCenter?: boolean;
    withFade?: boolean;
    size?: ModalSize;
  }>(),
  {
    title: () => "",
    closeText: () => "Close",
    submitText: () => "Save Changes",
    isCenter: () => false,
    withFade: () => true,
    size: () => "md",
  }
);

$("body")
  .on("show.bs.modal", `#${props.id}`, function (event: JQuery.Event) {
    emit("show", event);
  })
  .on("shown.bs.modal", `#${props.id}`, function (event: JQuery.Event) {
    emit("shown", event);
  })
  .on("hide.bs.modal", `#${props.id}`, function (event: JQuery.Event) {
    emit("hide", event);
  })
  .on("hidden.bs.modal", `#${props.id}`, function (event: JQuery.Event) {
    emit("hidden", event);
  });

const modalDialogClass = computed(() => [
  {
    "modal-dialog-centered": props.isCenter,
  },
  getClassSize(props.size),
]);
</script>
