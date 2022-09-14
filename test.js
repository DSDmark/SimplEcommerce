const ColorPicker = {
  mainFunction() {
    this.canvas = document.getElementById("cvs");
    this.CH = this.canvas.height = 400;
    this.CW = this.canvas.width = 400;

    this.canvas.style.background = "black";
    this.ctx = this.canvas.getContext("2d");
    this.gradient = this.ctx.createLinearGradient(0, 0, this.CW, 0);
    // Add three color stops
    this.gradient.addColorStop(0, "green");
    this.gradient.addColorStop(0.5, "cyan");
    this.gradient.addColorStop(1, "green");

    // Set the fill style and draw a rectangle
    this.ctx.fillStyle = this.gradient;
    this.ctx.fillRect(0, 0, this.CW, this.CW / 2);
  }
};

ColorPicker.mainFunction();
