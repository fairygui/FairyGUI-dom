
/**
 * <code>Vec2</code> 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
 */
export class Vec3 {
    /**该点的水平坐标。*/
    x: number;
    /**该点的垂直坐标。*/
    y: number;
    z: number;

    /**
     * 根据指定坐标，创建一个新的 <code>Vec2</code> 对象。
     * @param x	（可选）水平坐标。
     * @param y	（可选）垂直坐标。
     */
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }


    /**
     * 将 <code>Vec2</code> 的成员设置为指定值。
     * @param	x 水平坐标。
     * @param	y 垂直坐标。
     * @return 当前 Vec2 对象。
     */
    set(x: number, y: number, z: number): Vec3 {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**
     * 重置
     */
    reset(): Vec3 {
        this.x = this.y = this.z = 0;
        return this;
    }

    /**返回包含 x 和 y 坐标的值的字符串。*/
    toString(): string {
        return this.x + "," + this.y + "," + this.z;
    }

    add(v: Vec3): void {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    sub(v: Vec3): void {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }

    cross(v: Vec3): void {
        let a = this;

        const ax = a.x, ay = a.y, az = a.z;
        const bx = v.x, by = v.y, bz = v.z;

        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
    }

    multiplyScalar(scalar: number): void {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    }

    normalize(): void {
        var x: number = this.x, y: number = this.y, z: number = this.z;
        var len: number = x * x + y * y + z * z;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
            this.x = x * len;
            this.y = y * len;
            this.z = z * len;
        }
    }

    copy(v: Vec3): void {
        this.set(v.x, v.y, v.z);
    }

    equals(another: Vec3): boolean {
        return this.x == another.x && this.y == another.y && this.z == another.z;
    }
}

