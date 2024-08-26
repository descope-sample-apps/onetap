// src/middleware.ts
import { authMiddleware } from '@descope/nextjs-sdk/server'

export default authMiddleware({
	// The Descope project ID to use for authentication
	// Defaults to process.env.DESCOPE_PROJECT_ID
	projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,

	// The URL to redirect to if the user is not authenticated
	// Defaults to process.env.SIGN_IN_ROUTE or '/sign-in' if not provided
	// NOTE: In case it contains query parameters that exist in the original URL, they will override the original query parameters. e.g. if the original URL is /page?param1=1&param2=2 and the redirect URL is /sign-in?param1=3, the final redirect URL will be /sign-in?param1=3&param2=2

	// These are the public and private routes in your app. Read more about how to use these below.
	publicRoutes: ["/"],
    privateRoutes: ["/welcome"],
    redirectUrl: "/",
	// If you having privateRoutes and publicRoutes defined at the same time, privateRoutes will be ignored.
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}