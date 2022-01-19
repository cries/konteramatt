<template>
 <div>test</div>
</template>

<script>
import socket from 'socket.io-client';

export default {
  name: 'clientApp',
  data() {
    return {
      socket: socket('http://' + window.location.hostname + ':' + window.location.port)
    }
  }
}
</script>

<style>

</style>
