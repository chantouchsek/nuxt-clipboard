interface CopyTextInterface {
    action: string,
    text: string,
    trigger: String | HTMLElement | HTMLCollection | NodeList,
    clearSelection: () => void
}
declare module '@nuxt/types' {
    interface Context {
        $clipboardConfig: {
            autoSetContainer: boolean,
            appendToBody: boolean
        }
        $copyText(text: string, container?: object | HTMLElement): Promise<CopyTextInterface>
    }
    interface NuxtAppOptions {
        $clipboardConfig: {
            autoSetContainer: boolean,
            appendToBody: boolean
        }
        $copyText(text: string, container?: object | HTMLElement): Promise<CopyTextInterface>
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $clipboardConfig: {
            autoSetContainer: boolean,
            appendToBody: boolean
        }
        $copyText(text: string, container?: object | HTMLElement): Promise<CopyTextInterface>;
    }
}
