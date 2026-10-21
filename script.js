(() => {
  const projects = {
    trello:{name:'Trello',category:'WEB / PRODUCTIVITY',description:'Dự án tái tạo trải nghiệm quản lý công việc của Trello, giúp tổ chức ý tưởng và tiến độ bằng bảng, danh sách và thẻ.',features:['Tạo bảng, danh sách và thẻ công việc.','Kéo thả thẻ giữa các danh sách.','Thêm mô tả, bình luận và ngày hết hạn cho thẻ.'],tags:['React','Tailwind CSS','Dnd Kit','Vite'],links:[['Frontend','https://github.com/daohuynh05/trello-app'],['Backend','https://github.com/daohuynh05/trello-api']],note:'Mô tả và ảnh giao diện từ portfolio makenewline gốc.'},
    autowash:{name:'AutoWash Pro',category:'FULL STACK / BOOKING',description:'Hệ thống đặt lịch và quản lý cửa hàng rửa xe, gồm giao diện dành cho khách hàng, giao diện quản trị và backend riêng.',features:['Đặt lịch dịch vụ và quản lý thông tin xe.','Theo dõi điểm thưởng và đọc cẩm nang chăm sóc xe.','Các phân hệ quản trị lịch đặt, khách hàng, dịch vụ và chương trình khuyến mãi.'],tags:['React','TypeScript','Redux Toolkit','Java'],links:[['Frontend','https://github.com/daohuynh05/FE-SmartWashCar'],['Backend','https://github.com/daohuynh05/Smart-Management-System-Car-Wash'],['Xem demo','https://autowash-demo-web.onrender.com/']],note:'Nguồn: README của FE-SmartWashCar. Demo bên ngoài có thể cần thời gian khởi động.'},
    chat:{name:'Chat & Video',category:'WEB / REALTIME CONNECTION',description:'Ứng dụng nhắn tin và gọi video thời gian thực, kết hợp giao diện React với backend Node.js và Express.',features:['Nhắn tin thời gian thực.','Lưu dữ liệu người dùng và tin nhắn bằng MongoDB.','Tích hợp Streaming API cho cuộc gọi video.'],tags:['React','Node.js','Express','MongoDB','Streaming API'],links:[['Mã nguồn','https://github.com/daohuynh05/ChatAndVideoCall']],note:'Mô tả và ảnh giao diện từ portfolio makenewline gốc.'},
    movie:{name:'Liptwo Movie',category:'WEB / MOVIE DISCOVERY',description:'Website khám phá phim với giao diện thân thiện, giúp tìm một bộ phim theo sở thích hoặc thể loại.',features:['Duyệt danh sách phim theo thể loại.','Xem thông tin chi tiết của từng phim.','Đánh dấu các bộ phim yêu thích.'],tags:['JavaScript','Web','Movie discovery'],links:[['Mã nguồn','https://github.com/daohuynh05/liptwo-movie'],['Xem demo','https://liptwo-movie.vercel.app']],note:'Mô tả và ảnh giao diện từ portfolio makenewline gốc; liên kết demo do repo cung cấp.'},
    booking:{name:'Flight Booking',category:'WEB / TRAVEL',description:'Giao diện hệ thống đặt vé máy bay bằng React, xây dựng trải nghiệm từ tìm chuyến bay đến hỗ trợ trực tuyến và kết nối với backend đặt vé.',features:['Giao diện tìm kiếm và đặt chuyến bay.','Phần frontend React và backend JavaScript được lưu riêng.','Ảnh giao diện lấy từ portfolio makenewline.'],tags:['React','JavaScript','Web'],links:[['Frontend','https://github.com/daohuynh05/bookvemaybayapp'],['Backend','https://github.com/daohuynh05/bookvemaybayapis']],note:'Flight Booking là tên hiển thị của repo bookvemaybayapp. Chưa gắn demo khi repo chưa cung cấp URL.'}
  };
  const dialog=document.getElementById('project-dialog');
  let trigger=null;
  function openProject(id,opener){
    const p=projects[id];if(!p)return;
    trigger=opener||document.activeElement;
    document.getElementById('dialog-category').textContent=p.category;
    document.getElementById('dialog-title').textContent=p.name;
    document.getElementById('dialog-description').textContent=p.description;
    const features=document.getElementById('dialog-features');features.replaceChildren(...p.features.map(f=>{const li=document.createElement('li');li.textContent=f;return li;}));
    document.getElementById('dialog-tags').replaceChildren(...p.tags.map(t=>{const span=document.createElement('span');span.textContent=t;return span;}));
    document.getElementById('dialog-links').replaceChildren(...p.links.map(([label,url],i)=>{const a=document.createElement('a');a.textContent=label+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';if(i)a.className='secondary';return a;}));
    document.getElementById('dialog-note').textContent=p.note;
    if(typeof dialog.showModal==='function'){if(!dialog.open)dialog.showModal();}else{location.href=p.links[0][1];}
  }
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project,button)));
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{if(trigger&&trigger.isConnected)trigger.focus({preventScroll:true});});
  document.addEventListener('workspace:project',()=>openProject('trello',document.getElementById('rotate-desk')));
  document.getElementById('year').textContent=String(new Date().getFullYear());
})();
