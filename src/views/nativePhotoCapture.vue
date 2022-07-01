<template>
    <div>
        <v-btn @click="takePicture"></v-btn>
    </div>
</template>
<script>
import { Camera, CameraResultType } from '@capacitor/camera';
export default {
    
    mounted(){
        
        this.takePicture()
    },
    methods:{
        async takePicture() {
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
  });

  // Here you get the image as result.
  const theActualPicture = image.dataUrl;
  console.log(theActualPicture)
}
    }
}
</script>