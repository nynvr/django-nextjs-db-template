# Use an official Python runtime as the base image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
        nginx -y \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY ./backend/requirements.txt .
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copy the project code into the container
COPY ./backend/app /app
COPY ./deploy/backend/initialdata.20241009.json ./deploy/backend/backend.run.sh /scripts/
COPY ./deploy/backend/backend.development.default.conf /etc/nginx/conf.d/default.conf

RUN chmod +x /scripts/backend.run.sh
CMD ["/scripts/backend.run.sh"]