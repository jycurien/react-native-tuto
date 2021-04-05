import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer uMjoRMCMUaqV3ivdSKQbf2_YTZWmilfNpVKDkzvrGSoVeNi2lc7Mwp8hmp7-27jPJyes00RDXsdNg8XeImTFKeQz3rLK3_Q3ZV1eQzxq-09rM6_iLROHq0DEOd9VYHYx',
  },
})
