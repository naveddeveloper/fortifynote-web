# FortifyNote Express Redirect

An Express.js app hosted on Vercel to redirect Appwrite password recovery links to the FortifyNote mobile app’s deep link (`fortifynote://reset-password`).

## Overview

This repository contains a lightweight Node.js/Express server designed to bridge Appwrite’s password recovery flow with the "FortifyNote" Flutter mobile app. When a user requests a password reset via Appwrite, this app receives the recovery URL (e.g., `https://fortifynote-express.vercel.app/reset-password?userId=USER_ID&secret=SECRET`), extracts the `userId` and `secret` parameters, and redirects them to the mobile app’s custom URL scheme (`fortifynote://reset-password`).

## Features

- Handles `/reset-password` route to process Appwrite recovery links.
- Redirects to the FortifyNote Flutter app using a custom deep link.
- Deployed as a serverless function on Vercel for scalability and ease of use.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Vercel CLI](https://vercel.com/docs/cli) (optional, for local deployment)
- An Appwrite project configured with this app’s URL as the recovery redirect (e.g., `https://fortifynote-express.vercel.app/reset-password`).

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/naveddeveloper/fortifynote-web.git
   cd fortifynote-web


   