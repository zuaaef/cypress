/// <reference path="../../../../../../../../../cli/types/index.d.ts"/>

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('before:browser:launch', (browser, options) => {
    options.args.push('--disable-gesture-requirement-for-presentation')

    options.windowSize = 'fullscreen'

    return options
  })
}