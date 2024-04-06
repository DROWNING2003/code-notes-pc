<script setup>
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const router = useRouter();
useHead({
  title: 'CodeNotes',
});
const text = ref(`
# Hello Friends

\`\`\`python
print("Hello CodeNotes")
\`\`\`
`);

const mode = ref(false)
function To(url) {
  router.push("/"+url)
}
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
                <a @click="To('about')" class="text-gray-500 transition hover:text-gray-500/75"> About </a>
              </li>
              <li>
                <a @click="To('popular')" class="text-gray-500 transition hover:text-gray-500/75" > Popular </a>
              </li>
              <li>
                <a @click="To('projects')" class="text-gray-500 transition hover:text-gray-500/75"> Projects </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <section class="bg-white min-h-screen-4rem">
    <div class="grid mt-8 h-full grid-cols-12">
     

      <div class="hidden  md:col-span-5 lg:flex justify-items-center items-center">
        <div class="max-w-xl lg:max-w-3xl flex justify-items-center items-center flex-col">
          <div class="w-[50%] h-[360px] p-4"
            style="border-radius: 16px;box-shadow: 0px 4px 0px 0px #000000; border: 2px solid #1D1D1F; box-sizing: border-box; background: #FAFAFC;">
            <p style="width: 100%;height: 232px;font-size: 32px;font-weight: bold;line-height: 40px;" class="w-full ">
              “You are only given a little spark of madness. You mustn’t lose it.”
            </p>
            <div class="flex flex-row gap-3" style="height: 84px; width: 100%;">

              <div class="rounded-full">
                <img class="w-14 rounded-full" src="@/assets/rw.png" />
              </div>

              <span>
                <p style="font-size: 20px;font-weight: bold;line-height: 32px;color: #1D1D1F;">rw</p>
                <p style="color: #7A7D84;line-height: 24px;font-weight: normal;font-size: 14px;">Comedian</p>
              </span>
            </div>
          </div>
          <p style="color: #7A7D84;line-height: 24px;font-weight: normal;font-size: 14px;" class="m-4">
            你只有一点点的疯狂的火花,万万不可让它熄灭</p>
        </div>
      </div>
      <main class="relative block col-span-10 col-start-2 h-full lg:order-last lg:col-span-6 xl:col-span-6">
        <div class="w-full h-full p-4"
          style="border-radius: 16px;box-shadow: 0px 4px 0px 0px #000000; border: 2px solid #1D1D1F; box-sizing: border-box; background: #FAFAFC;">
          <div class="h-5 flex flex-row gap-2">
            <p class="rounded-full w-3 h-3" style="background-color:#fe6057"></p>
            <p class="rounded-full w-3 h-3" style="background-color:#fbad29"></p>
            <p class="rounded-full w-3 h-3" style="background-color:#27d13a"></p>

          </div>
          <div class="w-full bg-slate-400 min-h-[400px] rounded-xl">
            <MdEditor v-model="text" />
          </div>
        </div>
      </main>
    </div>
    <footer class="py-6 text-sm  w-full absolute bottom-0 text-center text-gray-700">
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
  min-height: calc(100vh - 4rem);
}
</style>
