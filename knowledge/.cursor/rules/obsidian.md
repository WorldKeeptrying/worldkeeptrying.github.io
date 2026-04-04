# Obsidian Vault — Cursor Rules

This is an agent-managed Obsidian vault. Use the `obsidian-agent` CLI (55+ commands) for all vault operations.

## Key Commands

```bash
obsidian-agent journal              # Create/open today's journal
obsidian-agent note "Title" type    # Create a note (area/project/resource/idea)
obsidian-agent capture "idea"       # Quick idea capture
obsidian-agent search "keyword"     # Keyword search (supports --regex)
obsidian-agent smart-search "query" # BM25 ranked search (multi-word queries)
obsidian-agent embed-search "query" # Semantic search (Ollama/OpenAI)
obsidian-agent list [type]          # List notes
obsidian-agent review               # Generate weekly review
obsidian-agent sync                 # Rebuild indices
obsidian-agent canvas create "name" # Create JSON Canvas
obsidian-agent base query "name"    # Query notes via Base filters
```

## Rules

- Read `CONVENTIONS.md` before editing notes manually
- All notes need complete YAML frontmatter (title, type, tags, created, updated, status, summary)
- Use `[[filename]]` for internal links (no `.md` extension)
- File names: lowercase with hyphens
- After manual edits, run `obsidian-agent sync` to rebuild indices
- Check `AGENT.md` for full command reference (55+ commands)
