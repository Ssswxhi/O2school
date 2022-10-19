module.exports = {
<<<<<<< HEAD
    env: {
        NODE_ENV: '"production"'
    },
    defineConstants: {},
    mini: {},
    weapp: {
        module: {
            postcss: {
                autoprefixer: {
                    enable: true
                },
                // 小程序端样式引用本地资源内联配置
                url: {
                    enable: true,
                    config: {
                        limit: 10240 // 文件大小限制
                    }
                }
            }
        }
    },
    h5: {
        /**
         * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
         * 参考代码如下：
         * webpackChain (chain) {
         *   chain.plugin('analyzer')
         *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
         * }
         */
    }
}
=======
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  mini: {},
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: false,
          config: {
            limit: 10240 // 文件大小限制
          }
        }
      }
    }
  },
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
