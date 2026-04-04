---
title: Writing & Agent Conventions
type: meta
updated: 2026-03-27
---

# Conventions

## Required Frontmatter

```yaml
---
title: string          # Note title
type: string           # area | project | resource | journal | idea
tags: [string]         # Tag list
created: YYYY-MM-DD    # Created date
updated: YYYY-MM-DD    # Last updated date
status: string         # active | archived | draft
summary: string        # One-line summary for agent retrieval
related: [[note]]      # Related notes list (optional for journal)
---
```

## Optional Fields

```yaml
source: url            # Source link (common for resource type)
goal: string           # Project goal (project type)
deadline: YYYY-MM-DD   # Deadline (project type)
priority: high | medium | low
```

## File Naming

- Lowercase with hyphens: `my-note-title.md`
- Journal uses dates: `2026-03-27.md`
- Weekly review uses week numbers: `2026-W13-review.md`
- Each directory has `_index.md` as its index

## Content Rules

- Headings use `#`
- Keep text concise and direct
- Use `[[]]` for internal links
- Code blocks should specify language

## Agent Rules

1. **Read this file before writing**
2. **New notes must include complete frontmatter** (use actual values, not template placeholders)
3. **Update the `updated` field** when modifying notes
4. **Update the directory's `_index.md`**
5. **Update `_tags.md`** tag index
6. **Update `_graph.md`** relationship graph (if note has `[[]]` links or `related` field)
7. **Actively maintain `related` field** — search for related notes and build bidirectional links
8. **For area type**: update "Current Focus" and "Recent Progress" sections

## Using Templates

All templates are in `templates/` with `{{PLACEHOLDER}}` syntax. When creating notes:
1. Read the template for the note type
2. Replace all `{{}}` placeholders with actual values
3. Do not leave any unreplaced placeholders

## Using the CLI (recommended)

Instead of manual file operations, agents can use the `obsidian-agent` CLI:

```bash
obsidian-agent journal              # Create/open today's journal
obsidian-agent note "Title" type    # Create a note (auto-links related notes)
obsidian-agent capture "idea"       # Quick idea capture
obsidian-agent search "keyword"     # Search notes
obsidian-agent list [type]          # List notes
obsidian-agent review               # Generate weekly review
obsidian-agent sync                 # Rebuild indices
```

The CLI handles frontmatter, linking, and index updates automatically.
