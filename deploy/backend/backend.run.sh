#!/bin/sh

# Check if we're in development mode
if [ "$DEBUG" = "True" ]; then
    echo "BACKEND - Running in development mode..."

    python /app/manage.py makemigrations
    python /app/manage.py migrate --no-input
    python /app/manage.py loaddata /scripts/initialdata.20241009.json
    python /app/manage.py collectstatic --noinput
    python /app/manage.py runserver 0.0.0.0:8000
else
    echo "BACKEND - Running in production mode..."

    python /app/manage.py makemigrations
    python /app/manage.py migrate --no-input
    python /app/manage.py loaddata /scripts/initialdata.20241009.json
    python /app/manage.py collectstatic --noinput
    gunicorn project.wsgi:application --bind 0.0.0.0:8000 &

    unlink /etc/nginx/sites-enabled/default
    nginx -g 'daemon off;'
fi