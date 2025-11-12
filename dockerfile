# Use the official Bun image as the base
FROM oven/bun AS base

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build the application
COPY . .
RUN bun run build

# Create a production image
FROM base AS runner
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./.next/standalone
COPY --from=base /app/.next/static ./.next/static

# Set the user and run the application
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Expose the application port
EXPOSE 6767

# Command to run the application
CMD ["bun", "server.js"]
