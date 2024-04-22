<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import axios from "axios";
  // import express from "express";
  // import bodyParser from "body-parser";
  //
  // const app = express();
  // const PORT = 3000;
  //
  // app.use(bodyParser.json());
  //
  // app.post('/generateTokenProxy', async (req, res) => {
  //   try {
  //     const response = await axios.post('https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken', req.body, {
  //       headers: { "Content-Type": "multipart/form-data" }
  //     });
  //     res.json(response.data);
  //   } catch (error) {
  //     res.status(error.response.status).json(error.response.data);
  //   }
  // });
  //
  // app.listen(PORT, () => {
  //   console.log(`Server is running on port ${PORT}`);
  // });

  onMounted(() => {
    // const data = new FormData();
    // data.append("email", "work.deveshlalluwadia@gmail.com");
    // console.log({
    //   "email": "work.deveshlalluwadia@gmail.com"
    // })
    // axios.post('/generateTokenProxy', {
    //   "email": "work.deveshlalluwadia@gmail.com"
    // }, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    // .then(response => {
    //   console.log("fetched token", response);
    // })
    // .catch(error => {
    //   console.log('error=', error)
    //   console.error("Error fetching token", error);
    // });
    axios.post('https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken')
    .then(response => {
      // Successfully fetched token
      console.log("res----", response);
      this.token = response.data.token; // Assuming the token is returned in the response data
      this.error = null; // Reset error message
    })
    .catch(error => {
      // Error fetching token
      console.log(error)
      this.token = null; // Reset token
      this.error = 'Error fetching token: ' + error.message; // Display error message
    });
  });
</script>

<template>
  <header>
    <div class="wrapper">
      Hello Vue.js!
    </div>
  </header>

  <main>
    Main template
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
