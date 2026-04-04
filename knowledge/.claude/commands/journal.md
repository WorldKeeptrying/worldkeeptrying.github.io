Create or open today's journal entry.

Run: `obsidian-agent journal`

If the CLI is not available, follow these manual steps:
1. Calculate today's date (YYYY-MM-DD) and weekday
2. Check if `journal/YYYY-MM-DD.md` exists
3. If exists: read and display it
4. If not: read `templates/journal.md`, replace all `{{}}` placeholders, write to `journal/YYYY-MM-DD.md`
5. Update `journal/_index.md`, `_tags.md`, `_graph.md`

$ARGUMENTS
