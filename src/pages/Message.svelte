<script>
  import { decryptText } from "../../src/components/lib";
  import { Link } from "svelte-routing";
  import ArrowIcon from "../../src/components/icons/ArrowIcon.svelte";

  export let isFlowerFall;

  const message = decryptText(
    "Xibu!jg!po!uif!34se!pg!Opwfncfs!3128!J!ibwf!xbudi!uibu!npwjf@!Xjmm!bmm!pg!uijt!dibohf@!Xjmm!uif!qbui!J!dipptf!tujmm!uif!tbnf@!Xjmm!J!tujmm!cf!xip!J!bn@!Xjmm!uif!jnqpsubou!uijoht!tujmm!fyjtu@!Xjmm!J!tujmm!gffm!tbe!bcpvu!uibu!tpoh@!Xjmm!uibu!tupsz!tujmm!nfbo!up!nf@!Xjmm!J!tujmm!cf!bcmf!up!nffu!uibu!qfstpo!ps!opu@"
  ).split(" ");
</script>

{#if isFlowerFall}
  <main class="main bg-yellow-100/40">
    <div class="inline-block">
      <Link to="/">
        <div
          class={`bg-pink-300 hover:scale-100 hover:bg-pink-300/90 
          hover:shadow-pink-100 border-pink-100 duration-300
          dark:bg-slate-900 text-white dark:text-slate-200
          fill-white  dark:fill-slate-200 flex justify-center 
            items-center rounded-lg border-2 py-1 px-3 font-medium
          dark:border-slate-200 dark:hover:bg-gray-700 m-1 
            shadow-md hover:shadow-lg shadow-gray-300 dark:shadow-none`}
        >
          <span class="inline-block w-8 mx-1">
            <ArrowIcon />
          </span>
          <span>back</span>
        </div>
      </Link>
    </div>

    <div class="pt-10 p-3">
      <pre
        class="text-emerald-500 whitespace-pre-wrap px-5 sm:px-20 sm:text-lg dark:text-slate-200">
              {#each message as chr}
          <span
            class="hover:scale-110 duration-300 inline-block cursor-pointer">{chr + " "}</span>
        {/each}
           </pre>
    </div>
  </main>
{:else}
  <main class="main bg-yellow-100/40">
    <div class="inline-block">
      <Link to="/">
        <div
          class={`bg-pink-300 hover:scale-100 hover:bg-pink-300/90 
          hover:shadow-pink-100 border-pink-100 duration-300
          dark:bg-slate-900 text-white dark:text-slate-200
          fill-white  dark:fill-slate-200 flex justify-center 
            items-center rounded-lg border-2 py-1 px-3 font-medium
          dark:border-slate-200 dark:hover:bg-gray-700 m-1 
            shadow-md hover:shadow-lg shadow-gray-300 dark:shadow-none`}
        >
          <span class="inline-block w-8 mx-1">
            <ArrowIcon />
          </span>
          <span>back</span>
        </div>
      </Link>
    </div>

    <div class="pt-10 p-3">
      <pre
        class="text-emerald-500 whitespace-pre-wrap px-5 sm:px-20 sm:text-lg dark:text-slate-200">It&apos;s nothing..</pre>
    </div>
  </main>
{/if}
