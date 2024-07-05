export const USER_INFO = `
SELECT
    users.username,
    users.score,
    achievements.completed
FROM (
    SELECT 
        username,
        score 
    FROM users 
    WHERE id = $1
    ) as users,
    (
    SELECT 
        count(*) as completed 
    FROM user_achievements 
    WHERE "user" = $1 AND progress = 100
    ) as achievements
`
export const USER_TASKS = `
SELECT
    name,
    course,
    topic,
    evaluation,
    finish_date,
    is_done
FROM tasks
WHERE user_owner = $1
`
