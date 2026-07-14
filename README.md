# Zoey Xie Portfolio

期望岗位：UE5.6 PCG Technical Artist / Environment TA / Tools TA。

## Local Preview

```powershell
npm install
npm run dev
```

## Structure

- `src/content.js` - portfolio copy, project data, skills, stats.
- `src/App.jsx` - React page sections.
- `src/styles.css` - full visual system and responsive layout.
- `public/assets/` - temporary visual placeholders.

## Asset Notes

The current project images are generated placeholders. Replace them with real UE/Houdini screenshots or recordings when available.

Hero video slot:

```text
public/assets/hero-loop.mp4
```

If the file exists, the hero video background will play automatically. The current `hero-poster.png` remains as a fallback image.

## Case Study Layout Plan

Each future work page can follow this order:

1. Goal image and final result.
2. Problem definition and art direction.
3. Technical breakdown: PCG graph, Houdini node network, masks, splines, parameters.
4. Tool UX: exposed controls, defaults, validation rules.
5. Before / after or iteration notes.
6. Final captures, video, and postmortem.
