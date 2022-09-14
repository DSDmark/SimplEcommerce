const ColorPicker = {
  mainFunction() {
    this.canvas = document.getElementById("cvs");
    this.CH = this.canvas.height = 400;
    this.CW = this.canvas.width = 400;

    this.canvas.style.background = "black";
    this.ctx = this.canvas.getContext("2d");
    // Add three color stops

    this.gradient = this.ctx.createLinearGradient(0, 0, this.CW, 0);
    this.gradient.addColorStop(0.2, "red");
    this.gradient.addColorStop(0.5, "black");
    this.gradient.addColorStop(1, "white");
    this.ctx.fillStyle = this.gradient;

    this.ctx.fillRect(0, 0, this.CW, this.CW / 2);
    // Set the fill style and draw a rectangle
  }
};

ColorPicker.mainFunction();
