// Script to start the database server

const { join } = require('path');
const { spawnSync } = require('child_process');

const dbPath = join(process.env.HOME || process.env.USERPROFILE, 'traillio_db');

spawnSync('surreal', [
  'start',
  '--username', 'root',
  '--password', 'root', 
  '--strict',
  '--bind', '0.0.0.0:3000',
  `rocksdb:${dbPath}`
], { stdio: 'inherit' });