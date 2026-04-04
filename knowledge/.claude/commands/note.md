Create a new note.

Usage: `<title> <type>` where type is area/project/resource/idea

Run: `obsidian-agent note "<title>" <type>`

If the CLI is not available, follow these manual steps:
1. Read `CONVENTIONS.md`
2. Read the template for the given type from `templates/`
3. Replace all `{{}}` placeholders with actual values
4. Search for related notes and fill `related` field
5. Write to the correct directory (area→areas/, project→projects/, etc.)
6. Update `_index.md`, `_tags.md`, `_graph.md`
7. Update reverse links on related notes (bidirectional linking)

$ARGUMENTS
