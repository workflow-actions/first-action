import * as core from '@actions/core'
import Input from './input'
import {inspect} from 'util'

async function run(): Promise<void> {
  try {
    const inputs = new Input().inputs
    core.debug(`Inputs: ${inspect(inputs)}`)
    const name: string = inputs.name.value
    if (name) {
      core.debug(`Hello ${name}!`)

      core.debug(new Date().toTimeString())
      core.setOutput('time', new Date().toUTCString())
      return core.setOutput('my_output', `Hello ${name}!`)
    }
    core.setFailed('name not specified!')
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`)
  }
}

run().catch((error) => core.setFailed('Workflow failed! ' + error.message)).then((r) => r)
