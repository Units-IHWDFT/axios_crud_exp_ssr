const express = require("express");
const router = express.Router();

const CharactersService = require("./../service/");
const charactersApiHandler = new CharactersService();

// Characters list
router.get("/list", (req, res) => {
  charactersApiHandler
    .getAllCharacters()
    .then((response) => res.render("pages/characters-list", { characters: response.data }))
    .catch((error) => console.log(error));
});


module.exports = router;
