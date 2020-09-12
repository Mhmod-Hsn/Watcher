<template>
	<div id="app">
		<AppBar/>
		<SideBar/>
		
		<transition mode="out-in" name="slide-down">
			<router-view/>
		</transition>
		<Footer/>
		
		
		<TrailerModal />
	
	</div>
</template>

<script>
    import AppBar from "./layout/AppBar";
    import SideBar from "./layout/SideBar";
    import Footer from "./layout/Footer";
    import TrailerModal from "./components/video/TrailerModal";

    export default {
        components: {TrailerModal, AppBar, SideBar, Footer},
        data: () => ({}),
        methods: {},
    };
</script>

<style lang="scss">
	@import "assets/css/styles";
	
	.w-full {
		width: 100%;
	}
</style>
