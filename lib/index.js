"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
async function run() {
    try {
        // process.env['INPUT_FIRST'] = 'ivanka'
        const name = core.getInput('name');
        if (name) {
            core.debug(`Hello ${name}!`);
            core.debug(new Date().toTimeString());
            core.setOutput('time', new Date().toUTCString());
            return core.setOutput('my_output', `Hello ${name}!`);
        }
        core.setFailed('name not specified!');
    }
    catch (error) {
        core.setFailed(`Action failed with error ${error}`);
    }
}
run().catch((error) => core.setFailed('Workflow failed! ' + error.message)).then((r) => r);
