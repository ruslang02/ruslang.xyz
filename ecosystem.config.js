const DEPLOY_USER = process.env.USER;
const DEPLOY_HOST = '192.168.1.50';
const DEPLOY_PATH = '/var/www/ruslang.xyz';

module.exports = {
  apps: [{
    name: 'ruslang.xyz',
    script: `${DEPLOY_PATH}/source/node_modules/.bin/next`,
    args: 'start -p 9004',
    autorestart: true,
    watch: true,
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: 'origin/master',
      repo: 'https://github.com/ruslang02/ruslang.xyz.git',
      path: DEPLOY_PATH,
      'post-deploy': 'npm ci && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
