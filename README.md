# codeprettythings

Personal Rails 8 portfolio using Tailwind for styling.

## Getting started

1. Install dependencies:
   ```bash
   bundle install
   bin/rails db:prepare
   yarn install --check-files
   ```
2. Start the dev server with Tailwind watcher:
   ```bash
   bin/dev
   ```

## Admin authentication

Only authenticated users can create, edit, or delete projects/case studies.

1. Create an admin account via the Rails console (choose your own credentials):
   ```ruby
   User.find_or_create_by!(email: "you@example.com") do |user|
     user.name = "You"
     user.password = "super-secret-password"
   end
   ```
2. Visit `/session/new` (or click **Sign in** in the header) and log in with that email/password.
3. Use the **Sign out** button in the header when you are done. Logged-out visitors can only read published content.

## Deployment (Hostinger VPS)

The site is already running on a Hostinger VPS using the project's Dockerfile and Docker Compose. The existing deployment workflow uses SSH; Kamal is not part of this deployment process.

### Automatic deployment

The workflow in `.github/workflows/deploy.yml` runs when changes are pushed to `main`. In the GitHub repository, configure these under **Settings → Secrets and variables → Actions**:

| Secret | Value |
| --- | --- |
| `VPS_HOST` | Server IP address or hostname |
| `VPS_USER` | SSH username |
| `VPS_SSH_KEY` | Private SSH key authorized to access the server |
| `APP_DIR` | Absolute path to the project directory on the server |

Commit and push the changes to `main`, then check the repository's **Actions** tab for the deployment result. The workflow updates the server checkout to `origin/main`, rebuilds and starts the containers, and checks the app through `http://127.0.0.1:3000`.

The server must have Docker Compose available and an `.env` file in the project directory containing `POSTGRES_PASSWORD` and `SECRET_KEY_BASE`. Keep this file on the server and out of Git.

### Manual deployment

SSH into the VPS, change to the existing project directory, and run:

```bash
git pull origin main
docker compose up -d --build
docker compose logs --tail=100 web
```