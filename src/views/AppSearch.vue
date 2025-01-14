<script setup lang="ts">
import Card from 'primevue/card';
import { computed, type ComputedRef, type Ref, ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import type { User } from '@/types';
import { useIndexStore } from '@/store';

const value: Ref<string> = ref('');

const indexStore = useIndexStore();

const filterData: ComputedRef<User[]> = computed(() => {
  return indexStore.getData.filter((item: User) =>
    item.nickname.toString().toLowerCase().includes(value.value.toString().toLowerCase())
  );
});
</script>

<template>
  <div class="flex items-center justify-center h-lvh">
    <Card class="card">
      <template #title>Поиск обьектов</template>
      <template #content>
        <div>
          <SearchBar v-model:value="value" :hint="true" v-model:data="filterData" />
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
