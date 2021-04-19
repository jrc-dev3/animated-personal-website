
  const space = document.querySelector(".testspace")
  const textspace = document.querySelector(".textspace")

  console.log(textspace)

  const scene = new THREE.Scene();
  const textScene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera( 500, space.offsetWidth / space.offsetHeight, .1, 1000 );
  const textcamera = new THREE.PerspectiveCamera( 500, textspace.offsetWidth / textspace.offsetHeight, 1, 1000 );
  textcamera.position.set(-10, 0, 80);
  textcamera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( space.offsetWidth, space.offsetHeight );
  space.appendChild( renderer.domElement)

  const textRenderer = new THREE.WebGLRenderer();
  textRenderer.setSize( textspace.offsetWidth, textspace.offsetHeight );
  textspace.appendChild( textRenderer.domElement)

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial( { color: "white" } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );



  const loader = new THREE.FontLoader();

  loader.load( 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function ( font ) {

  const textgeo = new THREE.TextGeometry( 'test', {
    font: font,
    size: 5,
    height: 1,
    curveSegments: 2,
    // bevelEnabled: true,
    material: 0,
    extrudeMaterial: 1
  } );

  textgeo.center();
  const material = new THREE.MeshBasicMaterial( { color: "red" } );
  const text = new THREE.Mesh( textgeo, material );
  textScene.add( text );

  } );


  camera.position.z = 5;
  textcamera.position.z = 5;



  const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  function render() {
    requestAnimationFrame(render);
    textRenderer.render(textScene, textcamera);
  }


  animate()
  render()
