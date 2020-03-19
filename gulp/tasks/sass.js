module.exports = () => {
	$.gulp.task('sass', () => {
		var processors = [
			// $.pcmq,
			$.gp.autoprefixer,
			$.cssnano,
			$.nested,

		];
		return $.gulp.src($.sourse + '/sass/main.scss')
			.pipe($.sassGlob())
			.pipe($.gp.sass().on("error", $.gp.notify.onError()))

			//.pipe(gulpif(envDev, sourcemaps.write({includeContent: false, sourceRoot: '/public'})))
			// .pipe($.gcmq())
			.pipe($.postcss(processors))
			.pipe($.gulpif(!$.envDev, $.gcmq()))
			.pipe($.gp.rename({ suffix: '.min', prefix: '' }))
			// .pipe($.gp.autoprefixer({

			// 	grid: true,
			// 	overrideBrowserslist: ['last 5 versions']
			// }))
			// .pipe($.cleanCSS({ compatibility: 'ie11', level: 2 }))
			.pipe($.gulp.dest($.public + '/css'))
			//.on('end', browserSync.stream());
			.pipe($.browserSync.stream());
	});

}