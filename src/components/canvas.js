import React, { useEffect } from 'react';
import { css } from '@emotion/core';
const random = require('canvas-sketch-util/random');
const { lerp } = require('canvas-sketch-util/math');

const Canvas = () => {
  const marginConst = 0.0;
  let width = '100px';
  let height = '100px';

  if (window) {
    width = window.innerWidth;
    height = window.innerHeight * 0.4;
  }

  const sketch = ({ width, height }) => {
    // Padding around edges
    const margin = width * marginConst;
    const palette = random.pick([
      ['#84BC92', '#623CEA', '#EABA8A', '#191011', '#FAF9FC'],
    ]);

    const canvasContainer = document.getElementById('canvas-container');
    let canvas = canvasContainer.querySelector('canvas');

    // refactor to create canvas function
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      canvas.setAttribute('id', 'canvas');
    } else canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    canvasContainer.appendChild(canvas);

    const context = canvas.getContext('2d');
    const background = 'white';

    // Create a grid of points (in pixel space) within the margin bounds
    const createGrid = () => {
      const xCount = 4;
      const yCount = 4;
      const points = [];
      for (let x = 0; x < xCount; x++) {
        for (let y = 0; y < yCount; y++) {
          const u = x / (xCount - 1);
          const v = y / (yCount - 1);
          const px = lerp(margin, width - margin, u);
          const py = lerp(margin, height - margin, v);
          points.push([px, py]);
        }
      }
      return points;
    };

    // Create the grid
    let grid = createGrid();

    // Now create the shapes
    let shapes = [];

    // As long as we still have two grid points left
    while (grid.length > 2) {
      // Select two random points from the grid
      const pointsToRemove = random.shuffle(grid).slice(0, 2);
      // Not enough points left, just break out
      if (pointsToRemove.length < 2) {
        break;
      }

      // The color of this trapezoid
      const color = random.pick(palette);

      // Filter these points out of the grid
      grid = grid.filter(p => !pointsToRemove.includes(p));

      // Now let's form the trapezoid from points A to B
      const [a, b] = pointsToRemove;

      shapes.push({
        color,
        // The path goes from the bottom of the page,
        // up to the first point,
        // through the second point,
        // and then back down to the bottom of the page
        path: [[a[0], height - margin], a, b, [b[0], height - margin]],
        // The average Y position of both grid points
        // This will be used for layering
        y: (a[1] + b[1]) / 2,
      });
    }

    // Sort/layer the shapes according to their average Y position
    shapes.sort((a, b) => a.y - b.y);

    // Now render
    return () => {
      context.globalAlpha = 1;
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      shapes.forEach(({ lineWidth, path, color }) => {
        context.beginPath();
        let [lastX, lastY] = random.pick(path);
        const randomNumber = random.range(20, 80);
        // let lastY = , lastX = 0;
        path.forEach(([x, y]) => {
          // context.arc(x, y, 40, 0);
          context.bezierCurveTo(
            lastX,
            lastY + randomNumber,
            x,
            lastY - randomNumber * 0.5,
            x,
            y,
          );
          lastX = x;
          lastY = y;
        });
        context.closePath();

        // Draw the trapezoid with a specific colour
        // context.lineWidth = (window.width / 100) * 5 > 30 ? 30 : (window.width / 100) * 5;
        context.lineWidth = 5;
        context.globalAlpha = 0.85;
        context.fillStyle = color;
        context.fill();

        // Outline at full opacity
        context.lineJoin = context.lineCap = 'round';
        context.strokeStyle = background;
        context.globalAlpha = 1;
        context.stroke();
      });
    };
  };

  useEffect(() => {
    // const context = createContext();
    sketch({ width, height })();
  });

  return (
    <section
      id="canvas-container"
      css={css`
        position: absolute;
        z-index: -1;
      `}
    ></section>
  );
};

export default Canvas;
