<script>
	import HeroText from "../lib/components/HeroText.svelte";
	import Footer from "../lib/components/Footer.svelte";
	import DottedCallOut from "../lib/components/DottedCallOut.svelte";
	import { onMount } from "svelte";
	import toast, { Toaster } from 'svelte-french-toast';
	import Navbar from "../lib/components/Navbar.svelte";

    onMount(() => {
		toast.success("It works!");
	})

    function seetoast() {
        toast.error('something went wrong')
    }
</script>

<HeroText />
<Toaster />

<div class="flex justify-center">
    <button on:click={seetoast} class="btn btn-secondary">
        Click here to see the toast
    </button>
</div>


<DottedCallOut />
<Footer />
