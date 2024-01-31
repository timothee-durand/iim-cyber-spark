import {defineStore} from "pinia";

interface FormState {
    type: "ia" | "human" | "cyborg" | null
    connexion: "wifi" | "wired" | "bluetooth" | null
    port: "rJ45" | "jack" | "usb" | null
    processeur: "eco-logic" | "virtu-sync" | "hyper-thread" | null
    autonomy: number
}

export const useFormStepStore = defineStore('form', {
    state: (): FormState => ({
        type: null,
        connexion: null,
        port: null,
        processeur: null,
        autonomy: 50
    }),
    getters: {
        isValid(state) {
            return state.type !== null && state.connexion !== null
        }
    },
    actions: {},
})