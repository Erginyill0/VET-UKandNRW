# NRW and UK Comparison Website - GitHub Pages Version

This project has a ready-to-host static version in the `docs` folder.

## Publish on GitHub Pages

1. Upload all files to your GitHub repository.
2. Go to your repository on GitHub.
3. Open **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** /docs
6. Click **Save**.
7. Wait 1-3 minutes. Your website will appear at:
   `https://YOUR-GITHUB-NAME.github.io/YOUR-REPOSITORY-NAME/`

No backend is needed.

## For editing

Edit files in `src/`, then run:

```bash
npm install
npm run build
```

Then copy the new `dist` output into `docs` again.
