# Deno Logger App

This is a simple logger app written in JavaScript for Deno. It logs important information about incoming HTTP requests, including the method, URL, headers, and body. The app is containerized using Docker for easy deployment. This app was made with chatGPT.

## Prerequisites

- Docker and docker compose installed on your machine

## Getting Started

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Build the Docker image by running the following command:

    ```bash
    docker compose build
    ```

4. Start the logger app in a Docker container by running the following command:

    ```bash
    docker compose up
    ```

The app will be running inside the Docker container, logging incoming requests on port 3000.

Access the logger app by sending HTTP requests to http://localhost:3000. The app will log the request details in the console.

## Configuration

The app is configured to run on port 3000 by default. If you need to change the port, modify the docker-compose.yml file.

## License
This project is licensed under the MIT License.

Feel free to customize and extend the logger app as per your requirements!
