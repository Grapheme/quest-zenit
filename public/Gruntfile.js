module.exports = function(grunt) {
	var custom = require('./custom.json');
	var jsPluginsList = [
			"bower_components/colorbox/jquery.colorbox-min.js",
			"bower_components/underscore/underscore-min.js",
			"bower_components/jquery-ui/ui/core.js",
			"bower_components/jquery-ui/ui/widget.js",
			"bower_components/jquery-ui/ui/tabs.js",
			"bower_components/moment/min/moment.min.js"
		],
		jadeTemplates = [],
		isTest = custom.test || false,
		viewsDir = custom.views_url || 'test.html',
		// stuff
		obj = {},
		tmpArray = [];
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//Jshint - js validation
		jshint:{
			all:["src/js/definition.js", "src/js/part/*.js", "src/js/main.js"]
		},
		// uglify task
		uglify:{
			main: {
				options: {
					sourceMap: true,
					beautify: true,
					compress: false,
					mangle: false
				},
				files: {
					"js/main.js": ["src/js/definition.js", "src/js/part/Match/*.js", "src/js/part/*.js", "src/js/main.js"]
				}
			},
			build: {
				files: {
					"js/main.min.js": ["src/js/definition.js", "src/js/part/Match/*.js", "src/js/part/*.js", "src/js/main.js"]
				}
			},
			plugins: {
				options: {
					preserveComments: 'some'
				},
				files: [{
					src: [jsPluginsList , "src/js/plugin/*.js"],
					dest: "js/plugins.js",
					nonull: true
				}]
			},
		},

		// grunticon task
		grunticon: {
			myIcons: {
				files: [{
					expand: true,
					cwd: 'src/img/svg.src/',
					src: ['*.svg'],
					dest: 'img/svgout/'
				}],
				options: {
					cssprefix: '.icon_',
					loadersnippet: 'snippet.js'
				}
			}
		},
		// less builder
		less: {
			build: {
				options: {
					yuicompress: true
				},
				files: {
					"css/style.min.css": "src/less/style.less"
				}
			},
			live: {
				options: {
					yuicompress: false
				},
				files: {
					"css/style.css": "src/less/style.less"
				}
			}
		},
		// watch task
		watch:{
			options: {
				livereload: true
			},
			less: {
				files: ['src/less/**'],
				tasks: ['less'],
				options: {
					livereload: false
				}
			},
			css:{
				files: ['css/style.css']
			},
			scripts:{
				files: ['src/js/definition.js', 'src/js/part/**', 'src/js/main.js'],
				tasks: ['jshint', 'uglify:main']
			},
			plugins:{
				files: ['src/js/plugin/**', 'dev/js/plugin-to-min/**'],
				tasks: ['uglify:plugins']
			},
			views: {
				files: [viewsDir]
			}
		},
		notify: {
			start: {
				options: {
					title: 'Grunt started',
					message: 'Watch server started'
				}
			}
		},
		notify_hooks: {
			options: {
				enabled: true
			}
		},
		shell: {
			bower_update: {
				options: {
					stderr: false
				},
				command: 'bower install'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('bower_update', 'Just run bower isntall', function() {
		grunt.loadNpmTasks('grunt-shell');
		grunt.task.run('shell:bower_update');
	});
	grunt.registerTask('default', 'Watch', function() {
		grunt.task.run(['bower_update', 'less']);
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.task.run('watch');
	});
	grunt.registerTask('icons', ['grunticon:myIcons']);

	grunt.registerTask('scripts', ['uglify:plugins', 'uglify:main']);
	grunt.registerTask('build',[ 'uglify:plugins', 'uglify:main', 'less:build']);
};