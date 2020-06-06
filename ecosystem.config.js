const DEPLOY_USER = process.env.USER;
const DEPLOY_HOST = '192.168.1.50';
const DEPLOY_PATH = '/var/www/ruslang.xyz';

module.exports = {
  apps: [{
    name: 'ruslang.xyz',
    script: 'index.js',
    env_production: {
      PORT: 9004,
    },
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
      'pre-deploy-local': `npm run export && scp -r out ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/source`,
      'post-deploy': 'npm ci --only=production && pm2 reload ecosystem.config.js --env production',
    },
  },
};
