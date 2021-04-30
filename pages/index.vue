<template>
  <div class="overflow-x-hidden">
    <div class="text-white hidden sm:flex flex-col w-2/12 fixed h-screen space-y-10 mt-40 px-8">
      <div class="flex items-center space-x-0.5 font-bold -m-1.5">
        <img src="../assets/icons/home.svg" alt="">
        <a href="">Home</a>
      </div>
      <div class="flex items-center space-x-2 font-bold menuitems">
        <img src="../assets/icons/headphones.svg" alt="">
        <a href="" class="text-inactive">Playlists</a>
      </div>
      <div class="flex items-center space-x-2 font-bold menuitems">
        <img src="../assets/icons/compass.svg" alt="">
        <a href="" class="text-inactive">Explorer</a>
      </div>
      <div class="flex items-center space-x-2 font-bold menuitems">
        <img src="../assets/icons/radio.svg" alt="">
        <a href="" class="text-inactive">Radio</a>
      </div>
    </div>
    <div class="sm:flex sm:ml-72">
      <div class="w-full">
      <div class="fixed sm:w-full sm:hidden inset-x-0 top-0 overflow-x-hidden">
        <Header />
      </div>
      <div class="fixed sm:w-full hidden sm:inline sm:right-0 top-0">
        <Header />
      </div>

      
      <div class="ml-4 mt-32 grid content-start overflow-y-scroll w-full overflow-x-hidden sm:overflow-y-hidden">
        <h1 class="font-bold text-2xl text-white ">My Playlists</h1>
        <ul class="playlist-list grid gap-40 grid-cols-5 grid-rows-1 overflow-x-scroll mt-4">
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-retro bg-cover pb-4">
            <h2 class="text-white font-bold">Retrowave</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-chill bg-cover pb-4">
            <h2 class="text-white font-bold">Chill</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-rock bg-cover pb-4">
            <h2 class="text-white font-bold">Rock Essentials</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-rock bg-cover pb-4">
            <h2 class="text-white font-bold">Retrowave</h2>
          </li>
        </ul>
      </div>
      <div class="ml-4 mr-4 pr-8 grid content-start overflow-y-scroll w-full sm:overflow-y-hidden mt-9 overflow-x-hidden">
        <h1 class="font-bold text-2xl text-white">Recently played</h1>
        <ul class="playlist-list grid gap-x-20 sm:gap-x-4 gap-y-4 grid-cols-2 grid-rows-2 overflow-x-scroll mt-4">
          <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 sm:w-full bg-graybg">
            <div class="flex space-x-3 items-center">
              <div class="bg-clocks bg-cover h-12 w-12 rounded-xl"></div>
              <div class="flex flex-col">
                <h3 class="text-white font-bold">Clocks</h3>
                <span class="text-gray text-xs">Coldplay</span>
              </div>
            </div>
            <span class="text-gray font-semibold text-sm">5:07</span>
          </li>
          <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 sm:w-full bg-graybg">
            <div class="flex space-x-3 items-center">
              <div class="bg-time bg-cover h-12 w-12 rounded-xl"></div>
              <div class="flex flex-col">
                <h3 class="text-white font-bold">Time</h3>
                <span class="text-gray text-xs">Hans Zimmer</span>
              </div>
            </div>
            <span class="text-gray font-semibold text-sm">4:35</span>
          </li>
          <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 sm:w-full bg-graybg">
            <div class="flex space-x-3 items-center">
              <div class="bg-watsky bg-cover h-12 w-12 rounded-xl"></div>
              <div class="flex flex-col">
                <h3 class="text-white font-bold">Embrace the Quake</h3>
                <span class="text-gray text-xs">Watsky</span>
              </div>
            </div>
            <span class="text-gray font-semibold text-sm">4:16</span>
          </li>
          <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 sm:w-full bg-graybg">
            <div class="flex space-x-3 items-center">
              <div class="bg-home bg-cover h-12 w-12 rounded-xl"></div>
              <div class="flex flex-col">
                <h3 class="text-white font-bold">We’re Finally Landing</h3>
                <span class="text-gray text-xs">Home</span>
              </div>
            </div>
            <span class="text-gray font-semibold text-sm">4:32</span>
          </li>
        </ul>
      </div>
      <div class="ml-4 grid content-start overflow-y-scroll w-full mt-9 overflow-x-hidden sm:overflow-y-hidden">
        <h1 class="font-bold text-2xl text-white ">Shows you might like</h1>
        <ul class="playlist-list grid gap-40 grid-cols-5 grid-rows-1 overflow-x-scroll mt-4">
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-retro bg-cover pb-4">
            <h2 class="text-white font-bold">Retrowave</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-chill bg-cover pb-4">
            <h2 class="text-white font-bold">Chill</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-rock bg-cover pb-4">
            <h2 class="text-white font-bold">Rock Essentials</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-rock bg-cover pb-4">
            <h2 class="text-white font-bold">Retrowave</h2>
          </li>
        </ul>
      </div>
      <div class="ml-4 mb-40 grid content-start overflow-y-scroll w-full mt-9 sm:overflow-y-hidden">
        <h1 class="font-bold text-2xl text-white ">Top 10</h1>
        <ul class="playlist-list grid gap-40 grid-cols-5 grid-rows-1 overflow-x-scroll mt-4">
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-retro bg-cover pb-4">
            <h2 class="text-white font-bold">Retrowave</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-chill bg-cover pb-4">
            <h2 class="text-white font-bold">Chill</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-rock bg-cover pb-4">
            <h2 class="text-white font-bold">Rock Essentials</h2>
          </li>
          <li class="flex flex-col justify-end items-center rounded-2xl w-36 h-36 bg-rock bg-cover pb-4">
            <h2 class="text-white font-bold">Retrowave</h2>
          </li>
        </ul>
      </div>
      <div class="fixed w-full inset-x-0 bottom-0 overflow-x-hidden sm:hidden">
        <div class="m-2">
          <Player />
        </div>
        <Tabbar />
      </div>
      <div class="fixed w-full inset-x-0 bottom-0 overflow-x-hidden hidden sm:flex">
        <PlayerDesktop />
      </div>
    </div>
    <div class="hidden sm:flex flex-col text-white pt-32 w-1/3 pr-8">
      <div class="w-full px-4 pt-4 rounded-2xl pr-8 bg-gradient-to-r from-primaryopacity to-secondaryopacity">
        <h2 class="font-bold text-lg">Favorites Artists</h2>
        <ul class="mt-8 w:full flex flex-col space-y-4">
          <li class="flex items-center justify-between w-64 sm:w-full">
            <div class="flex space-x-3 items-center">
              <div class="bg-coldplay bg-cover h-12 w-12 rounded-xl"></div>
              <div class="flex flex-col">
                <h3 class="text-white font-bold text-sm">Coldplay</h3>
                <span class="text-gray text-xs">31 songs in playlists</span>
              </div>
            </div>
            <img src="../assets/icons/more-vertical.svg" alt="">
          </li>
          <li class="flex items-center justify-between w-64 sm:w-full">
            <div class="flex space-x-3 items-center">
              <div class="bg-cash bg-cover h-12 w-12 rounded-xl"></div>
              <div class="flex flex-col">
                <h3 class="text-white font-bold text-sm">Johnny Cash</h3>
                <span class="text-gray text-xs">29 songs in playlists</span>
              </div>
            </div>
            <img src="../assets/icons/more-vertical.svg" alt="">
          </li>
        </ul>
        <div class="w-full flex justify-center mt-4">
          <div class="flex">
          <span class="font-semibold text-gray">More</span>
          <img src="../assets/icons/chevron-right.svg" alt="">
        </div>
        </div>
      </div>
      <div class="rounded-2xl bg-gradient-to-r from-primary to-secondary p-4 flex flex-col mt-8 w-full">
        <div class="flex flex-col bg-soundwaves bg-no-repeat bg-right">
        <h2 class="font-bold text-lg">Upgrade my account</h2>
        <a href="" class="bg-white w-full flex justify-center rounded-xl py-2 mt-20">
          <span class="text-primary font-bold">Discover</span>
          <img src="../assets/icons/chevron-right-2.svg" alt="">
        </a>
      </div>
      </div>
      
    </div>
    </div>
    
    

  </div>

</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #13111b;
}
.playlist-list::-webkit-scrollbar {
  display: none;
}
.playlist-list {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.menuitems{
  margin-left: 0;
  transition: ease 250ms;
}
.menuitems:hover{
  margin-left: 10px;
}

</style>
