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

  <section class="bg-white mt-3 min-h-screen-4rem">


    <div class="grid min-h-screen-4rem grid-cols-12">
      <div class="hidden  md:col-span-5 md:flex md:justify-center">
        <div class="w-[323px] h-full relative"
          style="border-radius: 16px;box-shadow: 0px 4px 0px 0px #000000; border: 2px solid #1D1D1F; box-sizing: border-box; background: #FAFAFC;">
          <div class="flex flex-col gap-4 p-4 w-full h-[70vh] rounded-xl overflow-scroll overflow-x-hidden">

            <div class="p-4 rounded-lg shadow-lg break-words">
              <p>"在Tailwind CSS中，要确保文本在一个元素中自动换行，您可以使用 word-wrap 属性。在Tailwind CSS中，这可以通过使用 break-normal 类来实现，它是
                word-wrap: break-word; 的CSS等效项。"</p>
            </div>
            <div class="p-4 rounded-lg shadow-lg break-words">
              <p>"在Tailwind CSS中，要确保文本在一个元素中自动换行，您可以使用 word-wrap 属性。在Tailwind CSS中，这可以通过使用 break-normal 类来实现，它是
                word-wrap: break-word; 的CSS等效项。"</p>
            </div>


            <div class="bg-[#282c34] text-[#c4cbd2] p-4 rounded-lg shadow-lg">
              <span>Message sent successfully.</span>
            </div>
            <div class="bg-success-100 text-success-700 p-4 rounded-lg shadow-lg">
              <span>Message sent successfully.</span>
            </div>
            <div class="p-4 rounded-lg shadow-lg break-words">
              <p>"在Tailwind CSS中，要确保文本在一个元素中自动换行，您可以使用 word-wrap 属性。在Tailwind CSS中，这可以通过使用 break-normal 类来实现，它是
                word-wrap: break-word; 的CSS等效项。"</p>
            </div>
            <div class="p-4 rounded-lg shadow-lg break-words">
              <p>"在Tailwind CSS中，要确保文本在一个元素中自动换行，您可以使用 word-wrap 属性。在Tailwind CSS中，这可以通过使用 break-normal 类来实现，它是
                word-wrap: break-word; 的CSS等效项。"</p>
            </div>
          </div>

          <div class="absolute m-4 w-[90%] bottom-0">
            <label for="Search" class="sr-only"> Search </label>

            <input type="text" id="Search" placeholder="Ask AI..."
              class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm" />

            <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
              <button type="button" class="text-gray-600 hover:text-gray-700">
                <span class="sr-only">Search</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      <main class="relative block md:col-span-6  col-span-10 col-start-2">

        <div class="relative w-80% m-4">
          <label for="Search" class="sr-only"> Search </label>

          <input type="text" id="Search" placeholder="Search for..."
            class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm" />

          <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
            <button type="button" class="text-gray-600 hover:text-gray-700">
              <span class="sr-only">Search</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </span>
        </div>
        <div class="w-full h-[70vh] max-h-[300vh] flex flex-col overflow-scroll overflow-x-hidden p-4 gap-4">

          <div class="p-4 w-full  rounded-xl"
            style="border-radius: 16px;box-shadow: 0px 4px 0px 0px #000000; border: 2px solid #1D1D1F; box-sizing: border-box; background: #FAFAFC;">
            <MdPreview class="w-full h-[192px] rounded-xl" :editorId="id" :modelValue="text" />
            <div class="m-t-4 flex flex-row gap-4">
              <div class="rounded-full">
                <img class="w-14 rounded-full" src="../assets/Robin Williams.png" />
              </div>
              <span>
                <p style="font-size: 20px;font-weight: bold;line-height: 32px;color: #1D1D1F;">Robin Williams</p>
                <p style="color: #7A7D84;line-height: 24px;font-weight: normal;font-size: 14px;">Comedian</p>
              </span>
              <button
                class="inline-block shrink-0 rounded-md border bg-[#1D1D1F] ml-auto p-4 py-3 text-sm font-medium text-white">
                查看更多
              </button>
            </div>

            <!-- <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" /> -->
          </div>
          <div class="p-4 w-full  rounded-xl"
            style="border-radius: 16px;box-shadow: 0px 4px 0px 0px #000000; border: 2px solid #1D1D1F; box-sizing: border-box; background: #FAFAFC;">
            <MdPreview class="w-full h-[192px] rounded-xl" :editorId="id" :modelValue="text" />
            <div class="m-t-4 flex flex-row gap-4">
              <div class="rounded-full">
                <img class="w-14 rounded-full" src="../assets/Robin Williams.png" />
              </div>
              <span>
                <p style="font-size: 20px;font-weight: bold;line-height: 32px;color: #1D1D1F;">Robin Williams</p>
                <p style="color: #7A7D84;line-height: 24px;font-weight: normal;font-size: 14px;">Comedian</p>
              </span>
              <button
                class="inline-block shrink-0 rounded-md border bg-[#1D1D1F] ml-auto p-4 py-3 text-sm font-medium text-white">
                查看更多
              </button>
            </div>

            <!-- <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" />
            <MdPreview :editorId="id" :modelValue="text" /> -->
          </div>
          <div class="p-4 w-full  rounded-xl"
            style="border-radius: 16px;box-shadow: 0px 4px 0px 0px #000000; border: 2px solid #1D1D1F; box-sizing: border-box; background: #FAFAFC;">
            <MdPreview class="w-full h-[192px] rounded-xl" :editorId="id" :modelValue="text" />
            <div class="m-t-4 flex flex-row gap-4">
              <div class="rounded-full">
                <img class="w-14 rounded-full" src="../assets/Robin Williams.png" />
              </div>
              <span>
                <p style="font-size: 20px;font-weight: bold;line-height: 32px;color: #1D1D1F;">Robin Williams</p>
                <p style="color: #7A7D84;line-height: 24px;font-weight: normal;font-size: 14px;">Comedian</p>
              </span>
              <button
                class="inline-block shrink-0 rounded-md border bg-[#1D1D1F] ml-auto p-4 py-3 text-sm font-medium text-white">
                查看更多
              </button>
            </div>
          </div>
          <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

          <ol class="flex justify-center gap-1 text-xs font-medium">
            <li>
              <a href="#"
                class="inline-flex w-8 h-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span class="sr-only">Prev Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#"
                class="block w-8 h-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                1
              </a>
            </li>

            <li class="block w-8 h-8 rounded bg-black text-center leading-8 text-white">
              2
            </li>

            <li>
              <a href="#"
                class="block w-8 h-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                3
              </a>
            </li>

            <li>
              <a href="#"
                class="block w-8 h-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900">
                4
              </a>
            </li>

            <li>
              <a href="#"
                class="inline-flex w-8 h-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span class="sr-only">Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ol>
        </div>

      </main>


    </div>
    <footer class="py-6 text-sm bottom-0 text-center text-gray-700">
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
