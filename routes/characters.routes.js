const {response} = require("express");
const express = require("express");
const router = express.Router();

const CharactersService = require("./../service/");
const charactersApiHandler = new CharactersService(process.env.API_URL);


router.route("/edit/:id")
.get((req, res)=>{
  const charId = req.params.id
  charactersApiHandler
  .getOneCharacter(charId)
  .then(response=> res.render("pages/edit-character-form"), {character: response.data})
  .catch((error) => console.log(error));
})
.post((req, res)=>{
  const charId = req.params.id
  const charValues = req.body

  charactersApiHandler
  .updateCharacter(charId, charValues)
  .then(()=>res.redirect(`/characters/list`))
})

router.get("/delete/:id", (req, res) => {
  const characterId = req.params.id;

  charactersApiHandler
    .deleteCharacter(characterId)
    .then(() => res.redirect(`/characters/list`))
    .catch((error) => console.log(error));
});

router.route("/create")
  .get((req, res)=> res.render("pages/new-character-form"))
  .post((req, res)=>{
    const characterValues = req.body;

    charactersApiHandler
    .createCharacter(characterValues)
    .then(()=>res.redirect(`/characters/list`)) // we could better redirect to edit or details
    .catch((error) => console.log(error));
  })

  // Characters list
router.get("/list", (req, res) => {
  charactersApiHandler
    .getAllCharacters()
    .then((response) => res.render("pages/characters-list", { characters: response.data }))
    .catch((error) => console.log(error));
});


module.exports = router;
