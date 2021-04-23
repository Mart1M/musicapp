<template>
  <div class="sm:grid sm:grid-cols-12 flex items-center justify-between pt-10 sm:px-8 px-4 pb-4 bg-bg">
    <div class="sm:col-span-9 flex items-center sm:space-x-56 w-full">
      <div class="hidden sm:flex">
        <img
          src="../assets/img/logo.svg"
          alt=""
        >
      </div>
      <div class="flex items-center sm:space-x-8 w-full">
        <div class="sm:flex sm:space-x-8 hidden">
          <a href=""><img
              src="../assets/icons/chevron-left.svg"
              alt=""
            ></a>
          <a href=""><img
              src="../assets/icons/chevron-right.svg"
              alt=""
            ></a>
        </div>
        <div class="flex space-x-4 bg-graybg px-4 py-2 rounded-lg sm:w-96 w-full">
          <img
            src="../assets/icons/search.svg"
            alt=""
            srcset=""
          >
          <input
            type="search"
            class="bg-graybg w-full text-white"
            name=""
            id=""
            placeholder="Search..."
          >
        </div>
      </div>
    </div>

    <div class="flex items-center space-x-6 justify-end ml-4 sm:col-span-3">
      <a href="">
        <img
          src="../assets/icons/settings.svg"
          alt=""
          class="w-8"
        >
      </a>
      <div class="flex items-center sm:space-x-4">
        <span class="hidden sm:flex text-gray font-bold">Jane</span>
        <img
          src="../assets/icons/profil.png"
          alt=""
          srcset=""
          class="w-12"
        >
      </div>

    </div>
  </div>
</template>

