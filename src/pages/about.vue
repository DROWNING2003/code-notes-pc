<script setup>
import { MdPreview } from 'md-editor-v3';
// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';
useHead({
    title: 'CodeNotes',
});
const text = ref('```go awdawda');
const mode = ref(false)
const id = 'preview-only';
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
    ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
    : undefined;
const thisYear = new Date().getFullYear();
</script>
<template>
    <header class="bg-white shadow-sm">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <a class="block font-black leading-7 text-4xl tracking-tighter " href="#">
                        Code Notes
                    </a>
                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                            </li>
                            <li>
                                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                            </li>
                            <li>
                                <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="bg-white min-h-screen-4rem">


        <div class="min-h-screen-4rem flex items-center justify-center flex-col">
            <img src="../assets/about.png" class="absolute left-4 top-[80px] z-0 bg-cover h-[680px] w-[690px]">

            <h1 style="z-index: 10; line-height: normal;font-size: 72px;">方便的</h1>
            <h1 style="z-index: 10;line-height: normal;font-size: 72px;">CodeNotes</h1>
            <p style="text-align: center; z-index: 10;font-weight: normal;font-size: 24px;width: 945px;height: 80px;">
                CodeNotes是一个简洁的代码小抄，用于分享和备忘录。<br>
                “CodeNotes 一应俱全的编程利器，应用覆盖命令行、网页、应用、VSCode插件及SDK。
            </p>
            <div style="z-index: 10;">
                <button
                    class="inline-block shrink-0 rounded-md border bg-[#1D1D1F] mx-2 px-12 py-3 text-sm  font-medium text-white transition   ">
                    快速使用
                </button>
                <button class="inline-block shrink-0 rounded-md border px-12 py-3  mx-2 text-sm   font-medium  transition ">
                    github
                </button>
            </div>
        </div>
        <footer class="py-6 relative z-10 text-sm bottom-0 text-center text-gray-700">
            <p>
                CodeNotes by
                <a class="underline" href="https://xn--1rwt7c.online/">@DROWNING</a>
                &copy; 2024-{{ thisYear }}.
                <template v-if="BUILD_DATE">
                    Site built {{ BUILD_DATE.toLocaleDateString() }}.
                </template>
                <template v-else> Development mode. </template>
            </p>
        </footer>
    </section>
</template>

<style scoped>
.min-h-screen-4rem {
    min-height: calc(100vh - 9rem);
}

::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
    background: transparent;
}
</style>
