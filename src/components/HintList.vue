<script setup lang="ts">
import Listbox from 'primevue/listbox'
import { computed } from 'vue'
import { type ComputedRef, defineProps } from 'vue/dist/vue'
import type { user } from '@/types'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps<{
  data: user[]
  selectIndex?: number
}>()

const filterData: ComputedRef<user[]> = computed(() => {
  return props.data.filter((_, index) => index < 10)
})
const pushTest = (data: user) => {
  router.push({
    name: 'appObjectView',
    params: { nickname: data.nickname }
  })
}
</script>

<template>
  <Listbox
    :modelValue="filterData[props.selectIndex]"
    :options="filterData"
    optionLabel="name"
    class="w-full md:w-14rem"
    listStyle="max-height:250px"
  >
    <template #option="slotProps">
      <div @click="pushTest(slotProps.option)">{{ slotProps.option.nickname }}</div>
    </template>
  </Listbox>
</template>

<style scoped lang="sass"></style>
