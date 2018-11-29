import yargs from 'yargs';

/**
 * These settings are meant to define sensible defaults for each of the tasks
 * defined inside ~setup/tasks/. This pattern provides the ability to easily
 * change settings based on environments and flags.
 * @type {Object}
 */
const settings = {
    'clean': {
      'src': [
        'macros/**/*',
        'partials/**/*',
        'templates/**/*',
        'views/**/*',
        'css/**',
        'content/amp-dev/documentation/examples/**/*'
      ]
    },
    'styles': {
        'src': 'frontend/source/scss/**/[^_]*.scss',
        'dest': [
            'css/',
        ],
        'options': {
            'outputStyle': 'compact'
        }
    },
    'examples': {
        'src': 'examples/**/*.html',
        'dest': 'content/amp-dev/documentation/examples',
        'grow': {
          'views': {
            'documentation': 'views/examples/documentation.j2',
            'preview': 'views/examples/preview.j2',
          },
          'basePath': '/documentation/examples/'
        }
    },
    'templates': {
      'src': 'frontend/source/j2/**/*.j2',
      'dest': './'
    },
    'icons': {
      'src': 'frontend/icons/**/*.svg',
      'dest': 'icons/'
    }
};

// Settings that take effect as soon as the --production flag is set while
// running the gulp task
if (yargs.argv.production) {
	settings['styles'].options.outputStyle = 'compressed';
}

export default settings;