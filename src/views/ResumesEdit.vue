<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        editResumeParams: {},
        resume: {},
        errors: [],
      };
    },
    created: function () {
      axios
        .get("/resumes/" + this.$route.params.id)
        .then((response) => {
          console.log("resume show", response);
          this.resume = response.data;
          this.editResumeParams = this.resume;
        });
    },
    methods: {
      updateResume: function(resume) {
        axios
          .patch("/resumes/" + resume.id, this.editResumeParams)
          .then((response) => {
            console.log("Resume Updating", response);
            this.$router.push("/resumes");
          })
          .catch((error) => {
            console.log("resumes update error", error.response);
            this.errors = error.response.data.errors;
          });
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Edit Your Resume</h1>
    <div>
      <div>
        First Name:
        <input v-model="editResumeParams.first_name" type="text">
      </div>
      <div>
        Last Name:
        <input v-model="editResumeParams.last_name" type="text">
      </div>
      <div>
        Email:
        <input v-model="editResumeParams.email" type="text">
      </div>
      <div>
        Phone Number:
        <input v-model="editResumeParams.phone_number" type="text">
      </div>
      <div>
        Short Bio:
        <input v-model="editResumeParams.short_bio" type="text">
      </div>
      <div>
        LinkedIn URL:
        <input v-model="editResumeParams.LinkedIn_URL" type="text">
      </div>
      <div>
        Twitter Handle:
        <input v-model="editResumeParams.twitter_handle" type="text">
      </div>
      <div>
        Personal Blog:
        <input v-model="editResumeParams.personal_blog" type="text">
      </div>
      <div>
        Online Resume URL:
        <input v-model="editResumeParams.online_resume_url" type="text">
      </div>
      <div>
        GitHub URL:
        <input v-model="editResumeParams.github_url" type="text">
      </div>
      <div>
        Photo:
        <input v-model="editResumeParams.photo" type="text">
      </div>
      <button v-on:click="updateResume()">Update Resume</button>
    </div>
  </div>
</template>

<style></style>