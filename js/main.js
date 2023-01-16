var scene, camera, renderer;
var arToolkitSource, arToolkitContext;
var markerRoot;

function initAR() {

    
    // Create a scene
    scene = new THREE.Scene();

    // Create a camera
    camera = new THREE.Camera();
    scene.add(camera);

    // Create a renderer
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(640, 480);
    document.body.appendChild(renderer.domElement);

    // Initialize the AR toolkit
    arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
    });

    arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'data/camera_para.dat',
        detectionMode: 'mono',
    });

    // Handle resize events
    arToolkitSource.init(function onReady() {
        onResize();
    });

    window.addEventListener('resize', function () {
        onResize();
    });

    // Create a marker
    markerRoot = new THREE.Group();
    scene.add(markerRoot);
    var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
        type: 'pattern',
        patternUrl: "pattern-marker.patt",
    });

    // Create a 3D model and add it to the marker
    var loader = new THREE.GLTFLoader();
    loader.load('model.gltf', function (gltf) {
        markerRoot.add(gltf.scene);
    });

    // Start the renderer
    update();
}

function onResize() {
    arToolkitSource.onResize();
    arToolkitSource.copySizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
        arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
    }
}

function update() {
    requestAnimationFrame(update);
    if (arToolkitSource.ready === false) return;
    arToolkitContext.update(arToolkitSource.domElement);
    renderer.render(scene, camera);
}



//initialize the AR
initAR();