<template>
	<b-navbar  type="dark" variant="primary"> <!--toggleable="md"-->
		
		
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav class="mx-auto">
				<b-navbar-brand :to="{name: 'Home'}" class="font-weight-bold">Watcher</b-navbar-brand>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import ToggleDarkMode from "../components/layout/ToggleDarkmode";
export default {
  components: { ToggleDarkMode },
};
</script>

<style lang="scss" scoped>
</style>
