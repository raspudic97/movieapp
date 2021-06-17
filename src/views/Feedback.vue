<template>
  <div class="recenzije">
    <v-container>
      <v-text-field label="Username" v-model="feedbackUsername"></v-text-field>
      <v-text-field label="Title" v-model="feedbackTitle"></v-text-field>

      <v-textarea
        outlined
        name="input-7-4"
        label="Feedback"
        v-model="feedback"
        :value="feedback"
      ></v-textarea>

      <v-btn @click="postFeedback">Post your feedback</v-btn>

      <v-alert type="success" class="my-4" v-model="successAlert" dismissible>
        Successfuly saved.
      </v-alert>

      <div class="feedbackCard" v-for="feed in feedbacks" :key="feed.id">
        <v-card class="my-4" color="#333" dark>
          <v-card-title class="text-h7">
            {{ feed.feedback_title }}
          </v-card-title>

          <v-card-subtitle> {{ feed.feedback_content }} </v-card-subtitle>

          <v-card-subtitle> By: {{ feed.username }} </v-card-subtitle>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedback: "",
      feedbackUsername: "",
      feedbackTitle: "",
      feedbacks: [],
      successAlert: false,
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`http://localhost:3000/feedbacks`)
        .then((response) => {
          this.feedbacks = response.data;
        });
    },
    postFeedback() {
      let newFeedback = {
        id: parseInt(this.feedbacks.length) + 1,
        username: this.feedbackUsername,
        feedback_content: this.feedback,
        feedback_title: this.feedbackTitle,
      };

      this.axios.post("http://localhost:3000/feedbacks", newFeedback);

      this.successAlert = true;

      setTimeout(() => { 
        location.reload();
      }, 5000);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>