module.exports =  function(grunt){
    //Configuration
    grunt.initConfig({
        concat:{
            js:{
                src:['bower_components/jquery/dist/jquery.js', 'app/assets/js/main.js'],
                dest:'app/assets/js/scripts.js'
                },
            css:{
                src:['bower_components/normalize-css/normalize.css','app/assets/styles/css/fonts.css', 'app/assets/styles/scss/main.css'],
                dest:'app/assets/styles/css/all.css'
            }
        },
        cssmin:{
            build:{
                files:[{
                    src:'app/assets/styles/css/all.css',
                    dest:'app/assets/styles/css/all.min.css'
                }]
            },  options: {
                keepSpecialComments: 0
            }
        },
        uglify:{
            build:{
                files:[{
                    src: 'app/assets/js/scripts.js',
                    dest:'app/assets/js/scripts.min.js'
                }]
            }
        },
        watch:{
            js:{
                files:['app/assets/js/*','!app/assets/js/scripts.js','!app/assets/js/scripts.min.js'],
                tasks:['concat:js','uglify'],  options: {
                    spawn: false
                }

            },
            css:{
                files:['app/assets/styles/**/*.css','!app/assets/styles/css/all.css','!app/assets/styles/css/all.min.css'],
                tasks:['concat:css','cssmin'],
                options: {
                    spawn: false
                }
            }
        }

    });
    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-copy');

   grunt.registerTask('default',['watch'])


};