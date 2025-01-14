<script setup lang="ts">
import ListBox from 'primevue/listbox'
import { computed } from 'vue'
import { type ComputedRef, defineProps } from 'vue/dist/vue'
import type { User } from '@/types'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
  data: User[]
  selectIndex?: number
}>()

const filterData: ComputedRef<User[]> = computed(() => {
  return props.data.filter((_, index) => index < 10)
})
const pushInRoute = (data: User) => {
  router.push({
    name: 'appObjectView',
    params: { nickname: data.nickname }
  })
}
</script>

<template>
  <ListBox
    :modelValue="filterData[props.selectIndex]"
    :options="filterData"
    optionLabel="name"
    class="w-full md:w-14rem"
    listStyle="max-height:250px"
  >
    <template #option="slotProps">
      <div @click="pushInRoute(slotProps.option)">{{ slotProps.option.nickname }}</div>
    </template>
  </ListBox>
</template>

<style scoped lang="sass"></style>
