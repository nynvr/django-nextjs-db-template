#!/bin/sh

# Check if we're in development mode
if [ "$NODE_ENV" = "development" ]; then
    echo "WEB - Running in development mode..."

    npm run dev
else
    echo "WEB - Running in production mode..."

    npm run build
    npm run start
fi
