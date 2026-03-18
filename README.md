# p5.js Classroom Template

A Docker-based development environment for p5.js sketches.

## Getting Started

1. **Use this template** (click "Use this template" above) to create your own repository
2. **Clone your repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO
   cd YOUR_REPO
   ```
3. **Start the server**:
   ```bash
   docker-compose up
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Creating Sketches

Each sketch lives in its own folder inside `sketches/`:

```
sketches/
  my-sketch/
    index.html
    sketch.js
```

Copy the `sketches/hello-world/` folder as a starting point.

## Saving Your Work Across Machines

Your sketches are stored in the `sketches/` folder on your machine — not locked inside Docker. To save and access them from another computer:

```bash
git add sketches/
git commit -m "Add my sketch"
git push
```

On another machine:
```bash
git pull
docker-compose up
```

## Stopping the Server

```bash
docker-compose down
```
