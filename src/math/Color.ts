
export class Color {
	static CLEAR: Color = new Color(0, 0, 0, 0);
	static RED: Color = new Color(1, 0, 0, 1);
	static GREEN: Color = new Color(0, 1, 0, 1);
	static BLUE: Color = new Color(0, 0, 1, 1);
	static YELLOW: Color = new Color(1, 1, 0, 1);
	static GRAY: Color = new Color(0.5, 0.5, 0.5, 1);
	static BLACK: Color = new Color(0, 0, 0, 1);
	static WHITE: Color = new Color(1, 1, 1, 1);

	public r: number;
	public g: number;
	public b: number;
	public a: number;

	constructor(r: number = 1, g: number = 1, b: number = 1, a: number = 1) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	public setRGB(rgb: number) {
		this.r = ((rgb >> 16) & 0xFF) / 255;
		this.g = ((rgb >> 8) & 0xFF) / 255;
		this.b = (rgb & 0xFF) / 255;
	}

	public copyTo(destObject: any): void {
		var destColor: Color = (<Color>destObject);
		destColor.r = this.r;
		destColor.g = this.g;
		destColor.b = this.b;
		destColor.a = this.a;
	}

	public clone(): Color {
		var dest: Color = new Color();
		this.copyTo(dest);
		return dest;
	}

	public getHex() {
		return (Math.round(this.r * 255) << 16) + (Math.round(this.g * 255) << 8) + Math.round(this.b * 255);
	}

	public toHexString() {
		return "#" + ('000000' + this.getHex().toString(16)).slice(- 6);
	}

	public toStyleString() {
		if (this.a == 1)
			return this.toHexString();
		else
			return "rgba(" + Math.round(this.r * 255) + "," + Math.round(this.g * 255) + "," + Math.round(this.b * 255) + "," + this.a + ")";
	}

	public parseHexString(str: string) {
		if (str.length < 1)
			return Color.BLACK;

		if (str.charAt(0) == "#")
			str = str.substr(1);

		let rgb: number;
		let a: number = 255;
		if (str.length == 8) {
			a = parseInt(str.substr(0, 2), 16);
			rgb = parseInt(str.substr(2), 16);
		}
		else
			rgb = parseInt(str, 16);

		this.r = ((rgb >> 16) & 0xFF) / 255;
		this.g = ((rgb >> 8) & 0xFF) / 255;
		this.b = (rgb & 0xFF) / 255;
		this.a = a / 255;
	}

	public static fromHexString(str: string): Color {
		let c = new Color();
		c.parseHexString(str);
		return c;
	}
}
