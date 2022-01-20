<template>
	<div class="container">
		<authorize :client="state.client" :socket="socket"/>
	</div>
</template>

<script>
import Authorize from "./components/Authorize.vue";
export default {
	name: "KonterAMattGame",
	data() {
		return {
			state: {
				client: {
					name: ''
				},
				clients: [],
				game: {
					cards: [],
					events: [],
				},
			},
		};
	},
	props: {
		socket: {
			type: Object,
		},
	},
	components: {
		Authorize
	},
};
</script>


<style scoped>
</style>