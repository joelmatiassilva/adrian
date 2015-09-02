var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var src = ['gulpfule.js', 'js/*.js', 'test/*.js'];
var default_task = ['lint'];

gulp.task('lint', function(){
	return gulp
				.src(src)
				.pipe(jshint())
				.pipe(jshint.reporter('default'));
});


gulp.task('default',default_task, function(){
	gulp.watch(['*.js', 'test/*.js'],function(){
		gulp.run('lint', 'test');
	})
})