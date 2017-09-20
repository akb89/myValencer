const gulp = require('gulp');
const gulpconfig = require('./gulpconfig');

const production = process.env.NODE_ENV === 'production';

const front = new gulpconfig.Frontend(production);
gulp.task('front-scripts', front.bundleApp.bind(front));
gulp.task('front-vendors', front.bundleVendors.bind(front));
gulp.task('front-external-vendors', front.createExternalVendors.bind(front));
gulp.task('front-vendor-styles', front.createVendorStyles.bind(front));
gulp.task('front-styles', front.createStyles.bind(front));
gulp.task('front-fonts', front.copyFonts.bind(front));
gulp.task('front-imgs', front.copyImgs.bind(front));
gulp.task('front-views', front.copyViews.bind(front));
gulp.task('front-revision-clean', front.revisionClean.bind(front));
gulp.task('front-revision', ['front-scripts', 'front-vendors', 'front-external-vendors',
    'front-vendor-styles', 'front-styles',
    'front-fonts', 'front-views', 'front-revision-clean'], front.revision.bind(front));
gulp.task('front-revision-replace', ['front-revision'], front.revisionReplace.bind(front));
gulp.task('front-gzip', ['front-revision'], front.gzip.bind(front));
gulp.task('front-watch', front.watch.bind(front));

const fronts = ['front-scripts', 'front-vendors', 'front-external-vendors',
    'front-vendor-styles', 'front-styles',
    'front-fonts', 'front-imgs', 'front-views', 'front-gzip', 'front-revision-clean',
    'front-revision', 'front-revision-replace',
];

gulp.task('build', fronts);
gulp.task('default', [...fronts, 'front-watch']);
