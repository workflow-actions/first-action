import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    // process.env['INPUT_FIRST'] = 'ivanka'
    const name: string = core.getInput('name');
    if (name) {
      core.debug(`Hello ${ name }!`);

      core.debug(new Date().toTimeString())
      core.setOutput('time', new Date().toUTCString())
      return core.setOutput('my_output', `Hello ${ name }!`);
    }
    core.setFailed('name not specified!');
  } catch (error) {
    core.setFailed(`Action failed with error ${ error }`)
  }
}

run().catch((error) => core.setFailed('Workflow failed! ' + error.message)).then((r) => r);
