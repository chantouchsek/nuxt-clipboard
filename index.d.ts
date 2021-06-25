import { PluginFunction } from "vue";

interface CopyTextInterface {
    action: string,
    text: string,
    trigger: String | HTMLElement | HTMLCollection | NodeList,
    clearSelection: () => void
}

declare module 'vue/types/vue' {
    interface Vue {
        $copyText: (text: any, container?: object | HTMLElement) => Promise<CopyTextInterface>;
    }
    interface VueConstructor {
        $copyText: (text: any, container?: object | HTMLElement) => Promise<CopyTextInterface>;
    }
}

declare class NuxtClipboard {
    static install: PluginFunction<any>;
}

export default NuxtClipboard;
