'use strict';

exports.description = 'Create a reusable AngularJS component';
exports.notes = '';

exports.after = 'You should now install project dependencies with _npm install_.\n' +
                'After that, you may start the environment with _grunt_.';

exports.warnOn = '*';

exports.template = function(grunt, init, done){

  var promptTable = {},
      prompts = [],
      keys = {},
      i;

  promptTable['Package Name'] = 'fairy-dust';
  promptTable['Module Name'] = 'fairy.dust';
  promptTable['Description'] = 'A Component Made of Unicorn Magic';
  promptTable['Initial Version'] = '0.1.0';
  promptTable['Repository'] = 'http://www.github.com/foobar/fairy-dust';
  promptTable['Bug Reporting'] = 'http://www.github.com/foobar/fairy-dust/issues';
  promptTable['Author'] = 'John Doe';
  promptTable['License'] = 'MIT';
  promptTable['Banner'] = 'License MIT';

  for(i in promptTable){

    if(promptTable.hasOwnProperty(i)){

      prompts.push(init.prompt(i + ' (' + promptTable[i] + ') '));
      keys[i] = i + ' (' + promptTable[i] + ') ';

    }

  }

  init.process({}, prompts, function(err,props){

    var packageJson = {},
        bowerJson = {},
        processor = {},
        i;

    for(i in promptTable){

      if(promptTable.hasOwnProperty(i)){

        props[keys[i]] = props[keys[i]] || promptTable[i];

      }

    }

    console.log(props);

    processor.moduleName = props['Module Name (fairy.dust) '];

    processor.fileName = bowerJson.name = packageJson.name =
      props['Package Name (fairy-dust) '];

    bowerJson.keywords = packageJson.keywords =
      [];

    processor.version = bowerJson.version = packageJson.version =
      props['Initial Version (0.1.0) '];

    processor.banner = props['Banner (License MIT) '] !== '' ?
      '/* ' + props['Banner (License MIT) '] + ' */\\n' :
      '';

    packageJson.scripts = {
      test: './node_modules/.bin/grunt test',
      postinstall: './node_modules/.bin/bower install && chmod +x develop && chmod +x build && ./build',
      start: 'node index.js'
    };

    processor.repository = packageJson.repository = {
      type: 'git',
      url: props['Repository (http://www.github.com/foobar/fairy-dust) ']
    };

    processor.author = packageJson.author = props['Author (John Doe) '];
    bowerJson.author = [];
    bowerJson.author.push(packageJson.author);

    process.description = packageJson.description = bowerJson.description =
      props['Description (A Component Made of Unicorn Magic) '];

    packageJson.license = bowerJson.license =
      props['License (MIT) '];

    bowerJson.dependencies = {
      angular: '~1.2.15'
    };

    bowerJson.devDependencies = {
      'angular-mocks': '~1.2.15'
    };

    bowerJson.ignore = [
      'src',
      'node_modules',
      'bower_components',
      '.idea',
      'npm-debug.log'
    ];

    bowerJson.main = [];

    bowerJson.main.push('dist/' + processor.fileName + '.min.js');
    bowerJson.main.push('dist/' + processor.fileName + '.min.css');

    packageJson.devDependencies = {
      "express": '^3.5.1',
      'grunt': '~0.4.4',
      'grunt-angular-templates': '^0.5.3',
      'grunt-autoprefixer': '^0.7.2',
      'grunt-bower-install': '^1.4.0',
      'grunt-cli': '^0.1.13',
      'bower': '^1.3.1',
      'grunt-css-url-embed': '^0.1.3',
      'grunt-contrib-clean': '^0.5.0',
      'grunt-contrib-concat': '^0.3.0',
      'grunt-contrib-copy': '^0.5.0',
      'grunt-contrib-cssmin': '^0.9.0',
      'grunt-contrib-jshint': '^0.9.2',
      'grunt-contrib-less': '^0.11.0',
      'grunt-contrib-uglify': '^0.4.0',
      'grunt-contrib-watch': '^0.6.1',
      'grunt-injector': '^0.5.2',
      'grunt-karma': '^0.8.2',
      'grunt-newer': '^0.7.0',
      'grunt-ng-constant': '^0.5.0',
      'jshint-stylish': '^0.1.5',
      'karma': '^0.12.1',
      'karma-chrome-launcher': '^0.1.2',
      'karma-firefox-launcher': '^0.1.3',
      'karma-jasmine': '^0.1.5',
      'karma-phantomjs-launcher': '^0.1.2',
      'karma-safari-launcher': '^0.1.1',
      'load-grunt-tasks': '^0.4.0'
    };

    console.log(packageJson);
    console.log(bowerJson);

    init.copyAndProcess(init.filesToCopy(props), processor);
    init.writePackageJSON('package.json',packageJson);
    init.writePackageJSON('bower.json',bowerJson);

    done();
  });
};
