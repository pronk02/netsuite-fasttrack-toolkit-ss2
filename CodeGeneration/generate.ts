#!/usr/bin/env node

import { promisify } from 'util'
import * as commander from 'commander'
import * as fs from 'fs'
import { PathLike, Stats } from 'fs'
import { bindNodeCallback, combineLatest, from, merge, Observable, of } from 'rxjs'

import { catchError, concatAll, first, map, reduce, sequenceEqual, zipAll } from 'rxjs/operators'
import commandExists = require('command-exists')
import * as child_process from 'child_process'

const stat = bindNodeCallback(fs.stat) as (arg1: PathLike) => Observable<Stats>
const exec = bindNodeCallback(child_process.exec)

async function javaExists (): Promise<boolean> {
   return await commandExists('java').then(() => true).catch(() => false)
}

function jexists () {
   from(commandExists('java')).subscribe()
}

const program = new commander.Command()
program.version(require('./package.json').version)
program.option('--customrecord <sdf_file> ', 'generates a TypeScript class from a SDF custom record definition')
program.option('-o --outDir', 'directory in which to place output TypeScript files e.g. `./RecordTypes`')
program.option('-d, --debug', 'output debug stuffs')

program.command('isproject')

   .action((e, o) => {
      isSDFproject().subscribe(v => {
         console.log(`is SDF project? ${v}`)
      }, error => {
         console.debug('current directory is not a valid SDF project root folder')
         console.error(error.toString())
      })
   })

program.command('customrecord <customRecordXmlFile>')
   .description('create an NFT class for the given NetSuite custom record')
   .action(customRecordXmlFile => {
      exec(`java -jar saxon9he.jar -it -xsl:CustomRecord.xsl -s:${customRecordXmlFile} outputDir=.`)
         .subscribe( ([error, stdout]) => {
            console.log(stdout)
         }, error => {
            console.error('something went wrong')
            console.log(error)

         }, () => console.log('done.'))
   })

program.parse(process.argv)
if (program.debug) console.log(program.opts())

/**
 * returns true IFF there is a folder named FileCabinet in the current working directory
 */
function isSDFproject () {
   return bindNodeCallback<PathLike, Stats>(fs.stat)('FileCabinet')
      .pipe(map(x => !!x.ino))
}

//const result = execSync('echo \'hello world\'', { stdio: 'inherit' })
console.log('note: SDF must be configured for TBA')
//TODO: feature - bootstrap authentication? reuse existing SDF config? expect users to have TBA already setup? use existing .SDF?

//TODO: feature - download all custom records
//TODO: feature - download transaction body custom fields
//TODO: feature - download transaction column custom fields

//TODO: feature - detect if SDF definitions already exist - prompt user to download if not
//TODO: feature - generate code for custom records
//TODO: feature - generate code for transaction body custom fields
//TODO: feature - generate code for transaction column custom fields
//TODO: feature - generate code for entity type record custom body fields
//TODO: feature - generate code for entity type record custom column fields
//TODO: feature - generate code for other type record custom body fields

// const prereqsMet = merge(isProject(), isSDFproject(), fromPromise(javaExists())).pipe(
//    reduce((a, v) => a && v, true)
// )
//
// prereqsMet.subscribe(result => console.debug('were all prerequisites met?', result),
//    error => console.debug(`requirements not met due to error ${error}`))


