var gulp = require('gulp');
var typescript = require('gulp-typescript');
var zip = require('gulp-zip');

var tsProject = typescript.createProject('lib/tsconfig.json', { typescript: require('typescript') });

gulp.task('scripts', function() {
	return tsProject.src()
		.pipe(typescript(tsProject))
		.pipe(gulp.dest('dist'));
});

gulp.task('archive', function() {
	return gulp.src([
			'dist/**/*',
			'fonts/**/*',
			'*.md',
			'package.json',
			'main.js',
			'styles/**/*'
		], { base: './' })
		.pipe(zip('Brackets-Icons.zip'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['zip']);
