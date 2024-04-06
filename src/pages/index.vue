<script setup lang="ts">
useHead({
  title: 'CodeNotes',
});

const mode = ref(false)
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined;
const thisYear = new Date().getFullYear();
</script>
<template>
  <header class="bg-white" style="box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);">
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
    <div class="lg:grid lg:min-h-screen-4rem lg:grid-cols-12">
      <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img alt="" src="@/assets/codenotes_1.png" class="absolute inset-0 h-full w-full object-cover" />
      </aside>

      <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div v-if="!mode" class="max-w-xl lg:max-w-3xl">
          <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            登录
          </h1>

          <form action="#" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 ">
              <label for="account" class="block text-sm font-medium text-gray-700">
                账号
              </label>

              <input type="text" id="account" name="account"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>

            <div class="col-span-6 sm:col-span-full">
              <label for="密码" class="block text-sm font-medium text-gray-700"> 密码 </label>

              <input type="password" id="password" name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>

            <div v-if="mode" class="col-span-6 sm:col-span-3">
              <label for="Password" class="block text-sm font-medium text-gray-700"> 确认密码 </label>

              <input type="password" id="Password" name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border bg-[#1D1D1F] px-12 py-3 text-sm w-full sm:w-[468.66px] font-medium text-white transition   ">
                登录
              </button>
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button @click="mode = true"
                class="inline-block shrink-0 rounded-md border px-12 py-3 text-sm w-full sm:w-[468.66px] font-medium  transition ">
                现在注册
              </button>
            </div>
          </form>
        </div>
        <div v-if="mode" class="max-w-xl lg:max-w-3xl">
          <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            注册
          </h1>

          <form action="#" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 ">
              <label for="account" class="block text-sm font-medium text-gray-700">
                账号
              </label>

              <input type="text" id="account" name="account"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="密码" class="block text-sm font-medium text-gray-700"> 密码 </label>

              <input type="password" id="password" name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>

            <div v-if="mode" class="col-span-6 sm:col-span-3">
              <label for="Password" class="block text-sm font-medium text-gray-700"> 确认密码 </label>

              <input type="password" id="Password" name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button 
                class="inline-block shrink-0 rounded-md border bg-[#1D1D1F] px-12 py-3 text-sm w-full sm:w-[468.66px] font-medium text-white transition   ">
                注册
              </button>
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
              @click="mode = false" 
                class="inline-block shrink-0 rounded-md border px-12 py-3 text-sm w-full sm:w-[468.66px] font-medium  transition ">
                我有账号
              </button>
            </div>
          </form>
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
  min-height: calc(100vh - 4rem);
}
</style>
