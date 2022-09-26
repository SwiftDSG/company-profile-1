module.exports = {
  apps: [
    {
      name: 'company-profile-1',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}