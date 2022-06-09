<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-col-md-6">
                <div class="card mt-5">
                    <div class="card-header bg-info text-white">
                        Chat app
                    </div>
                    <div class="card-body">
                        <div class="chat-body mb-5">
                            <ul class="">
                                <li class="border-1 p-2 mb-2" v-for="message in messages">
                                    <span :class="message.type == 0 ? 'float-end' : ''">{{ message.message }}</span>
                                </li>
                            </ul>
                        </div>
                        <form @submit.prevent="sendMessage">
                            <p v-if="typing" class="text-secondary">typing...</p>
                            <div class="form-group">
                                <input v-model="newMessage" type="text" class="form-control" placeholder="type here">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {io} from 'this.$socket.io'
export default {
    name   : "Chat",
    data() {
        return {
            newMessage: '',
            messages  : [],
            typing    : false
        }
    },
    created() {
        console.log('vue created')
        this.$socket.emit('created', 'hello')
        this.$socket.on('created', (data) => {
            console.log(data);
        });
        this.$socket.on('chatMessage', (data) => {
            this.messages.push({
                'message': data,
                'type'   : 1
            });
        })
        this.$socket.on('typing', (data) => {
            this.typing = true
        })
        this.$socket.on('stopTyping', (data) => {
            this.typing = false
        })
    },
    methods: {
        sendMessage() {
            this.messages.push({
                'message': this.newMessage,
                'type'   : 0
            });
            this.$socket.emit('chatMessage', this.newMessage);
            this.newMessage = '';
        }
    },
    watch  : {
        newMessage(newVal, oldVal) {
            newVal ? this.$socket.emit('typing') : this.$socket.emit('stopTyping');
            console.log('djkkjd')
        }
    }

}
</script>

<style scoped>

</style>
