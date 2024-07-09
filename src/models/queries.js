export const USER_TASKS = `
SELECT
    id,
    name,
    course,
    topic,
    evaluation,
    finish_date,
    is_done
FROM tasks
WHERE user_owner = $1
`
