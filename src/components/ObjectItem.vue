<script setup lang="ts">
import { useIndexStore } from '@/store'
import { onMounted, Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
import { user } from '@/types'
import Card from 'primevue/card'
const indexStore = useIndexStore()
const route = useRoute()
const item: Ref<user | undefined> = ref()
onMounted(() => {
  let nickname = route.params.nickname
  item.value = indexStore.getData.find((item) => item.nickname === nickname)
})
</script>

<template>
  <div class="flex justify-center items-center h-lvh">
    <Card class="card">
      <template #content>
        <div>
          <div class="text-center font-semibold text-xl">{{ item?.nickname }}</div>
          <div class="mt-4 text-center">
            <div class="font-semibold text-lg">Описание</div>
            <div>{{ item?.description }}</div>
          </div>
          <div class="mt-4 text-center">
            <div class="font-semibold text-lg">Уровень скила</div>
            <div>{{ item?.skillLevel }}</div>
          </div>
          <div class="mt-4 text-center">
            <div class="font-semibold text-lg">Любимая игра</div>
            <div>{{ item?.favoriteGame }}</div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped lang="sass">
.card
  max-width: 600px
  width: 100%
</style>
