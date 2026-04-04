# Obsidian Knowledge Base — Agent Instructions

This is an agent-managed Obsidian vault. You (the AI agent) operate this vault via the `obsidian-agent` CLI.

## Quick Start

```bash
# Read a note
obsidian-agent read "my-project"
obsidian-agent read "my-project" --section "TODO"

# Check what's in the vault
obsidian-agent list
obsidian-agent recent                    # last 7 days
obsidian-agent stats                     # vault overview

# Create
obsidian-agent journal                   # today's journal
obsidian-agent note "Title" project --tags "backend,api"
obsidian-agent capture "Quick idea text"

# Search & discover
obsidian-agent search "keyword"          # full-text search
obsidian-agent backlinks "note-name"     # what links here?
obsidian-agent orphans                   # unlinked notes

# Edit existing notes
obsidian-agent patch "note" --heading "TODO" --append "- [ ] New task"
obsidian-agent update "note" --status active --summary "Updated"
obsidian-agent archive "old-note"
obsidian-agent delete "obsolete-note"

# Tags
obsidian-agent tag list
obsidian-agent tag rename "old" "new"

# Rename / Move / Merge
obsidian-agent rename "note" "New Title"  # rename + update refs
obsidian-agent move "note" project        # change type/directory
obsidian-agent merge "source" "target"    # combine two notes

# Batch operations
obsidian-agent batch tag --type idea --add "review"
obsidian-agent batch archive --tag "deprecated"
obsidian-agent batch update --type project --set-status active

# Export / Import
obsidian-agent export backup.json
obsidian-agent import notes.json

# Reviews
obsidian-agent review                    # weekly
obsidian-agent review monthly

# Smart linking & quality
obsidian-agent link --dry-run            # preview missing links
obsidian-agent link                      # auto-link related notes
obsidian-agent validate                  # check frontmatter issues
obsidian-agent relink --dry-run          # preview broken link fixes
obsidian-agent relink                    # auto-fix broken links
obsidian-agent timeline --days 7         # recent activity feed

# Pin favorites
obsidian-agent pin "important-note"
obsidian-agent pin list
obsidian-agent unpin "important-note"

# Graph & discovery
obsidian-agent neighbors "note" --depth 3 # connected notes
obsidian-agent random 3                  # serendipitous review
obsidian-agent focus                     # what to work on next

# Stats & reporting
obsidian-agent count                     # word/line statistics
obsidian-agent agenda                    # pending TODOs
obsidian-agent changelog --days 14       # recent changes
obsidian-agent daily                     # daily dashboard
obsidian-agent suggest                   # improvement suggestions

# Smart & semantic search (v1.3+)
obsidian-agent smart-search "API design" # BM25 ranked search
obsidian-agent embed-search "how to..."  # semantic via Ollama/OpenAI
obsidian-agent embed-status              # check embedding providers

# Canvas & Bases (v1.3+)
obsidian-agent canvas create "board"     # create .canvas file
obsidian-agent canvas add-node "board" --type text --text "Note"
obsidian-agent canvas add-edge "board" --from id1 --to id2
obsidian-agent canvas read "board"
obsidian-agent base create "tracker"     # create .base file
obsidian-agent base query "tracker"      # query notes with filters
obsidian-agent base read "tracker"

# Maintenance
obsidian-agent sync                      # rebuild indices
obsidian-agent health                    # vault health score
obsidian-agent graph                     # Mermaid knowledge graph
obsidian-agent broken-links              # find broken [[links]]
obsidian-agent duplicates                # find similar notes
obsidian-agent search "pattern" --regex  # regex search
obsidian-agent bridge-status             # Obsidian CLI bridge info
```

All commands support `--json` for machine-readable output.

## Navigation

- `_index.md` — Vault index
- `_tags.md` — Tag index (find notes by tag)
- `_graph.md` — Knowledge graph (relationships between notes)
- `CONVENTIONS.md` — Writing rules (**read before manual edits**)
- `templates/` — Note templates (`{{}}` placeholders)

## Directory Structure

| Directory | Purpose |
|-----------|---------|
| `areas/` | Long-term focus areas |
| `projects/` | Concrete projects with goals |
| `resources/` | Reference materials |
| `journal/` | Daily logs and weekly reviews |
| `ideas/` | Draft ideas to explore |

## Rules for Manual Edits

If you edit files directly instead of using the CLI:

1. **Read `CONVENTIONS.md` first**
2. **Include complete frontmatter** in new notes
3. **Update `updated` field** when modifying
4. **Update indices**: `_tags.md`, `_graph.md`, directory `_index.md`
5. **Build bidirectional links** via the `related` field
6. **File names**: lowercase with hyphens
7. **Internal links**: `[[filename]]` (no `.md` extension)

## Environment Variables

- `OA_VAULT` — Vault path (so you don't need `--vault` every time)
- `OA_TIMEZONE` — Timezone for dates (default: UTC)
- `OA_NO_OFFICIAL_CLI` — Disable Obsidian CLI bridge (set to 1)
- `OA_OPENAI_KEY` — OpenAI API key for embedding search
