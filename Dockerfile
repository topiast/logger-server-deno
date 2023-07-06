FROM denoland/deno:alpine-1.29.2

EXPOSE 3000

WORKDIR /app

COPY logger.js .

CMD ["run", "--allow-net", "logger.js"]
