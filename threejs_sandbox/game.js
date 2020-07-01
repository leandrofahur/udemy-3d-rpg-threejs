class Game {
  constructor() {
    
    this.t = 0.0;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const geometry = new THREE.CircleGeometry(0.1,360);
    const material = new THREE.MeshBasicMaterial({color: 0xcccccc});
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
    this.animate();
  }

  animate() {
    const game = this;
    requestAnimationFrame(()=>{
      game.animate();
    });

    this.cube.position.x = Math.sin(this.t);
    this.cube.position.y = Math.cos(this.t);
    this.t += 2*Math.PI/360;

	  this.renderer.render(this.scene, this.camera);
  }
}