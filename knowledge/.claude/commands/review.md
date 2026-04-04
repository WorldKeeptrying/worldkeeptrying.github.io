Generate this week's review.

Run: `obsidian-agent review`

If the CLI is not available:
1. Calculate this week's date range (Monday to Sunday)
2. Read all journal entries for the week
3. Find notes updated this week (grep `updated` field)
4. Find active projects (grep `status: active` + `type: project`)
5. Generate `journal/YYYY-WXX-review.md` aggregating all data
6. Update indices

$ARGUMENTS
