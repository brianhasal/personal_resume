<script>
  import axios from "axios";

  export default {
    created: function () {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("jwt");
      this.$router.push("https://chimerical-moxie-ad235a.netlify.app/students");
    },
  };
</script>

<template>
  <div class="logout"></div>
</template>


