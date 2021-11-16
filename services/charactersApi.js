const axios = require("axios");
class CharactersApi {
  constructor(baseURL) {
    this.baseURL = baseURL || process.env.API_URL || "http://localhost:5000/api"
    this.api = axios.create(
      {

        baseURL: process.env.API_URL || this.baseURL
      }
    )
  }

  getAllCharacters = () => this.api.get("/characters")
  getOneCharacter = (charId)=> this.api.get(`/characters/${charId}`)
  createCharacter = (bodyWithCharValues)=>this.api.post("/characters", bodyWithCharValues)
  deleteCharacter = (charId)=> this.api.delete(`/characters/${charId}`)
  updateCharacter = (charId)=> this.api.put(`/characters/${charId}`)

}

module.exports = CharactersApi;


