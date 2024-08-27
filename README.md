![google-one-tap](https://github.com/user-attachments/assets/9c5992cd-dd4f-4abd-b89a-9f8721030f1a)

# Descope's Google One Tap Sample App

Welcome to Descope's Google One Tap Sample App, built with [NextJS](https://nextjs.org/) and Descope-powered [Google One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap).


# Installation

1. Clone the repository:

```
git clone https://github.com/descope-sample-apps/onetap.git
```

2. Install dependencies:

```
npm install
```

3. Setup environment variables:

```
NEXT_PUBLIC_DESCOPE_PROJECT_ID="YOUR_DESCOPE_PROJECT_ID" // Required

```

Use .env.example and rename to .env after adding the environment variables.

> **_NOTE:_** NEXT_PUBLIC_DESCOPE_PROJECT_ID is your Descope Project ID which you can find under [Project Settings](https://app.descope.com/settings/project), in the console.

## Running the Application 

To start the application, run:

```
npm run dev
```

Navigate to `http://localhost:3000/` in your browser.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
