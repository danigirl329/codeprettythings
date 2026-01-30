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
