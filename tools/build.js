#!/usr/bin/env node
'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Text + chalk definitions
const data = {
  name: chalk.white('               Feross Aboukhadijeh'),
  handle: chalk.white('feross'),
  work: chalk.white('Programmer, open source creator, mad scientist'),
  opensource: chalk.white(`WebTorrent ${chalk.red('❤')}  StandardJS ${chalk.yellow('★')}   BitMidi ${chalk.magenta('🎶')}`),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('feross'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~feross'),
  github: chalk.gray('https://github.com/') + chalk.green('feross'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('feross'),
  web: chalk.cyan('https://feross.org'),
  npx: chalk.red('npx') + ' ' + chalk.white('feross'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

const opts = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

fs.writeFileSync(path.join(__dirname, '../bin/output'), chalk.green(boxen(output, opts)))
