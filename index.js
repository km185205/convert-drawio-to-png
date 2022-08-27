const core = require('@actions/core');
const github = require('@actions/github');
const testFolder = github.action_path;
const fs = require('fs');


try {
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
  

  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}