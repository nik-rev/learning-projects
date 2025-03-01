import { z } from "zod";

import typeSafeObjectFromEntries from "@/lib/wrapper/object-from-entries";

const envVariables = [
  "NEXTAUTH_SECRET",
  "DATABASE_URL",
  "DIRECT_URL",
  "AUTH_GITHUB_ID",
  "AUTH_GITHUB_SECRET",
  "EMAIL_FROM",
  "EMAIL_SERVER_PASSWORD",
  "EMAIL_SERVER_USER",
  "EMAIL_SERVER_HOST",
  "EMAIL_SERVER_PORT",
] as const;

const EnvVariablesSchema = z.object(
  typeSafeObjectFromEntries(
    envVariables.map((envVariable) => {
      return [envVariable, z.string().min(1)];
    }),
  ),
);

const env = EnvVariablesSchema.parse(process.env);

export default env;
