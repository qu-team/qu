'use strict';

module.exports = function (grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		yeoman: {
			scss: 'scss',
			css: 'css',
			coffee: 'coffee',
			js: 'js',
			images: 'images'
		},
		watch: {
			coffeeweb: {
				files: ['<%= yeoman.coffee %>/{,*/}*.coffee'],
				tasks: ['coffee:all']
			},
			compass: {
				files: ['<%= yeoman.scss %>/{,*/}*.{scss,sass}'],
				tasks: ['compass:server']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'{,*/}*.html',
					'<%= yeoman.css %>{,*/}*.css',
					'<%= yeoman.images %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
					'<%= yeoman.js %>/{,*/}*.js'
				]
			}
		},
		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: ['.']
				}
			}
		},
		coffee: {
			all: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.coffee %>',
					src: '{,*/}*.coffee',
					dest: '<%= yeoman.js %>',
					ext: '.js',
				}],
				options: {
					sourceMap: true
				}
			},
		},
		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},
		concurrent: {
			server: [
				'coffee:web'
			]
		}
	});
	grunt.registerTask('server', ['concurrent:server', 'connect:livereload', 'watch']);
	grunt.registerTask('build', ['coffee:web']);
}
