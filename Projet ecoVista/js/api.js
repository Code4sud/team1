/*chargement fichier .env*/
require('dotenv').config();

/*installation comfy.icu*/
const fetch = require("node-fetch");

async function runWorkflow(body) {
  const url = "https://comfy.icu/api/v1/workflows/" + body.workflow_id + "/runs";
  const resp = await fetch(url, {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: "Bearer " + process.env.COMFYICU_API_KEY,
    },
    body: JSON.stringify(body),
    method: "POST",
  });

  return await resp.json();
}

const workflow_id = "VOTRE_WORKFLOW_ID";
const prompt = {}; // Ajoutez votre prompt ici
const run = await runWorkflow({ workflow_id, prompt });
console.log(run);