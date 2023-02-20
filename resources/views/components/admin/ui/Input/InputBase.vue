<template>
  <input
    class="form-control"
    :value="modelValue"
    :type="type"
    :class="inputClass"
    :placeholder="placeholder"
    @input="emitInput"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";

type InputSize = "sm" | "md" | "lg";
type InputType =
  | "button"
  | "checkbox"
  | "text"
  | "number"
  | "date"
  | "email"
  | "hidden"
  | "file"
  | "password"
  | "range"
  | "reset"
  | "submit"
  | "tel"
  | "time"
  | "url"
  | "week";

const sizes = {
  sm: "form-control-sm",
  md: "",
  lg: "form-control-lg",
};

const getClassSize = (size: InputSize) => sizes[size];

interface Props {
  type?: InputType;
  size?: InputSize;
  modelValue?: string;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  modelValue: "",
  placeholder: "",
  size: "md",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | null): void;
}>();

const emitInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

const inputClass = computed(() => [getClassSize(props.size)]);
</script>
