<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { defineEmits, defineProps, ref, withDefaults } from 'vue'
import HintList from '@/components/HintList.vue'
import type { user } from '@/types'
import { useRouter } from 'vue-router'
const router = useRouter()
const emit = defineEmits(['update:value'])

interface Props {
  value: string
  hint?: boolean
  data?: user[]
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  hint: false
})

const moveDown = () => {
  if (!props.data) return
  if (selectIndex.value < props.data.length - 1) selectIndex.value++
}
const moveUp = () => {
  if (!props.data) return
  if (selectIndex.value > 0) selectIndex.value--
}
const moveEnter = () => {
  if (!props.data) return
  if (selectIndex.value >= 0) {
    router.push({
      name: 'appObjectView',
      params: { nickname: props.data[selectIndex.value].nickname }
    })
  }
}
const handleInput = (value: string) => {
  emit('update:value', value)
}

const selectIndex = ref(-1)
</script>

<template>
  <div class="relative">
    <div class="flex items-center gap-2">
      <InputText
        type="text"
        :value="props.value"
        @input="handleInput($event.target.value)"
        @keydown.down="moveDown"
        @keydown.up="moveUp"
        @keydown.enter="moveEnter"
      />
      <Button icon="pi pi-search" aria-label="Submit" />
    </div>

    <div class="absolute w-full top-12" v-if="props.hint && props.value.length > 2">
      <HintList :data="props.data" v-model:selectIndex="selectIndex" />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
