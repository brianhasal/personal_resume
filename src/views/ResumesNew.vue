<script>
import axios from 'axios';

  export default {
    data: function () {
      return {
        resumes: [],
        newResumeParams: {
          first_name: "First",
          last_name: "Last",
          email: "Email",
          phone_number: "212-555-1212",
          short_bio: "Sample Bio Text",
          LinkedIn_URL: "http://test.com",
          twitter_handle: "samplething1212",
          personal_blog: "(sample)",
          online_resume_url: "",
          github_url: "",
          photo: "",
          experience: {
            start_date: "",
            end_date: "",
            job_title: "",
            company_name: "",
            details: ""
          },
          education: {
            start_date: "",
            end_date: "",
            degree: "",
            university_name: "",
            details: ""
          },
          skills: {},
          projects: {
            name: "",
            description: "",
            url: "",
            screenshot: ""
          }
        },
        error: []
      };
    },
    created: function () {},
    methods: {
      createResume: function () {
        axios
          .post("", this.newResumeParams)
          .then((response) => {
            console.log("creating resume", response);
            this.resumes.push(response.data);
            this.newResumeParams = {};
          })
          .catch((error) => {
            console.log("photos create error", error.response);
          });
      }
    },
  };
</script>

<template>
  <div class="home">
    <h1>Create New Resume</h1>
    <div>
      <div>
        First Name:
        <input v-model="newResumeParams.first_name" type="text">
      </div>
      <div>
        Last Name:
        <input v-model="newResumeParams.last_name" type="text">
      </div>
      <div>
        Email:
        <input v-model="newResumeParams.email" type="text">
      </div>
      <div>
        Phone Number:
        <input v-model="newResumeParams.phone_number" type="text">
      </div>
      <div>
        Short Bio:
        <input v-model="newResumeParams.short_bio" type="text">
      </div>
      <div>
        LinkedIn URL:
        <input v-model="newResumeParams.LinkedIn_URL" type="text">
      </div>
      <div>

        <div>
          Twitter Handle:
          @
          <input v-model="newResumeParams.twitter_handle" type="text">
        </div>
      </div>
      <div>
        Personal Blog:
        <input v-model="newResumeParams.personal_blog" type="text">
      </div>
      <div>
        Online Resume URL:
        <input v-model="newResumeParams.online_resume_url" type="text">
      </div>
      <div>
        GitHub URL:
        <input v-model="newResumeParams.github_url" type="text">
      </div>
      <div>
        Photo:
        <input v-model="newResumeParams.photo" type="text">
      </div>
      <button v-on:click="createResume()">Create Resume</button>

    </div>
  </div>
</template>

<style></style>