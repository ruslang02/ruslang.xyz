module.exports = {
	"apps": [{
		"name": "ruslang.xyz",
		"script": 'index.js',
		"env_production": {
			"PORT": 9001
		},
		"autorestart": true,
		"watch": true
	}],

	"deploy": {
		"production": {
			"user": 'ruzik',
			"host": '192.168.1.50',
			"ref": 'origin/master',
			"repo": 'https://github.com/ruslang02/ruslang.xyz.git',
			"path": '/var/www/ruslang.xyz',
			'pre-deploy-local': "npm run export && scp -r out ruzik@192.168.1.50:/var/www/ruslang.xyz/source",
			'post-deploy': 'npm ci --only=production && pm2 reload ecosystem.config.js --env production',
		}
	}
};
