module.exports = {
<<<<<<< HEAD
    env: {
        NODE_ENV: '"development"'
    },
    defineConstants: {},
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
    mini: {},
    h5: {
        esnextModules: ['taro-ui']
    }
}
=======
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
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
  mini: {},
  h5: {
    esnextModules: ['taro-ui']
  }
}
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
