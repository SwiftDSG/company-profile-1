module.exports = {
  apps: [
    {
      name: 'company-profile-2',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}