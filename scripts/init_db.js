// Script to init database schema

const { spawnSync } = require('child_process');

spawnSync('surreal', [
    'import',
    '--namespace', 'traillio',
    '--database', 'traillio', 
    '-u', 'root',
    '-p', 'root',
    '-e', 'http://localhost:3000',
    'scripts/db_init.surql'
  ], { stdio: 'inherit' });