# AGENTS.md

## Repository Structure

This is a GitHub Pages static site with an embedded Obsidian knowledge base.

| Path | Description |
|------|-------------|
| `/` (root) | Static blog (Hexo/Matery theme) — deployed directly to GitHub Pages |
| `/knowledge/` | Obsidian vault — agent-managed note system |

## Working with the Knowledge Base

The `knowledge/` folder is a separate Obsidian vault with its own agent instructions. For all note operations, **use the `obsidian-agent` CLI**.

### Essential Commands

```bash
obsidian-agent journal              # Open today's journal
obsidian-agent note "Title" type   # Create note (area/project/resource/idea/journal)
obsidian-agent capture "idea"       # Quick idea capture
obsidian-agent search "keyword"     # Search notes
obsidian-agent sync                # Rebuild indices after manual edits
```

### Key Files

- `knowledge/CONVENTIONS.md` — Required frontmatter, file naming, linking rules
- `knowledge/AGENT.md` — Full CLI reference (55+ commands)
- `knowledge/templates/` — Note templates

### Manual Editing Rules

If CLI is unavailable:
1. Read `knowledge/CONVENTIONS.md` first
2. Include complete YAML frontmatter in all notes
3. Use `[[filename]]` for internal links (no `.md` extension)
4. Update `_index.md`, `_tags.md`, `_graph.md` after changes
5. Maintain bidirectional links via `related` field

## Static Site

The root folder contains pre-built static HTML/CSS/JS. No build process needed — edits here are published directly.
