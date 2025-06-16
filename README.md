This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the necessary package:

```bash
npm install
```

After that, you'll need to create a `.env` file and fill it with variables as presented in the `.env.local` file and update keys values with your own.

1. The database keys come from your postgreSQL database provider as Supabase or Neon database.
2. The clerk keys are provided in your Clerck Dashboard after you logged in and create a project.

⚠️ The Clerck Dashboard only provides the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and the `CLERK_SECRET_KEY`. The rremaining keys may vary depending on the project structure and logic you implement. But for this one, don't change them. Only update the keys provided to you by Clerk.

Then, run the development server:

```bash
npm run dev
```

🚀 You're good to go. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the f

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

