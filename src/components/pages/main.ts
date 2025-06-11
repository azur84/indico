import type { DefineComponent } from "vue";
import Main from "./main.vue";
type PagesList = {
    [key: string]: DefineComponent
}
export default {
    Main
} as unknown as PagesList