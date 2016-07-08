(function() {
  'use strict'

  require('shelljs/global')

  desc('Run TypeScript Compiler')
  task('build', function() {
    exec('node_modules/.bin/tsc')
    console.log('\n\ntsc complete')
  })

  desc('Run tests with AVA following tsc')
  task('test', ['build'], function() {
    exec('node_modules/.bin/ava dist/*.test.js')
    exec('node_modules/.bin/ava dist/**/*.test.js')
    console.log('\n\ntesting complete')
  })

  desc('Run TSLint')
  task('lint', function() {
    exec('node_modules/.bin/tslint src/*.ts')
    exec('node_modules/.bin/tslint src/**/*.ts')

    console.log('\n\ntslint complete')
  })

  desc('Run NYC')
  task('coverage', ['build'], function() {
    exec('node_modules/.bin/nyc node_modules/.bin/ava')
    // exec('node_modules/.bin/nyc dist/**/*.js')
    
    console.log('\n\ncoverage complete')
  })

  desc('Watch *.ts files for changes then run tests')
  watchTask(['build', 'coverage'], function () {
    this.watchFiles.include([
      'src/**/*.ts'
    ])
  })

}())
