import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useTemplateStore = defineStore('template', () => {

  // Colors & Themes
  const appTheme = useStorage<'light' | 'dark'>('templateMode', 'light')
  function toggleTheme() {
    appTheme.value = appTheme.value == 'dark' ? 'light' : 'dark';
  }


  // Data
  const sidebarmenu = reactive([
    { title: "Dashboard", icon: "<i class='bi bi-columns-gap'></i>", link: "/account/dashboard" },
    { title: "Tables", icon: " <i class='bi bi-table'></i>", link: "/account/tables" },
    { title: "Charts", icon: "<i class='bi bi-graph-up'></i>", link: "/account/charts" },
    { title: "Elements", icon: "<i class='bi bi-diagram-2-fill'></i>", link: "/account/elements" },
    { title: "Blank Page", icon: "<i class='bi bi-file-earmark'></i>", link: "/account/blank-page" },
    {
      title: "Dropdown",
      icon: " <i class='bi bi-bar-chart-fill'></i>",
      children: [
        { title: "Dropdown Link1", link: "/account/dropdown1" },
        { title: "Dropdown Link2", link: "/account/dropdown2" },
        { title: "Dropdown Link3", link: "/account/dropdown3" }
      ]
    },
  ]);



  return {
    appTheme,
    toggleTheme,
    sidebarmenu
  }
})
