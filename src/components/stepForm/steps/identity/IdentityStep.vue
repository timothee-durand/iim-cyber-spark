<script setup lang="ts">
import StepWrapper from "../components/StepWrapper.vue";
import {useFormStepStore} from "../../formStore.ts";
import Robot from "./robot.vue";
import TitleNeon from "../../../base/TitleNeon.vue";
import {computed} from "vue";
import {useStore} from "../../../base/styleStore.ts";
const store = useFormStepStore()
const cssStore = useStore()
const styles = computed(() => ({
    '--input-color': cssStore.background,
  })

)
</script>

<template>
<StepWrapper class="identity" :style="styles">
  <template #question>
    <TitleNeon tag="h3" text="Identity" />
  </template>
  <template #description>
    Initiate the registration of your identity.
  </template>
  <div class="robot">
    <Robot />
  </div>
  <input type="text" v-model="store.name" placeholder="My name"/>
</StepWrapper>
</template>

<style scoped lang="scss">
@import "../vars";
$inputWidth: 390px;
input {
  appearance: none;
  border: var(--input-color) 2px solid;
  background: transparent;
  padding: 1rem 1.5rem;
  color: white;
  transition: box-shadow 0.2s ease-in-out;
  font-size: 1.2rem;
  width: $inputWidth;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px var(--input-color), 0 0 40px var(--input-color);
  }
}
.robot {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - $inputWidth);
  overflow: hidden;
  height: 100%;

  svg {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
