var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
//var reactify = require('reactify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');

var production = process.env.NODE_ENV === 'production';

var dependencies = [
    'alt',
    'react',
    'react-router',
    'underscore'
];
/*
 Gulp Task	Description
 vendor	            将所有第三方JS文件合并到一个文件
 browserify-vendor	因为性能原因，我们将NPM模块和前端模块分开编译和打包，因此每次重新编译将会快个几百毫秒
 browserify	        仅将app文件编译并打包，不包括其它模块和库
 browserify-watch	包括上面的功能，并且监听文件改变，然后重新编译打包app文件
 watch	            当文件改变时重新编译LESS文件
 default	        运行上面所有任务并开始监听文件改变
 build	            运行上面所有任务然后退出
 */

/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */
gulp.task('vendor', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
        'bower_components/toastr/toastr.js'
    ]).pipe(concat('vendor.js'))
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-vendor', function () {
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(source('vendor.bundle.js'))
        .pipe(gulpif(production, streamify(uglify({mangle: false}))))
        .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', ['browserify-vendor'], function () {
    return browserify('app/main.js')
        .external(dependencies)
        //.transform(reactify)
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulpif(production, streamify(uglify({mangle: false}))))
        .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Same as browserify task, but will also watch for changes and re-compile.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-watch', ['browserify-vendor'], function () {
    var bundler = watchify(browserify('app/main.js', watchify.args));
    bundler.external(dependencies);
    bundler.transform(babelify);
    //bundler.transform(reactify);
    bundler.on('update', rebundle);
    return rebundle();
    //
    function rebundle() {
        var start = Date.now();
        return bundler.bundle()
            .on('error', function (err) {
                gutil.log(gutil.colors.red(err.toString()));
            })
            .on('end', function () {
                gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('public/js/'));
    }
});

/*
 |--------------------------------------------------------------------------
 | Compile LESS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function () {
    return gulp.src('app/stylesheets/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpif(production, cssmin()))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/stylesheets/**/*.less', ['styles']);
});

//gulp.task('default', ['styles', 'vendor', 'watch']);
//gulp.task('build', ['styles', 'vendor']);
gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['styles', 'vendor', 'browserify']);