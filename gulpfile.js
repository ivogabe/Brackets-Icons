var gulp = require('gulp');
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject('lib/tsconfig.json', { typescript: require('typescript') });

gulp.task('default', function() {
	return tsProject.src()
		.pipe(typescript(tsProject))
		.pipe(gulp.dest('dist'));
});
