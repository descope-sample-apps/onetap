// src/middleware.ts
import { authMiddleware } from '@descope/nextjs-sdk/server'

export default authMiddleware({
	// The Descope project ID to use for authentication
	// Defaults to process.env.DESCOPE_PROJECT_ID
	projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,
	publicRoutes: ["/"],
    redirectUrl: "/",
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}