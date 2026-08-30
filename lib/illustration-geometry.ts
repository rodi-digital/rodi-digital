/**
 * Geometry for the emergence illustrations, in 3D.
 *
 * Everything is generated here rather than modelled, so the five illustrations
 * stay consistent with each other and stay re-tunable. The generators are
 * deterministic — a fixed-seed PRNG — so a scene looks the same on every load.
 */

export type Vec3 = [number, number, number];

/** mulberry32 — small, fast, stable across environments. */
function prng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A cloud that animates from `start` (scattered) to `end` (resolved). */
export interface PointCloud {
  count: number;
  start: Float32Array;
  end: Float32Array;
}

function cloud(count: number, fill: (i: number, rand: () => number) => [Vec3, Vec3], seed: number): PointCloud {
  const rand = prng(seed);
  const start = new Float32Array(count * 3);
  const end = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const [s, e] = fill(i, rand);
    start.set(s, i * 3);
    end.set(e, i * 3);
  }
  return { count, start, end };
}

/**
 * AI — a scattered field of agents resolving onto one coherent surface. The
 * same idea as the hero murmuration: many simple parts, one emergent form.
 */
export function emergenceCloud(): PointCloud {
  const count = 900;
  return cloud(
    count,
    (i, rand) => {
      // Fibonacci sphere, so the resolved surface is evenly covered.
      const t = (i + 0.5) / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.35;
      const end: Vec3 = [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ];
      const start: Vec3 = [
        (rand() - 0.5) * 5.5,
        (rand() - 0.5) * 5.5,
        (rand() - 0.5) * 5.5,
      ];
      return [start, end];
    },
    20260829
  );
}

/** Mobile — nested planes settling into a frame, separated in depth. */
export function frameLoops(): Vec3[][] {
  const planes = 5;
  const loops: Vec3[][] = [];
  for (let i = 0; i < planes; i++) {
    const w = 1.5 - i * 0.22;
    const h = 1.5 - i * 0.22;
    const z = -i * 0.42;
    loops.push(roundedRectPath(w, h, 0.18, z));
  }
  return loops;
}

/** Web — a ground grid that draws itself, with blocks standing up out of it. */
export function gridLines(): Vec3[][] {
  const cells = 6;
  const half = 1.7;
  const step = (half * 2) / cells;
  const lines: Vec3[][] = [];
  for (let i = 0; i <= cells; i++) {
    const p = -half + i * step;
    lines.push([
      [-half, 0, p],
      [half, 0, p],
    ]);
    lines.push([
      [p, 0, -half],
      [p, 0, half],
    ]);
  }
  return lines;
}

/** The blocks that rise out of the grid — a masthead, a sidebar, a body. */
export function gridBlocks(): { size: Vec3; position: Vec3 }[] {
  return [
    { size: [2.2, 0.28, 0.5], position: [0, 0.14, -1.1] },
    { size: [0.7, 0.9, 1.6], position: [-0.75, 0.45, 0.35] },
    { size: [1.2, 0.6, 1.6], position: [0.6, 0.3, 0.35] },
  ];
}

/** Analytics — noise collapsing onto a trend. */
export function signalCloud(): PointCloud {
  const count = 120;
  return cloud(
    count,
    (_, rand) => {
      const t = rand();
      const end: Vec3 = [
        -1.6 + t * 3.2,
        signalY(t),
        (rand() - 0.5) * 0.28,
      ];
      const start: Vec3 = [
        -1.6 + t * 3.2 + (rand() - 0.5) * 0.8,
        (rand() - 0.5) * 2.6,
        (rand() - 0.5) * 1.6,
      ];
      return [start, end];
    },
    773311
  );
}

export function signalCurve(): Vec3[] {
  const steps = 64;
  const pts: Vec3[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    pts.push([-1.6 + t * 3.2, signalY(t), 0]);
  }
  return pts;
}

function signalY(t: number) {
  // Rising, easing off — a trend rather than a straight line.
  return -0.95 + Math.pow(t, 0.72) * 1.9;
}

/** Collaboration — two fields closing the gap between them. */
export interface ConvergeGeometry {
  cloud: PointCloud;
  /** Index pairs to draw links between, once the fields are close. */
  links: [number, number][];
}

export function convergeGeometry(): ConvergeGeometry {
  const perSide = 11;
  const count = perSide * 2;
  const rand = prng(4242);
  const start = new Float32Array(count * 3);
  const end = new Float32Array(count * 3);

  for (let side = 0; side < 2; side++) {
    const dir = side === 0 ? -1 : 1;
    for (let i = 0; i < perSide; i++) {
      const idx = side * perSide + i;
      const t = i / (perSide - 1);
      const y = -1.1 + t * 2.2;
      const z = (rand() - 0.5) * 0.9;
      // The gap stays open: the fields approach but never meet, so the links
      // between them remain readable as links rather than as a solid block.
      start.set([dir * (2.9 + rand() * 0.9), y + (rand() - 0.5) * 0.7, z], idx * 3);
      end.set([dir * (0.95 + rand() * 0.25), y, z], idx * 3);
    }
  }

  const links: [number, number][] = [];
  for (let i = 0; i < perSide; i++) links.push([i, i + perSide]);

  return { cloud: { count, start, end }, links };
}

function roundedRectPath(w: number, h: number, r: number, z: number): Vec3[] {
  const pts: Vec3[] = [];
  const hw = w / 2;
  const hh = h / 2;
  const corners: [number, number, number][] = [
    [hw - r, hh - r, 0],
    [-(hw - r), hh - r, Math.PI / 2],
    [-(hw - r), -(hh - r), Math.PI],
    [hw - r, -(hh - r), -Math.PI / 2],
  ];
  const seg = 6;
  for (const [cx, cy, a0] of corners) {
    for (let i = 0; i <= seg; i++) {
      const a = a0 + (i / seg) * (Math.PI / 2);
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r, z]);
    }
  }
  pts.push(pts[0]);
  return pts;
}
