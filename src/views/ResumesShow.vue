<script>
  import axios from "axios"
  export default {
    data: function () {
      return {
        resume: {
          first_name: "First",
          last_name: "Last",
          email: "Email",
          phone_number: "212-555-1212",
          short_bio: "Sample Bio Text",
          LinkedIn_URL: "http://test.com",
          twitter_handle: "@samplething1212",
          personal_blog: "(sample)",
          online_resume_url: "",
          github_url: "",
          photo: "",
          id: 1
        }
      };
    },
    created: function () {
      axios
        .get("/resumes/" + this.$route.params.id)
        .then((response) => {
          console.log("showing resumes", response);
          this.resume = response.data;
        });
    },
    methods: {},
  };
</script>

<template>
  <div class="home">
    <h1>Show My Resume</h1>
    <h2>{{resume.first_name}} {{resume.last_name}}</h2>
    <h3>{{resume.email}} | {{resume.phone_number}}</h3>
    <div>
      <p>{{resume.short_bio}}</p>
      <p>{{resume.LinkedIn_URL}}</p>
      <p>{{resume.twitter_handle}}</p>
      <p>{{resume.personal_blog}}</p>
      <p>{{resume.online_resume_url}}</p>
      <p>{{resume.github_url}}</p>
      <p>{{resume.photo}}</p>

    </div>
    <div>
      <a href="/">Back to Resume Home</a>
    </div>

  </div>
</template>

<style></style>