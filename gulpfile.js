var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('preview', shell.task([
    'wintersmith preview --port 8081'
]));

gulp.task('build', shell.task([
    'wintersmith build'
]));

gulp.task('deploy', shell.task([
    'wintersmith build',
    'cd build/ && s3cmd sync ./ s3://gary.mcad.am/'
]));

gulp.task('default', ['preview']);