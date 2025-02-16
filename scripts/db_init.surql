// Namespace and database
DEFINE NAMESPACE IF NOT EXISTS traillio;
USE NS traillio;
DEFINE DATABASE IF NOT EXISTS traillio;
USE DB traillio;

// Tables
DEFINE TABLE IF NOT EXISTS users;
DEFINE TABLE IF NOT EXISTS refresh_tokens;
DEFINE TABLE IF NOT EXISTS solved_problems;
DEFINE TABLE IF NOT EXISTS leetcode_problems;
DEFINE TABLE IF NOT EXISTS codeforces_problems;
DEFINE TABLE IF NOT EXISTS codeforces_contests;

// Indexes
DEFINE INDEX IF NOT EXISTS solved_problems_unique ON TABLE solved_problems COLUMNS in, out UNIQUE;