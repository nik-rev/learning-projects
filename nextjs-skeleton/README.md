# NextJS Skeleton

## Get Started

### Setup

1. Run `pnpm install`
1. Rename `.env.example` to `.env` and fill out the environmental variables.
1. If you want to add more env variables, make sure to also add them in `env.ts`
1. Change `prisma/schema.prisma` to conform to your project's requirements.

### Prisma Commands

1. Run `npx prisma migrate dev --name <name>` to migrate your schema.
1. Run `npx prisma generate` to regenerate the prisma client.
1. Run `npx prisma studio` to launch database view.

## Info

### Dependencies

```bash
# default Next JS Dependencies
react
react-dom
next

# prisma client
@prisma/client

# Utilites
zod
react-hook-form

# bcrypt for password hashing
bcryptjs

# icons
react-icons
```

### Dev Dependencies

```bash
# default Next JS Dev Dependencies
typescript
@types/node
@types/react
@types/react-dom
postcss
tailwindcss
eslint
eslint-config-next

# types
@types/bcryptjs

# authentication
next-auth@beta

# prisma
prisma
@auth/prisma-adapter


# BaaS specific (I like supabase)
supabase

# eslint
eslint-config-prettier
eslint-plugin-const-case
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-perfectionist
eslint-plugin-prettier
eslint-plugin-promise
eslint-plugin-regexp
eslint-plugin-security
eslint-plugin-sonarjs
eslint-plugin-tailwindcss
eslint-plugin-unicorn
```
