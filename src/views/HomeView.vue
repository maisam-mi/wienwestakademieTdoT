<template>
  <div
    id="navbar"
    class="w-full grid grid-cols-2 bg-black lg:py-3 shadow-xl fixed"
  >
    <div
      class="col-span-1 flex justify-left lg:justify-center items-center gap-5"
    >
      <img src="/graphics/logo.png" class="w-12 sm:w-16 m-1" alt="" />
      <h1 class="text-xl sm:text-2xl" v-if="width > 640">Wienwestakademie</h1>
    </div>
    <div id="menubutton" class="col-span-1 flex justify-end" v-if="width <= 900">
      <img
        src="/graphics/menu.png"
        class="w-9 h-9 m-3"
        alt=""
        @click="menuShowed = !menuShowed"
      />
    </div>
    <div
      id="desktop"
      class="col-span-1 flex flex-row justify-center items-center gap-16 text-xl mt-0 mb-0"
      v-if="width > 900"
    >
      <a href="#startpage"><p>Startseite</p></a>
      <a href="#ziele"><p>Ziele</p></a>
      <a href="#verwendung"><p>Verwendung</p></a>
      <a href="#quellen"><p>Quellen</p></a>
      <a href="#aboutus"><p>Über uns</p></a>
    </div>
    <div
      id="mobile"
      class="col-span-2 flex flex-col justify-center items-center gap-8 text-xl mt-7 mb-2"
      v-if="menuShowed && width <= 900"
    >
      <a href="#startpage" @click="menuShowed = false"><p>Startseite</p></a>
      <a href="#ziele" @click="menuShowed = false"><p>Ziele</p></a>
      <a href="#verwendung" @click="menuShowed = false"><p>Verwendung</p></a>
      <a href="#quellen" @click="menuShowed = false"><p>Quellen</p></a>
      <a href="#aboutus" @click="menuShowed = false"><p>Über uns</p></a>
    </div>
  </div>
  <div id="page" class="sm:container mx-5 sm:mx-auto">
    <div
      id="startpage"
      class="h-screen grid sm:grid-cols-2 items-center justify-center"
    >
      <div>
        <h1 class="text-2xl sm:text-5xl mt-20 sm:mt-0">
          Was ist Wienwestakademie?
        </h1>
        <div class="mt-6 sm:mt-24 text-sm sm:text-xl grid grid-cols-12">
          <p class="col-span-4 sm:col-span-3">
            Schüler*in:<br /><br /><br /><br />Akademie:<br /><br /><br />Schüler*in:<br /><br />Akademie:
          </p>
          <p class="col-span-8 sm:col-span-6">
            Ich habe morgen PLF und ich befürchte, dass ich sicher eine Fünf
            bekomme. <br /><br />Brauchst du Hilfe? Ich kann dir helfen.
            <br /><br />Wie möchtest du mir helfen? <br /><br />Sieh dir die
            Lernvideos an und mache danach die Übungen. :)
          </p>
          <div class="col-span-0 sm:col-span-3"></div>
        </div>
      </div>
      <div class="flex justify-center">
        <img
          src="/stickers/startpage.png"
          class="w-[18rem] sm:w-[35rem]"
          alt=""
        />
      </div>
    </div>
    <div
      id="ziele"
      class="h-screen grid items-center justify-center mt-20 sm:mt-0"
    >
      <div>
        <h1 class="text-2xl sm:text-5xl">Ziele</h1>
        <div
          class="mt-6 sm:mt-24 text-sm sm:text-xl grid grid-cols-4 sm:grid-cols-12 gap-10 sm:gap-0"
        >
          <div class="col-span-4 flex flex-col items-center">
            <img
              src="/graphics/ziele/pencil.png"
              class="w-32 sm:w-44 m-5 sm:m-16"
              alt=""
            />
            <p class="mx-0 sm:mx-20">
              Die Schülerinnen und Schüler üben den Stoff vor der Prüfung.
            </p>
          </div>
          <div class="col-span-4 flex flex-col items-center">
            <img
              src="/graphics/ziele/class.png"
              class="w-32 sm:w-44 m-5 sm:m-16"
              alt=""
            />
            <p class="mx-0 sm:mx-20">
              Wenn sie den Stoff im Unterricht nicht vollständig verstehen,
              können sie über die Plattform den gesamten Stoff nachholen.
            </p>
          </div>
          <div class="col-span-4 flex flex-col items-center">
            <img
              src="/graphics/ziele/numbers.png"
              class="w-32 sm:w-44 m-5 sm:m-16"
              alt=""
            />
            <p class="mx-0 sm:mx-20">
              Die Lerninhalte sind besonders für die 1. Klasse geeignet. Es kann
              auch ein kurzer Überblick für andere Schüler*innen sein.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="verwendung"
      class="h-screen grid items-center justify-center mt-20 sm:mt-0"
    >
      <div>
        <h1 class="w-[90vw] sm:w-auto text-2xl sm:text-5xl">Verwendung</h1>
        <div
          class="mt-6 sm:mt-24 text-sm sm:text-xl grid grid-cols-4 sm:grid-cols-12 gap-10 sm:gap-0"
        >
          <div class="col-span-4 flex flex-col items-center">
            <img
              src="/graphics/verwendung/video-marketing.png"
              class="w-32 sm:w-44 m-5 sm:m-16"
              alt=""
            />
            <p class="mx-0 sm:mx-20">Schau das Lernvideo an.</p>
          </div>
          <div class="col-span-4 flex flex-col items-center">
            <img
              src="/graphics/verwendung/programming.png"
              class="w-32 sm:w-44 m-5 sm:m-16"
              alt=""
            />
            <p class="mx-0 sm:mx-20">Mach die Übung!</p>
          </div>
          <div class="col-span-4 flex flex-col items-center">
            <img
              src="/graphics/verwendung/result.png"
              class="w-32 sm:w-44 m-5 sm:m-16"
              alt=""
            />
            <p class="mx-0 sm:mx-20">Beachte das Ergebnis.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="quellen" class="h-screen grid items-center justify-center">
      <div>
        <h1 class="text-2xl sm:text-5xl">Quellen</h1>
        <p class="text-sm sm:text-2xl mt-10">
          In unserem Projekt haben wir verschiedene Programmiersprachen,
          Frameworks und Softwareanwendungen verwendet.
        </p>
        <div
          class="mt-24 text-xl grid grid-cols-4 sm:grid-cols-12 gap-10 sm:gap-0"
        >
          <div class="col-span-4 flex flex-col">
            <h1 class="text-md sm:text-2xl mb-2 sm:mb-5">
              Programmiersprachen
            </h1>
            <p class="text-sm sm:text-base">Python</p>
            <p class="text-sm sm:text-base">JavaScript</p>
            <p class="text-sm sm:text-base">C#</p>
            <p class="text-sm sm:text-base">SQL</p>
            <p class="text-sm sm:text-base">CSS</p>
          </div>
          <div class="col-span-4 flex flex-col">
            <h1 class="text-md sm:text-2xl mb-2 sm:mb-5">Software</h1>
            <p class="text-sm sm:text-base">Visual Studio Code</p>
            <p class="text-sm sm:text-base">Docker</p>
            <p class="text-sm sm:text-base">Open edX</p>
            <p class="text-sm sm:text-base">Adobe Premier Pro</p>
            <p class="text-sm sm:text-base">Adobe Audition</p>
            <p class="text-sm sm:text-base">Adobe XD</p>
            <p class="text-sm sm:text-base">Figma</p>
          </div>
          <div class="col-span-4 flex flex-col">
            <h1 class="text-md sm:text-2xl mb-2 sm:mb-5">Frameworks</h1>
            <p class="text-sm sm:text-base">Django</p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="aboutus"
      class="h-auto sm:h-screen grid items-center justify-center"
    >
      <div>
        <h1 class="text-2xl sm:text-5xl">Über uns</h1>
        <p class="text-sm sm:text-2xl mt-10">
          Der Projektbetreuer:<br />
          Miki Zehetner <br /><br />
          Die Mitglieder der Gruppe:
        </p>
        <div class="mt-24 text-xl grid sm:grid-cols-5 gap-4 mb-10 sm:mb-0">
          <div
            class="col-span-1 flex flex-col items-center gap-12 text-sm bg-white text-gray p-3 rounded-2xl"
          >
            <p class="font">Gabriel Berićetović</p>
            <img src="/graphics/user.png" class="w-40" alt="" />
            <div class="flex gap-5">
              <p>
                Klasse: <br /><br />
                Aufgabe:
              </p>
              <p class="text-center font">
                5CHITM <br /><br />
                Inhalthersteller
              </p>
            </div>
          </div>
          <div
            class="col-span-1 flex flex-col items-center gap-12 text-sm bg-white text-gray p-3 rounded-2xl"
          >
            <p class="font">Gültekin Öztürk</p>
            <img src="/graphics/user.png" class="w-40" alt="" />
            <div class="flex gap-5">
              <p>
                Klasse: <br /><br />
                Aufgabe:
              </p>
              <p class="text-center font">
                5CHITM <br /><br />
                Inhalthersteller
              </p>
            </div>
          </div>
          <div
            class="col-span-1 flex flex-col items-center gap-12 text-sm bg-white text-gray p-3 rounded-2xl"
          >
            <p class="font">Oktalon Szórádi</p>
            <img src="/graphics/user.png" class="w-40" alt="" />
            <div class="flex gap-5">
              <p>
                Klasse: <br /><br />
                Aufgabe:
              </p>
              <p class="text-center font">
                5CHITM <br /><br />
                Aufgabenhersteller
              </p>
            </div>
          </div>
          <div
            class="col-span-1 flex flex-col items-center gap-12 text-sm bg-white text-gray p-3 rounded-2xl"
          >
            <p class="font">Maisam Mohammadi</p>
            <img src="/graphics/user.png" class="w-40" alt="" />
            <div class="flex gap-5">
              <p>
                Klasse: <br /><br />
                Aufgabe:
              </p>
              <p class="text-center font">
                5CHITM <br /><br />
                Frontendentwickler
              </p>
            </div>
          </div>
          <div
            class="col-span-1 flex flex-col items-center gap-12 text-sm bg-white text-gray p-3 rounded-2xl"
          >
            <p class="font">Justin Itamah</p>
            <img src="/graphics/user.png" class="w-40" alt="" />
            <div class="flex gap-5">
              <p>
                Klasse: <br /><br />
                Aufgabe:
              </p>
              <p class="text-center font">
                5AHITN <br /><br />
                Backendentwickler
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { menu } from "caniuse-lite/data/features";
import { ref } from "vue";

const width = window.innerWidth;
const menuShowed = ref(false);
</script>
<style>
div {
  font-family: jetBrainsMono-regular;
}
.font {
  font-family: jetBrainsMono-bold;
}
</style>
