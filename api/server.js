import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000; // Choose a port for your proxy server
app.use(cors());

app.use(bodyParser.json());

// Define a route to proxy requests to the external API
app.post('/generateTokenProxy', async (req, res) => {
  try {
    console.log('body', req);
    const response = await axios.post('https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken', req.body, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    res.json(response.data);
    console.log('api response', res);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
