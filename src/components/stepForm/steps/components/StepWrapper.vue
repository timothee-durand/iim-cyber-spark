<script setup lang="ts">
import {useStore} from "../../../base/styleStore.ts";

const storeCss = useStore()
</script>

<template>
  <div class="wrapper">
    <div class="step" :style="{'font-size' : storeCss.size}">
      <div class="step__question" :style="{'opacity' : storeCss.opacity}">
        <slot name="question"/>
      </div>
      <div class="step__description" :style="{'opacity' : storeCss.opacity}">
        <slot name="description"/>
      </div>
      <div class="step__input">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../vars";
.wrapper {
  padding: 0 2rem;
  width: 100%;
}
.step {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  max-width: $stepMaxWidth;
  width: 100%;
  margin: 0 auto;
  position: relative;

  &__question {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  &__input {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
}
</style>
