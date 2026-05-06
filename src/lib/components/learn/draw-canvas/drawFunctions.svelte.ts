interface Point {
    x: number;
    y: number;
    pressure: number;
}

interface Stroke {
    points: Point[];
    isEraser: boolean;
    color: string;
    baseSize: number;
}

// Canvas references
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

export const drawState = $state({
    isDrawing: false,
    strokes: [] as Stroke[],
    currentStroke: [] as Point[],
    points: [] as Point[],
    currentColor: '#e1e1e1',
    currentSize: 8,
    isEraser: false,
    sizeValue: 8,
});

export function initCanvas(canvasElement: HTMLCanvasElement): void {
    canvas = canvasElement;
    ctx = canvas.getContext('2d');
    resizeCanvas();
}

export function resizeCanvas(): void {
    if (!canvas || !ctx) return;
    const container = canvas?.parentElement;
    if (!container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    redrawAll();
}

function getCoordinates(e: PointerEvent | TouchEvent): Point {
    const rect = canvas!.getBoundingClientRect();
    let clientX: number;
    let clientY: number;

    if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = (e as PointerEvent).clientX;
        clientY = (e as PointerEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const pressure =
        (e as PointerEvent).pressure !== undefined
            ? (e as PointerEvent).pressure
            : 1;

    return { x, y, pressure };
}

export function startDrawing(e: PointerEvent | TouchEvent): void {
    drawState.isDrawing = true;
    const point = getCoordinates(e);

    drawState.points = [point];
    drawState.currentStroke = [];

    if (!ctx) return;

    if (drawState.isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
    } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = drawState.currentColor;
    }

    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
}

export function draw(e: PointerEvent | TouchEvent): void {
    if (!drawState.isDrawing || !ctx) return;

    const point = getCoordinates(e);
    const dynamicSize = drawState.isEraser
        ? drawState.currentSize
        : drawState.currentSize * (0.5 + point.pressure);

    drawState.points.push(point);

    ctx.lineWidth = dynamicSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (drawState.isEraser) {
        ctx!.globalCompositeOperation = 'destination-out';
        ctx!.strokeStyle = 'rgba(0, 0, 0, 1)';
    } else {
        ctx!.globalCompositeOperation = 'source-over';
        ctx!.strokeStyle = drawState.currentColor;
    }

    if (drawState.points.length > 2) {
        const prev = drawState.points[drawState.points.length - 2];
        const midX = (prev.x + point.x) / 2;
        const midY = (prev.y + point.y) / 2;

        ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
        ctx.stroke();
    } else {
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
    }

    drawState.currentStroke.push(point);
}

export function stopDrawing(): void {
    if (!drawState.isDrawing) return;
    drawState.isDrawing = false;

    if (drawState.currentStroke.length > 0 && ctx) {
        drawState.strokes = [
            ...drawState.strokes,
            {
                points: [...drawState.currentStroke],
                isEraser: drawState.isEraser,
                color: drawState.currentColor,
                baseSize: drawState.currentSize,
            },
        ];
    }

    drawState.points = [];
    drawState.currentStroke = [];
    if (ctx) ctx.closePath();
}

export function clearCanvas(): void {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);
    drawState.strokes = [];
}

export function undo(): void {
    if (drawState.strokes.length === 0) return;
    drawState.strokes = drawState.strokes.slice(0, -1);
    redrawAll();
}

function redrawAll(): void {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);

    drawState.strokes.forEach((stroke) => {
        ctx!.beginPath();

        if (stroke.points.length < 1) return;

        ctx!.moveTo(stroke.points[0].x, stroke.points[0].y);

        for (let i = 1; i < stroke.points.length; i++) {
            const prev = stroke.points[i - 1];
            const curr = stroke.points[i];
            const midX = (prev.x + curr.x) / 2;
            const midY = (prev.y + curr.y) / 2;

            ctx!.quadraticCurveTo(prev.x, prev.y, midX, midY);
        }

        ctx!.lineWidth = stroke.baseSize || 8;
        ctx!.lineCap = 'round';
        ctx!.lineJoin = 'round';

        if (stroke.isEraser) {
            ctx!.globalCompositeOperation = 'destination-out';
            ctx!.strokeStyle = 'rgba(0, 0, 0, 1)';
        } else {
            ctx!.globalCompositeOperation = 'source-over';
            ctx!.strokeStyle = stroke.color;
        }

        ctx!.stroke();
    });

    ctx!.globalCompositeOperation = 'source-over';
}
