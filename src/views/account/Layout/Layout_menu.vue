<template>
    <ul class="nav flex-column">
        <li v-for="(item, index) in templateStore.sidebarmenu" :key="index" class="nav-item">
            <!-- If the item has children (dropdown menu) -->
            <template v-if="item.children">
                <a class="nav-link text-dynamic" data-bs-toggle="collapse" :href="'#submenu' + index"
                    @click="toggleMenu(index)">
                    <span class="me-2" v-html="item.icon"></span>
                    {{ item.title }}
                    <i :class="menuState[index] ? 'bi bi-chevron-up' : 'bi bi-chevron-down'" class="float-end"></i>
                </a>
                <ul :id="'submenu' + index" class="collapse list-unstyled ps-3"
                    @shown.bs.collapse="menuState[index] = true" @hidden.bs.collapse="menuState[index] = false">
                    <li v-for="(subItem, subIndex) in item.children" :key="subIndex">
                        <router-link :to="subItem.link" class="nav-link submenu text-dynamic">
                            {{ subItem.title }}
                        </router-link>
                    </li>
                </ul>
            </template>

            <!-- If it's a regular menu item -->
            <template v-else>
                <router-link :to="item.link" class="nav-link text-dynamic">
                    <span class="me-2" v-html="item.icon"></span>
                    {{ item.title }}</router-link>
            </template>
        </li>
    </ul>


</template>

<script setup lang="ts">
import { useTemplateStore } from "@/stores/template";
import { reactive } from "vue";

const templateStore = useTemplateStore()

const menuState = reactive<any>({});

const toggleMenu = (index: any) => {
    menuState[index] = !menuState[index];
};

</script>


<style scoped>
.bi {
    transition: transform 0.3s ease;
}

.nav-link {
    transition: all ease-in-out 0.4s;
}

.nav-link:not(.submenu) {
    margin-block: 6px;
}

.nav-link:hover {
    transform: translateX(5px);
    color: var(--theme-color);
}

.router-link-exact-active {
    color: var(--theme-color) !important;
    font-weight: bold;
    transform: translateX(5px);
}
</style>