import gulp from 'gulp'
import imagemin from 'gulp-imagemin'

// Function to reduce image sizes
function optimizeImages() {
  return gulp
    .src('src/assets/images/**/*') // Adjust the path as necessary for your project structure
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(gulp.dest('dist/assets/images')) // Output directory after compression
}

// Gulp task
export const build = gulp.series(optimizeImages)

// Default task
export default build
