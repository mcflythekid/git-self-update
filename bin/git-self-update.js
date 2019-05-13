#!/usr/bin/env node
const shell = require('shelljs')
const prompts = require('prompts');

const exec = command=>{
    console.log(`Executing ${command}`)
    if (shell.exec(command).code !== 0) {
        shell.echo('Execution failed')
        shell.exit(1)
        process.exit(1)
    }
}

const argv = require('yargs-parser')(process.argv.slice(2))
const defaultTarget = 'origin/master'
const target = argv._.length ? argv._[0] : defaultTarget

(async ()=>{
    const response = await prompts({
        type: 'text',
        name: 'confirm',
        message: 'This command will clean the whole workspace and use only on production/uat environment to deploy code, consider it as \'rm -rf\'. Please type \'yes\'s to confirm !'
    })
    if(response.confirm !== 'yes'){
        console.log('Aborted!')
        process.exit(0)
    }
        
    //https://grimoire.ca/git/stop-using-git-pull-to-deploy
    exec('git fetch --all')
    exec(`git checkout --force ${target}`)
})()
