// import { Clerk } from "@clerk/backend";

// export const clerk = Clerk({
//   apiKey: process.env.CLERK_SECRET_KEY,
// });

import { createClerkClient } from "@clerk/backend";

export const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});