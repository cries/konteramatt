<template>
	<div class="login-container">
		<div class="row">
			<input type="text" placeholder="Room" v-model="room" />
		</div>
		<div class="row">
			<input type="text" placeholder="Name" v-model="client.name" />
		</div>
		<div class="row">
			<input type="button" @click="join" value="Join">
		</div>
	</div>
</template>

<script>
export default {
	name: "Authorize",
	data() {
		return {
            room: null
        };
	},
	props: {
		client: {
			type: Object,
		},
		socket: {
			type: Object,
		},
	},
	methods: {
		join() {
            if (this.room && this.client.name.length > 0) {
                this.socket.emit('create', this.room);
                // this.socket.emit('login', { 'client': this.client })
            }
        },
	},
};
</script>

<style>
</style>