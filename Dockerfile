FROM denoland/deno:alpine-1.29.2

WORKDIR /app

COPY logger.js .

CMD ["run", "--allow-net", "logger.js"]
