<template>
    <v-dialog 
    attach="#app"
    v-model="visible" 
    hide-overlay
    persistent
    width="200" 
    height="200">
      <v-card color="coral">
        <v-card-text>
          {{ message }}
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default{
    name: 'tips',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        message: {
            type: String,
            required: true,
        }
    }
}
</script>