<template>
    <div  class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        loader="dots"
        :on-cancel="onCancel" 
        :is-full-page="fullPage"></loading>
        

    </div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        props:['isLoading'],
        data() {
            return {
                // isLoading: false,
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                },5000)
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }
        }
    }
</script>