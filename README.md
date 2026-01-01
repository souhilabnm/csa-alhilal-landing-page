# CSA ALHILAL BBA - Club de Futsal

Site web officiel du CSA ALHILAL BBA, club de futsal algérien évoluant en Nationale 1.

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Deployment to cPanel

### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files to cPanel:**
   - Log in to your cPanel account
   - Navigate to **File Manager**
   - Go to your domain's `public_html` folder (or the subdirectory where you want to deploy)
   - Upload all contents from the `dist` folder (NOT the `dist` folder itself)
   - Upload the `.htaccess` file from the project root to the same directory

3. **File structure on server:**
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js
   │   ├── index-[hash].css
   │   └── ...
   └── ...
   ```

4. **Important Notes:**
   - Make sure the `.htaccess` file is uploaded (it's required for proper routing)
   - Ensure all files from the `dist` folder are uploaded
   - The `.htaccess` file enables proper routing for the React SPA
   - Clear your browser cache if you don't see the latest version

### Alternative: Using cPanel's Terminal

If you have SSH/terminal access:

```bash
# Navigate to your project directory
cd /path/to/your/project

# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Copy files to public_html
cp -r dist/* ~/public_html/
cp .htaccess ~/public_html/
```

## Credits

Built by Souhila Benmenni using Google AI Studio and Cursor.
