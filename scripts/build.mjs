import { mkdirSync, writeFileSync } from 'node:fs'

const revision = process.env.GITHUB_SHA || process.env.VOS_GIT_COMMIT_SHA || 'local'

mkdirSync('dist', { recursive: true })
writeFileSync(
  'dist/index.html',
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VOS GitHub Native Proof</title>
    <style>
      :root { color-scheme: light dark; font-family: ui-sans-serif, system-ui, sans-serif; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #101214; color: #f7f7f5; }
      main { max-width: 680px; padding: 48px; }
      h1 { margin: 0 0 16px; font-size: clamp(2rem, 5vw, 4rem); letter-spacing: 0; }
      p { margin: 0; font-size: 1.125rem; line-height: 1.6; color: #cfd3d6; }
      code { color: #8bd3ff; }
    </style>
  </head>
  <body>
    <main>
      <h1>VOS deploy is live</h1>
      <p>Built from GitHub source archive and served by the VOS runtime. Revision <code>${revision}</code>.</p>
    </main>
  </body>
</html>
`,
)
