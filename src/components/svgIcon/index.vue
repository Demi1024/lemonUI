<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :xlink:href="symbolId" :fill="color" ></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps,computed } from "vue";

const props = defineProps({
  class: {type:String, default: ""},
  name: { type: String, required: true },
  color: { type: String, default: "" },
});

const symbolId = computed(() => `#icon-${props.name}`);
const svgClass = computed(()=> `svg-icon ${props.class}`);
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}

</style>

