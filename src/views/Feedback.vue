<template>
  <div class="recenzije">
    <v-container>
      <v-text-field label="Username"></v-text-field>
      <v-text-field label="Title"></v-text-field>

      <v-textarea
        outlined
        name="input-7-4"
        label="Feedback"
      ></v-textarea>

      <v-btn @click="alert">Post your feedback</v-btn>

      <v-alert v-if="successAlert" type="success" class="my-4" dismissible>
        Successfuly saved.
      </v-alert>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successAlert: false,
    };
  },
  methods: {
    alert: function() {
      this.successAlert = true;

      setTimeout(() => {
        this.successAlert = false;
      }, 3000);
    }
  }
};
</script>

<style>
</style>