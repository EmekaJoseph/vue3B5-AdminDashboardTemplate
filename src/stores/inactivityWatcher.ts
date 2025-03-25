import { ref, onMounted, onUnmounted } from 'vue';
// import { useAuthStore } from './useAuthStore';
// import axios from 'axios';

export function useIdleLogout() {
    // const authStore = useAuthStore()
    const timeout = ref<any>(null);
    const timeSet: any = import.meta.env.VITE_INACTIVITY_LOGOUT || 5
    const inactivityTime = timeSet * 60 * 1000;



    const resetTimer = () => {
        console.log('inactivity: ', timeSet);
        if (timeout.value) clearTimeout(timeout.value);
        timeout.value = setTimeout(async () => {
            // await axios.post('logout');
            // authStore.logout();
        }, inactivityTime);
    };

    onMounted(() => {
        document.addEventListener('mousemove', resetTimer);
        document.addEventListener('keydown', resetTimer);
        resetTimer(); // Start timer
    });

    onUnmounted(() => {
        document.removeEventListener('mousemove', resetTimer);
        document.removeEventListener('keydown', resetTimer);
        clearTimeout(timeout.value);
    });
}
