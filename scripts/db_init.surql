// Namespace and database
DEFINE NAMESPACE IF NOT EXISTS traillio;
USE NS traillio;
DEFINE DATABASE IF NOT EXISTS traillio;
USE DB traillio;

// Tables
DEFINE TABLE IF NOT EXISTS users;
DEFINE TABLE IF NOT EXISTS refresh_tokens;