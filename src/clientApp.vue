<template>
	<konter-a-matt-game :socket="socket"/>
</template>

<script>
import socket from "socket.io-client";
import KonterAMattGame from './KonterAMattGame.vue';

export default {
	components: { KonterAMattGame },
	name: "clientApp",
	data() {
		return {
			socket: socket(
				"http://" +
					window.location.hostname +
					":" +
					window.location.port
			),
		};
	},
};
</script>

<style>
</style>
