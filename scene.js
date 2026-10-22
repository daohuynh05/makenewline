(() => {
  const canvas=document.getElementById('desk-canvas');
  const host=document.getElementById('workspace-scene');
  const rotateButton=document.getElementById('rotate-desk');
  const resetButton=document.getElementById('reset-desk');
  const lampButton=document.getElementById('toggle-lamp');
  const fallback=()=>{canvas.hidden=true;canvas.style.display='none';host.querySelector('.scene-fallback').hidden=false;[rotateButton,resetButton,lampButton].forEach(b=>b.disabled=true);host.querySelector('.drag-hint').textContent='Một góc làm việc nhỏ';host.querySelector('.scene-caption').hidden=true;};
  if(!window.THREE){fallback();return;}
  const T=window.THREE;
  let renderer;
  try{renderer=new T.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{fallback();return;}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));
  renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
  const scene=new T.Scene();
  const camera=new T.PerspectiveCamera(33,1,.1,80);
  camera.position.set(6.6,5.1,7.2);camera.lookAt(0,.88,0);
  const ambient=new T.HemisphereLight(0xf7f6e8,0x8b9c7b,2.45);scene.add(ambient);
  const sun=new T.DirectionalLight(0xfff3d5,3.2);sun.position.set(-3,7,4);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-5;sun.shadow.camera.right=5;sun.shadow.camera.top=5;sun.shadow.camera.bottom=-5;sun.shadow.normalBias=.035;sun.shadow.bias=-.0003;scene.add(sun);
  const fill=new T.DirectionalLight(0xd5e6ce,1.15);fill.position.set(5,4,-3);scene.add(fill);
  const ground=new T.Mesh(new T.PlaneGeometry(30,30),new T.ShadowMaterial({opacity:.14}));ground.rotation.x=-Math.PI/2;ground.position.y=-.87;ground.receiveShadow=true;scene.add(ground);
  const desk=new T.Group();scene.add(desk);
  const material=(color,roughness=.75,metalness=0)=>new T.MeshStandardMaterial({color,roughness,metalness});
  const mat={wood:material(0xc69c72),edge:material(0xaf865e),leg:material(0x78916f),laptop:material(0x82927a,.45,.22),screenFrame:material(0x3d513b,.5,.1),keys:material(0x62775b),cream:material(0xece6cf),coffee:material(0x654e37),leaf:material(0x6e8b53),leafLight:material(0x91a975),stem:material(0x5d784a),sage:material(0x8da17c),paper:material(0xf0ead2),sand:material(0xb59671),pot:material(0xd5cdb0),lamp:material(0x69815c,.65,.1)};
  const geometries=new Map();
  function roundedBox(w,h,d,r=.035){
    const key=[w,h,d,r].join(':');if(geometries.has(key))return geometries.get(key);
    r=Math.min(r,w/3,h/3,d/3);const x=-w/2+r,y=-h/2+r,iw=w-2*r,ih=h-2*r;
    const shape=new T.Shape();shape.moveTo(x,y);shape.lineTo(x+iw,y);shape.lineTo(x+iw,y+ih);shape.lineTo(x,y+ih);shape.closePath();
    const geometry=new T.ExtrudeGeometry(shape,{steps:1,depth:d-2*r,bevelEnabled:true,bevelSegments:3,bevelSize:r,bevelThickness:r,curveSegments:4});geometry.translate(0,0,-d/2+r);geometry.computeVertexNormals();geometries.set(key,geometry);return geometry;
  }
  function box(w,h,d,mat,x,y,z,r=.025,parent=desk){const mesh=new T.Mesh(roundedBox(w,h,d,r),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function cylinder(top,bottom,height,mat,x,y,z,parent=desk){const mesh=new T.Mesh(new T.CylinderGeometry(top,bottom,height,32),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function sphere(radius,mat,x,y,z,parent=desk){const mesh=new T.Mesh(new T.SphereGeometry(radius,20,14),mat);mesh.position.set(x,y,z);mesh.castShadow=true;parent.add(mesh);return mesh;}
  // A wooden desktop, soft bevels, and slightly splayed legs.
  box(4.4,.18,2.55,mat.wood,0,1.04,0,.07);
  for(const x of[-1.82,1.82])for(const z of[-.92,.92]){const leg=box(.15,1.83,.15,mat.leg,x,.04,z,.025);leg.rotation.z=x>0?-.035:.035;leg.rotation.x=z>0?.025:-.025;}
  box(3.72,.12,.10,mat.leg,0,-.10,-.92,.018);
  // Laptop, with a locally generated screen texture.
  const laptop=new T.Group();laptop.position.set(-.30,1.18,-.13);laptop.rotation.y=-.06;desk.add(laptop);
  const laptopMeshes=[];
  laptopMeshes.push(box(1.93,.10,1.18,mat.laptop,0,0,0,.045,laptop));
  box(1.62,.012,.57,mat.keys,0,.058,-.12,.012,laptop);
  for(let row=0;row<4;row++)for(let col=0;col<12;col++)box(.10,.014,.085,mat.laptop,-.72+col*.13,.067,-.34+row*.132,.007,laptop);
  box(.48,.012,.25,mat.laptop,0,.063,.35,.018,laptop);
  const lid=new T.Group();lid.position.set(0,.02,-.55);lid.rotation.x=-.16;laptop.add(lid);
  laptopMeshes.push(box(1.93,1.27,.085,mat.screenFrame,0,.62,0,.04,lid));
  const screenCanvas=document.createElement('canvas');screenCanvas.width=1024;screenCanvas.height=640;
  const sc=screenCanvas.getContext('2d');sc.fillStyle='#e9efdc';sc.fillRect(0,0,1024,640);sc.fillStyle='#d2dec3';sc.fillRect(0,0,1024,56);['#93ab7e','#bdcbaa','#dae2ca'].forEach((c,i)=>{sc.fillStyle=c;sc.beginPath();sc.arc(31+i*28,28,7,0,Math.PI*2);sc.fill();});
  sc.fillStyle='#748b60';sc.font='22px monospace';sc.fillText('huynh / workspace',45,118);sc.fillStyle='#3c5835';sc.font='500 63px sans-serif';sc.fillText('hello, world.',45,207);sc.fillStyle='#738667';sc.font='24px monospace';sc.fillText('a little curiosity goes a long way.',45,260);
  for(let i=0;i<3;i++){sc.fillStyle=['#d5dfc8','#dde5d2','#d5dfc8'][i];sc.fillRect(45+i*313,316,292,220);sc.fillStyle='#7c9368';sc.font='21px sans-serif';sc.fillText(['ideas','in progress','made with care'][i],64+i*313,351);for(let j=0;j<2;j++){sc.fillStyle='#eef2e4';sc.fillRect(62+i*313,372+j*72,255,55);sc.fillStyle='#b8c9a4';sc.fillRect(76+i*313,388+j*72,156,8);sc.fillRect(76+i*313,405+j*72,95,6);}}
  sc.fillStyle='#8a9b78';sc.font='19px monospace';sc.fillText('click to explore my projects  ↗',45,598);
  const screenTexture=new T.CanvasTexture(screenCanvas);screenTexture.colorSpace=T.SRGBColorSpace;
  const screenMat=new T.MeshBasicMaterial({map:screenTexture});const screen=new T.Mesh(new T.PlaneGeometry(1.75,1.08),screenMat);screen.position.set(0,.63,.047);lid.add(screen);laptopMeshes.push(screen);
  // Ceramic plant pot with curved stems and broad leaves.
  const plant=new T.Group();plant.position.set(1.48,1.18,-.69);desk.add(plant);
  cylinder(.30,.23,.47,mat.pot,0,.22,0,plant);cylinder(.265,.265,.018,mat.coffee,0,.462,0,plant);
  const plantLeaves=[[-.08,.86,.02,-.6,.1,1.1],[.16,1.16,.02,.5,.6,-.9],[-.16,1.34,-.02,-.65,.5,.8],[.09,.74,.08,.4,0,-1.1],[.03,1.54,-.02,.1,.4,-.2]];
  for(const [x,y,z,rx,ry,rz] of plantLeaves){const leaf=sphere(.26,y>1?mat.leafLight:mat.leaf,x,y,z,plant);leaf.scale.set(.6,1.45,.17);leaf.rotation.set(rx,ry,rz);const endpoint=new T.Vector3(x,y-.09,z);const start=new T.Vector3(0,.43,0);const curve=new T.QuadraticBezierCurve3(start,new T.Vector3(x*.3,y*.82,z*.4),endpoint);const stem=new T.Mesh(new T.TubeGeometry(curve,12,.013,5,false),mat.stem);plant.add(stem);}
  // A small coffee cup and its handle.
  const mug=new T.Group();mug.position.set(-1.52,1.17,.64);desk.add(mug);
  cylinder(.21,.18,.35,mat.cream,0,.17,0,mug);cylinder(.179,.179,.012,mat.coffee,0,.345,0,mug);
  const rim=new T.Mesh(new T.TorusGeometry(.19,.022,8,32),mat.cream);rim.rotation.x=Math.PI/2;rim.position.y=.35;mug.add(rim);
  const handle=new T.Mesh(new T.TorusGeometry(.105,.033,8,20),mat.cream);handle.rotation.y=Math.PI/2;handle.position.set(-.22,.18,0);mug.add(handle);
  // Books, a pencil and a desk mat.
  const books=new T.Group();books.position.set(1.44,1.16,.72);books.rotation.y=-.14;desk.add(books);
  box(.60,.10,.83,mat.sage,0,.03,0,.018,books);box(.56,.055,.79,mat.paper,0,.04,0,.008,books);box(.62,.025,.84,mat.sage,0,.081,0,.008,books);
  const topBook=box(.54,.13,.72,mat.sand,-.03,.15,-.03,.015,books);topBook.rotation.y=.10;
  box(.49,.07,.69,mat.paper,-.03,.16,-.025,.008,books);
  const pencil=cylinder(.018,.018,.62,mat.leg,1.28,1.18,.13);pencil.rotation.z=Math.PI/2;pencil.rotation.y=.2;
  // Lamp: the only switch changes lighting; rendering stays on demand.
  const lamp=new T.Group();lamp.position.set(-1.55,1.17,-.76);desk.add(lamp);
  cylinder(.30,.32,.055,mat.lamp,0,0,0,lamp);cylinder(.025,.025,1.23,mat.lamp,0,.63,0,lamp);
  const lampShade=new T.Mesh(new T.ConeGeometry(.35,.40,32,1,true),new T.MeshStandardMaterial({color:0x82976e,roughness:.7,side:T.DoubleSide}));lampShade.position.set(0,1.28,.05);lampShade.rotation.x=.28;lamp.add(lampShade);
  const bulbMat=new T.MeshStandardMaterial({color:0xf4e4b9,emissive:0xf7c37a,emissiveIntensity:0,roughness:.4});sphere(.085,bulbMat,0,1.19,.07,lamp);
  const lampLight=new T.PointLight(0xffcb86,0,6,1.5);lampLight.position.set(-1.55,2.35,-.65);desk.add(lampLight);
  // A tiny note, facing the viewer on the back of the desk.
  const note=box(.37,.30,.015,mat.paper,.9,1.39,-.99,.012);note.rotation.x=-.20;note.rotation.y=-.10;
  const noteLineMat=material(0x93a17d);box(.24,.013,.007,noteLineMat,.9,1.42,-.974,.003);box(.16,.013,.007,noteLineMat,.86,1.36,-.96,.003);
  let yaw=0,lit=false,frame=0,disposed=false;
  function render(){if(disposed)return;desk.rotation.y=yaw;renderer.render(scene,camera);}
  function requestRender(){if(frame)return;frame=requestAnimationFrame(()=>{frame=0;render();});}
  function resize(){const {width,height}=host.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;const distance=Math.max(1,.95/camera.aspect);camera.position.set(6.6*distance,5.1*distance,7.2*distance);camera.lookAt(0,.88,0);camera.updateProjectionMatrix();requestRender();}
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);
  rotateButton.addEventListener('click',()=>{yaw+=Math.PI/6;requestRender();});
  resetButton.addEventListener('click',()=>{yaw=0;requestRender();});
  lampButton.addEventListener('click',()=>{lit=!lit;lampButton.setAttribute('aria-pressed',String(lit));lampButton.firstChild.textContent=lit?'Tắt đèn ':'Bật đèn ';host.classList.toggle('night',lit);ambient.intensity=lit?1.35:2.45;sun.intensity=lit?.9:3.2;fill.intensity=lit?.4:1.15;lampLight.intensity=lit?7:0;bulbMat.emissiveIntensity=lit?2:0;requestRender();});
  let drag=null;const raycaster=new T.Raycaster();const pointer=new T.Vector2();
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;drag={x:e.clientX,y:e.clientY,yaw,moved:false};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x;drag.moved=drag.moved||Math.abs(dx)>5||Math.abs(e.clientY-drag.y)>7;yaw=drag.yaw+dx*.008;requestRender();});
  canvas.addEventListener('pointerup',e=>{if(!drag)return;const clicked=!drag.moved;drag=null;if(clicked){const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);if(raycaster.intersectObjects(laptopMeshes,true).length)document.dispatchEvent(new CustomEvent('workspace:project'));}});
  canvas.addEventListener('pointercancel',()=>drag=null);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();disposed=true;fallback();});
  window.addEventListener('pagehide',event=>{if(event.persisted)return;disposed=true;resizeObserver.disconnect();cancelAnimationFrame(frame);renderer.dispose();});
  window.addEventListener('pageshow',event=>{if(event.persisted)resize();});
  resize();
})();
