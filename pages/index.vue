<template>
  <div class="w-screen overflow-x-hidden">
      <div class="fixed w-full inset-x-0 top-0 overflow-x-hidden">
        <Header />
        </div>
      
      <div class="ml-4 mt-32 grid content-start overflow-y-scroll w-full overflow-x-hidden">
            <h1 class="font-bold text-2xl text-white">My Playlists</h1>
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
      <div class="ml-4 mr-4 grid content-start overflow-y-scroll w-full mt-9 overflow-x-hidden">
            <h1 class="font-bold text-2xl text-white">Recently played</h1>
            <ul class="playlist-list grid gap-x-20 gap-y-4 grid-cols-2 grid-rows-2 overflow-x-scroll mt-4">
                <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 bg-graybg">
                    <div class="flex space-x-3 items-center">
                        <div class="bg-clocks bg-cover h-12 w-12 rounded-xl"></div>
                        <div class="flex flex-col">
                            <h3 class="text-white font-bold">Clocks</h3>
                            <span class="text-gray text-xs">Coldplay</span>
                        </div>
                    </div>
                    <span class="text-gray font-semibold text-sm">5:07</span>
                </li>
                <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 bg-graybg">
                    <div class="flex space-x-3 items-center">
                        <div class="bg-time bg-cover h-12 w-12 rounded-xl"></div>
                        <div class="flex flex-col">
                            <h3 class="text-white font-bold">Time</h3>
                            <span class="text-gray text-xs">Hans Zimmer</span>
                        </div>
                    </div>
                    <span class="text-gray font-semibold text-sm">4:35</span>
                </li>
                <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 bg-graybg">
                    <div class="flex space-x-3 items-center">
                        <div class="bg-watsky bg-cover h-12 w-12 rounded-xl"></div>
                        <div class="flex flex-col">
                            <h3 class="text-white font-bold">Embrace the Quake</h3>
                            <span class="text-gray text-xs">Watsky</span>
                        </div>
                    </div>
                    <span class="text-gray font-semibold text-sm">4:16</span>
                </li>
                <li class="flex items-center justify-between pr-4 py-2 pl-2 rounded-2xl w-64 bg-graybg">
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
      <div class="ml-4 grid content-start overflow-y-scroll w-full mt-9 overflow-x-hidden">
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
      <div class="ml-4 mb-40 grid content-start overflow-y-scroll w-full mt-9">
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
        

    <div class="fixed w-full inset-x-0 bottom-0 overflow-x-hidden">
        <div class="m-2">
            <Player />
        </div>
        
        <Tabbar />
    </div>
      
  </div>

</template>

<script>
export default {}
</script>

<style>
body{
    background-color: #13111B;
}
.playlist-list::-webkit-scrollbar{
    display: none;
}
.playlis-list{
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;    
}
</style>