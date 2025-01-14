import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import type { user } from '@/types'
export const useIndexStore = defineStore('IndexStore', () => {
  const data: Ref<user[]> = ref([
    {
      id: 1,
      nickname: 'AeroXtreme',
      description: 'Software engineer from New York',
      skillLevel: 'Expert',
      favoriteGame: 'Fortnite'
    },
    {
      id: 2,
      nickname: 'AeroStormer',
      description: 'Marketing specialist from London',
      skillLevel: 'Advanced',
      favoriteGame: 'Overwatch'
    },
    {
      id: 3,
      nickname: 'AeroFusion',
      description: 'Graphic designer from Los Angeles',
      skillLevel: 'Beginner',
      favoriteGame: 'Minecraft'
    },
    {
      id: 4,
      nickname: 'AeroPulse',
      description: 'Data analyst from Chicago',
      skillLevel: 'Intermediate',
      favoriteGame: 'League of Legends'
    },
    {
      id: 5,
      nickname: 'AeroRush',
      description: 'Full-stack developer from San Francisco',
      skillLevel: 'Expert',
      favoriteGame: 'Apex Legends'
    },
    {
      id: 6,
      nickname: 'AeroBlast',
      description: 'UX designer from Toronto',
      skillLevel: 'Advanced',
      favoriteGame: 'Rainbow Six Siege'
    },
    {
      id: 7,
      nickname: 'AeroStrike',
      description: 'Product manager from Seoul',
      skillLevel: 'Intermediate',
      favoriteGame: "PlayerUnknown's Battlegrounds"
    },
    {
      id: 8,
      nickname: 'AeroFlux',
      description: 'AI researcher from Tokyo',
      skillLevel: 'Expert',
      favoriteGame: 'Dota 2'
    },
    {
      id: 9,
      nickname: 'AeroSurge',
      description: 'Content writer from Paris',
      skillLevel: 'Beginner',
      favoriteGame: 'World of Warcraft'
    },
    {
      id: 10,
      nickname: 'AeroApex',
      description: 'Cybersecurity expert from Berlin',
      skillLevel: 'Advanced',
      favoriteGame: 'Call of Duty'
    },
    {
      id: 11,
      nickname: 'AeroVortex',
      description: 'Digital artist from Mumbai',
      skillLevel: 'Intermediate',
      favoriteGame: 'The Elder Scrolls V: Skyrim'
    },
    {
      id: 12,
      nickname: 'AeroFury',
      description: 'Financial analyst from Hong Kong',
      skillLevel: 'Expert',
      favoriteGame: 'Halo'
    },
    {
      id: 13,
      nickname: 'AeroRampage',
      description: 'Environmental scientist from Sydney',
      skillLevel: 'Beginner',
      favoriteGame: 'The Last of Us'
    },
    {
      id: 14,
      nickname: 'AeroTurbo',
      description: 'Journalist from Madrid',
      skillLevel: 'Advanced',
      favoriteGame: "Tom Clancy's Ghost Recon"
    },
    {
      id: 15,
      nickname: 'AeroBlaze',
      description: 'Mechanical engineer from Detroit',
      skillLevel: 'Intermediate',
      favoriteGame: 'Diablo III'
    },
    {
      id: 16,
      nickname: 'AeroQuake',
      description: 'Computer scientist from Beijing',
      skillLevel: 'Expert',
      favoriteGame: 'StarCraft II'
    },
    {
      id: 17,
      nickname: 'AeroThunder',
      description: 'Electrical engineer from Moscow',
      skillLevel: 'Advanced',
      favoriteGame: 'Warframe'
    },
    {
      id: 18,
      nickname: 'AeroNova',
      description: 'Biologist from Rio de Janeiro',
      skillLevel: 'Beginner',
      favoriteGame: 'The Sims'
    },
    {
      id: 19,
      nickname: 'AeroSonic',
      description: 'Mathematician from Buenos Aires',
      skillLevel: 'Intermediate',
      favoriteGame: 'Team Fortress 2'
    },
    {
      id: 20,
      nickname: 'AeroCosmic',
      description: 'Physicist from Amsterdam',
      skillLevel: 'Expert',
      favoriteGame: 'Civilization VI'
    }
  ])

  const getData = computed(() => {
    return data.value
  })

  return {
    getData
  }
})
