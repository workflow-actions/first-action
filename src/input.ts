import * as core from '@actions/core'

interface Inputs {
  name: Variable
}

interface Variable {
  key: string;
  value: string;
}

class Input {
  constructor() {}

  inputs: Inputs = {
    name: this.get('name')
  }
  private get(
    input: string
  ): Variable {
    const fromInput = core.getInput(input)
    return {key: input, value: fromInput}
  }
}

export default Input
