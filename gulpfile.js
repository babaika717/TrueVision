"use strict";

var gulp 	 	= require("gulp"),
	watch 	 	= require("gulp-watch"),
	preFixer 	= require("gulp-autoprefixer"),
	plumber		= require("gulp-plumber"),
	sass 	 	= require("gulp-sass"),
	rigger 	 	= require("gulp-rigger"),
	browserSync	= require("browser-sync"),
	reload 	 	= browserSync.reload;

var path = {

	build: {	// куда будет складывать готовые файлы после сборки
		html: 'build/',
		js: 'build/js',
		css: 'build/css'
	},
	src: {
		html: "src/*html",
		js: "src/js/app.js",
		style: "src/style/**/*.scss"
	},
	watch: {	// 	пути к файлам, за которыми будем следить
		html: "src/**/*.html",
		js: "src/js/**/*.js",
		style: "src/style/**/*.scss"
	}

	};


	gulp.task("webserver", function() {
		browserSync({
			server: {
				baseDir: "./build"
			},
			host: "localhost",
			port: 3000,
			tunnel: true
		});
	});

	// сборка html

	gulp.task("html:build", function() {
		gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
	});

	// сборка js

	gulp.task("js:build", function() {
		gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
	});

	// сборка css

	gulp.task("style:build", function() {
		gulp.src(path.src.style)
        .pipe(plumber())
		.pipe(sass())
		.pipe(preFixer())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
	});

	gulp.task("build", [
		"html:build",
		"js:build",
		"style:build"
	]);

	// ставим watcher

	gulp.task("watch", function(){
		watch([path.watch.js], function(ev, callback) {
			gulp.start("js:build");
		});
		watch([path.watch.html], function(ev, callback) {
			gulp.start("html:build");
		});
		watch([path.watch.style], function(ev, callback) {
			gulp.start("style:build");
		});
	});

	// делаем дефолтный таск для запуска всей

	gulp.task("default", ["build", "webserver", "watch"]);


