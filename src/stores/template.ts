import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('template', () => {
  const appTheme = ref<'dark' | 'light'>('light')
  const appBtn = reactive({
    bg: '#9e349b', hover: '#9e349be6'
  })
  const appColor = reactive({
    bg: '#490d47'
  })


  function toggleTheme() {
    appTheme.value = appTheme.value == 'dark' ? 'light' : 'dark';
  }

  return {
    appTheme,
    toggleTheme,
    appBtn,
    appColor,
  }
})
