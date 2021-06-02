
export class Vec2 {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    set(x: number, y: number): Vec2 {
        this.x = x;
        this.y = y;
        return this;
    }

    reset(): Vec2 {
        this.x = this.y = 0;
        return this;
    }

    distance(x: number, y: number): number {
        return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
    }

    toString(): string {
        return this.x + "," + this.y;
    }

    normalize(): void {
        var d: number = Math.sqrt(this.x * this.x + this.y * this.y);
        if (d > 0) {
            var id: number = 1.0 / d;
            this.x *= id;
            this.y *= id;
        }
    }

    copy(Vec2: Vec2): Vec2 {
        return this.set(Vec2.x, Vec2.y);
    }

    clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    equals(another: Vec2): boolean {
        return this.x == another.x && this.y == another.y;
    }
}

