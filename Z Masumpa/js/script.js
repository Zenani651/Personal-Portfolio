const PERSONAL_INFO={name:"Vuyelwa Petunia Mafa",title:"Junior Developer",tagline:"And I'm a",titles:["Junior Developer","React Specialist","UI/UX Enthusiast","Web Animator"],shortBio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nulla sed saepe rerum, animi expedita.",fullBio:"I am a passionate Frontend Developer with over 5 years of experience crafting modern, responsive, and user-centric web applications. Specializing in React, TypeScript, Tailwind CSS, and sleek UI animations, I transform complex ideas into interactive visual realities.",email:"vuyelwamafa@gmail.com",phone:"+27 63 926 2851",location:"Bloemfontein, South Africa",experienceYears:5,completedProjects:48,happyClients:32,socials:{phone:"tel:+27639262851",email:"mailto:vuyelwamafa@gmail.com",linkedin:"https://www.linkedin.com/in/vuyelwa-mafa-aa5777292",github:"https://github.com/vuyelwamafa"}};

const SKILLS_DATA=[
{name:"HTML5 & CSS3",category:"Frontend",icon:"</>"},
{name:"JavaScript (ES6+)",category:"Languages",icon:"JS"},
{name:"C# & .NET",category:"Backend",icon:"C#"},
{name:"ASP.NET Core",category:"Backend",icon:".N"},
{name:"Flutter & Dart",category:"Mobile",icon:"Fl"},
{name:"SQL Server",category:"Database",icon:"SQL"},
{name:"Firebase",category:"Database",icon:"🔥"},
{name:"Git & GitHub",category:"Tools & Design",icon:"⑂"},
{name:"REST APIs",category:"Backend",icon:"API"},
{name:"Responsive Design",category:"Frontend",icon:"▣"}
];

const SOFT_SKILLS_DATA=["Problem Solving","Communication","Teamwork & Collaboration","Time Management","Critical Thinking","Adaptability","Attention to Detail","Task Prioritization","Fast Learner"];

const PROJECTS_DATA=[
{id:"proj-1",title:"Ai Chatbot",category:"Web App",image:"https://picsum.photos/seed/cutnavigation/800/600",description:" ",longDescription:"Wellness Chatbot ",tags:["Meta AI",],demoUrl:"https://lively-fairy-48437d.netlify.app/",githubUrl:"https://github.com/Zenani651/AI-Chatbot.git"},
{id:"proj-2",title:"Sentiment Analysis tool",category:"Web App",image:"https://picsum.photos/seed/itsmplatform/800/600",description:" ",longDescription:"A client-side dashboard that analyses customer reviews for sentiment, emotions, topics and trends, then turns them into actionable reports. ",tags:["Claude",],videoUrl:"",demoUrl:"https://darling-sprite-c92c24.netlify.app/",githubUrl:"https://github.com/Zenani651/edupredict.git"},
{id:"proj-3",title:"Content Generator",category:"Web App",image:"https://picsum.photos/seed/companyintranet/800/600",description:" ",longDescription:"CareerCraft is a mobile-friendly web app that helps job seekers build professional CVs, write cover letters, and match their CV to a job ad. It includes template previews, categorised skills, an ATS check, a prompt library, and an AI career assistant that works only from the user’s own details.",tags:["Claude",],videoUrl:"",demoUrl:"https://fanciful-semolina-ab6b39.netlify.app",githubUrl:"https://github.com/Zenani651/CareerDraft..git"},
{id:"proj-4",title:"End-to-end AI solution",category:"Web App",image:"https://picsum.photos/seed/cutnavigation/800/600",description:" ",longDescription:"EduPredict: a browser-based dashboard that predicts learner marks, flags students at risk and recommends support. Prototype built with AI assistance.",tags:["Claude"],videoUrl:"",demoUrl:"https://myedupredict.netlify.app/",githubUrl:"https://github.com/Zenani651/edupredict.git"},
];

const EXPERIENCE_DATA=[

];

const navLinks=[["Home","home"],["About","about"],["Skills","skills"],["Portfolio","portfolio"],["Contact","contact"]];

function renderNav(){
  const desktop=document.getElementById("desktopNav"), mobile=document.getElementById("mobileDrawer");
  const markup=navLinks.map(([name,id])=>`<a href="#${id}" data-section="${id}">${name}</a>`).join("");
  desktop.innerHTML=markup;
  mobile.innerHTML=markup;
}
function scrollToSection(id){
  document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  document.getElementById("mobileDrawer").classList.remove("open");
  document.getElementById("menuIcon").textContent="☰";
}
document.addEventListener("click",e=>{
  const nav=e.target.closest("[data-section]");
  if(nav){e.preventDefault();scrollToSection(nav.dataset.section)}
  const brand=e.target.closest("[data-nav]");
  if(brand){e.preventDefault();scrollToSection("home")}
});
renderNav();

const socials=[["🕻","Call +27 65 583 4191","phone"],["✉","Email zenanimasumpa@gmail.com","email"],["in","Open Zenani Masumpa's LinkedIn profile","linkedin"],["⌘","Open Zenani Masumpa's GitHub profile","github"]];
document.getElementById("socials").innerHTML=socials.map(([icon,label,key])=>{
  const opensNewTab=key==="linkedin"||key==="github";
  return `<a href="${PERSONAL_INFO.socials[key]}"${opensNewTab?' target="_blank" rel="noopener noreferrer"':""} aria-label="${label}" title="${label}">${icon}</a>`;
}).join("");

function createConstellation(){
  const canvas=document.getElementById("constellationCanvas");
  const card=document.getElementById("constellationCard");
  if(!canvas||!card)return;
  const ctx=canvas.getContext("2d");
  const pink={r:255,g:0,b:127};
  const nodes=[];
  let width=0,height=0,dragged=null,pointer=null;

  function resize(){
    const bounds=card.getBoundingClientRect();
    const previousWidth=width||bounds.width,previousHeight=height||bounds.height;
    width=bounds.width;height=bounds.height;
    const ratio=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
    canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;
    ctx.setTransform(ratio,0,0,ratio,0,0);
    nodes.forEach(node=>{node.x=node.x/previousWidth*width;node.y=node.y/previousHeight*height});
  }

  function addNodes(){
    const count=Math.max(34,Math.min(58,Math.round(width/8)));
    for(let i=0;i<count;i++){
      const angle=Math.random()*Math.PI*2;
      const radius=Math.sqrt(Math.random())*.42;
      nodes.push({
        x:width*(.5+Math.cos(angle)*radius),
        y:height*(.48+Math.sin(angle)*radius*.78),
        vx:(Math.random()-.5)*.18,
        vy:(Math.random()-.5)*.18,
        size:Math.random()*1.8+1.2
      });
    }
  }

  function position(event){
    const bounds=canvas.getBoundingClientRect();
    return {x:event.clientX-bounds.left,y:event.clientY-bounds.top};
  }

  canvas.addEventListener("pointerdown",event=>{
    pointer=position(event);
    dragged=nodes.reduce((closest,node)=>{
      const distance=Math.hypot(node.x-pointer.x,node.y-pointer.y);
      return distance<18&&(!closest||distance<closest.distance)?{node,distance}:closest;
    },null)?.node||null;
    if(dragged){canvas.setPointerCapture(event.pointerId);dragged.x=pointer.x;dragged.y=pointer.y}
  });
  canvas.addEventListener("pointermove",event=>{
    pointer=position(event);
    if(dragged){dragged.x=pointer.x;dragged.y=pointer.y;dragged.vx=0;dragged.vy=0}
  });
  function release(){dragged=null;pointer=null}
  canvas.addEventListener("pointerup",release);
  canvas.addEventListener("pointercancel",release);
  canvas.addEventListener("pointerleave",()=>{if(!dragged)pointer=null});

  function draw(){
    ctx.clearRect(0,0,width,height);
    const linkDistance=Math.min(115,width*.3);
    nodes.forEach((node,index)=>{
      if(node!==dragged){
        node.x+=node.vx;node.y+=node.vy;
        if(node.x<8||node.x>width-8)node.vx*=-1;
        if(node.y<8||node.y>height-8)node.vy*=-1;
        node.x=Math.max(8,Math.min(width-8,node.x));
        node.y=Math.max(8,Math.min(height-8,node.y));
      }
      for(let j=index+1;j<nodes.length;j++){
        const other=nodes[j],distance=Math.hypot(node.x-other.x,node.y-other.y);
        if(distance<linkDistance){
          const opacity=(1-distance/linkDistance)*.72;
          ctx.beginPath();ctx.moveTo(node.x,node.y);ctx.lineTo(other.x,other.y);
          ctx.strokeStyle=`rgba(${pink.r},${pink.g},${pink.b},${opacity})`;
          ctx.lineWidth=.75;ctx.stroke();
        }
      }
    });
    nodes.forEach(node=>{
      const hovered=pointer&&Math.hypot(node.x-pointer.x,node.y-pointer.y)<14;
      ctx.beginPath();ctx.arc(node.x,node.y,hovered||node===dragged?node.size+2:node.size,0,Math.PI*2);
      ctx.fillStyle="#ff007f";ctx.shadowColor="#ff007f";ctx.shadowBlur=hovered||node===dragged?16:8;ctx.fill();ctx.shadowBlur=0;
    });
    requestAnimationFrame(draw);
  }

  resize();addNodes();draw();
  new ResizeObserver(resize).observe(card);
}
createConstellation();

document.getElementById("timeline").innerHTML=EXPERIENCE_DATA.map(e=>`<div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-card"><div class="timeline-top"><h4>${e.role}</h4><span class="year">${e.year}</span></div><p class="company">${e.company}</p><p class="description">${e.description}</p></div></div>`).join("");

function setupFilters(containerId,categories,callback){
  const el=document.getElementById(containerId);
  el.innerHTML=categories.map((c,i)=>`<button class="filter-btn ${i===0?"active":""}" data-filter="${c}">${c}</button>`).join("");
  el.addEventListener("click",e=>{
    const btn=e.target.closest(".filter-btn"); if(!btn)return;
    el.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active"); callback(btn.dataset.filter);
  });
}
function renderSkills(){
  document.getElementById("technicalSkillsGrid").innerHTML=SKILLS_DATA.map(s=>`<div class="skill-card"><div class="skill-left"><div class="skill-icon">${s.icon}</div><div><h3>${s.name}</h3><small>${s.category}</small></div></div><div class="skill-dot"></div></div>`).join("");
  document.getElementById("softSkillsCard").innerHTML=SOFT_SKILLS_DATA.map(skill=>`<div class="soft-skill"><span class="soft-skill-check">✓</span><span>${skill}</span></div>`).join("");
}
renderSkills();

function renderProjects(category="All"){
  const data=category==="All"?PROJECTS_DATA:PROJECTS_DATA.filter(p=>p.category===category);
  document.getElementById("projectsGrid").innerHTML=data.map(p=>`
  <div class="project-card">
    <div class="project-thumb">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <span class="badge project-badge">${p.category}</span>
      <div class="project-overlay">
        <button class="round-action primary" data-project="${p.id}" title="View Details">◉</button>
        ${p.demoUrl?`<a class="round-action" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" title="Live Demo">↗</a>`:""}
        ${p.githubUrl?`<a class="round-action" href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" title="Source Code">⌘</a>`:""}
      </div>
    </div>
    <div class="project-body">
      <div><h3>${p.title}</h3><p>${p.description}</p></div>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <button class="explore-btn" data-project="${p.id}">Explore Project &nbsp; ◉</button>
    </div>
  </div>`).join("");
}
setupFilters("projectFilters",["All","Mobile App","Web App","Backend","Game"],renderProjects); renderProjects();

document.getElementById("projectsGrid").addEventListener("click",e=>{
  const btn=e.target.closest("[data-project]"); if(btn)openProject(btn.dataset.project);
});

function openProject(id){
  const p=PROJECTS_DATA.find(x=>x.id===id); if(!p)return;
  document.getElementById("projectCategory").textContent=p.category;
  document.getElementById("projectModalTitle").textContent=p.title;
  document.getElementById("projectModalHeading").textContent=p.title;
  document.getElementById("projectModalDescription").textContent=p.longDescription||p.description;
  const video=document.getElementById("projectVideo"),placeholder=document.getElementById("projectVideoPlaceholder");
  const placeholderTitle=document.getElementById("videoPlaceholderTitle");
  placeholderTitle.textContent=`${p.title} video coming soon`;
  placeholder.classList.remove("hidden");video.classList.add("hidden");video.pause();video.removeAttribute("src");
  video.oncanplay=()=>{placeholder.classList.add("hidden");video.classList.remove("hidden")};
  video.onerror=()=>{video.classList.add("hidden");placeholder.classList.remove("hidden")};
  video.src=p.videoUrl;video.load();
  document.getElementById("projectTags").innerHTML=p.tags.map(t=>`<span class="tag">${t}</span>`).join("");
  document.getElementById("projectLinks").innerHTML=(p.githubUrl?`<a class="secondary-btn" href="${p.githubUrl}" target="_blank" rel="noopener noreferrer">⌘ View Source Code</a>`:"")+(p.demoUrl?`<a class="primary-btn hire-btn" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">↗ Open Live Demo</a>`:"");
  document.getElementById("projectModal").classList.remove("hidden");document.body.style.overflow="hidden";
}

function openCv(){
  document.getElementById("cvExperience").innerHTML=EXPERIENCE_DATA.map(e=>`<div class="cv-entry"><div class="cv-entry-top"><span class="role">${e.role}</span><span class="year">${e.year}</span></div><div class="company">${e.company}</div><div class="desc">${e.description}</div></div>`).join("");
  document.getElementById("cvSkills").innerHTML=SKILLS_DATA.map(s=>`<div class="cv-skill"><span>${s.name}</span><i></i></div>`).join("");
  document.getElementById("cvModal").classList.remove("hidden");document.body.style.overflow="hidden";
}
document.querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",()=>{b.closest(".modal").classList.add("hidden");document.getElementById("projectVideo")?.pause();document.body.style.overflow=""}));
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m){m.classList.add("hidden");document.body.style.overflow=""}}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.querySelectorAll(".modal").forEach(m=>m.classList.add("hidden"));document.body.style.overflow=""}});

document.getElementById("copyCv").addEventListener("click",async()=>{
  const text=`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}

BIO:
${PERSONAL_INFO.fullBio}

WORK EXPERIENCE:
${EXPERIENCE_DATA.map(e=>`- ${e.role} at ${e.company} (${e.year}): ${e.description}`).join("\n")}

TECHNICAL SKILLS:
${SKILLS_DATA.map(s=>s.name).join(", ")}`.trim();
  try{await navigator.clipboard.writeText(text);document.getElementById("copyCv").textContent="✓ Copied to Clipboard!";setTimeout(()=>document.getElementById("copyCv").textContent="⧉ Copy Resume Text",3000)}catch{alert("Unable to copy automatically.")}
});
document.getElementById("printCv").addEventListener("click",()=>window.print());

document.getElementById("menuToggle").addEventListener("click",()=>{
  const d=document.getElementById("mobileDrawer"),open=d.classList.toggle("open");
  document.getElementById("menuIcon").textContent=open?"×":"☰";
});

document.getElementById("backTop").addEventListener("click",()=>scrollToSection("home"));

let activeSection="home";
function updateActiveSection(){
  const scrollPosition=window.scrollY+200;
  ["home","about","skills","portfolio","contact"].forEach(id=>{
    const el=document.getElementById(id);
    if(el && scrollPosition>=el.offsetTop && scrollPosition<el.offsetTop+el.offsetHeight)activeSection=id;
  });
  document.querySelectorAll("[data-section]").forEach(a=>a.classList.toggle("active",a.dataset.section===activeSection));
  document.getElementById("navbar").classList.toggle("scrolled",window.scrollY>30);
}
window.addEventListener("scroll",updateActiveSection);updateActiveSection();

let titleIndex=0,displayText="",deleting=false;
function typeTitle(){
  const current=PERSONAL_INFO.titles[titleIndex],speed=deleting?40:80;
  if(!deleting && displayText===current){setTimeout(()=>deleting=true,1800);return}
  if(deleting && displayText===""){deleting=false;titleIndex=(titleIndex+1)%PERSONAL_INFO.titles.length}
  else displayText=deleting?current.substring(0,displayText.length-1):current.substring(0,displayText.length+1);
  document.querySelector(".typing-text").textContent=displayText;
  setTimeout(typeTitle,speed);
}
typeTitle();

const form=document.getElementById("contactForm");
form.addEventListener("submit",e=>{
  e.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return}
  const details=new FormData(form);
  const whatsappMessage=[
    "Hello Zenani, I contacted you through your portfolio.",
    "",
    `Name: ${details.get("fullName")}`,
    `Email: ${details.get("email")}`,
    details.get("phone")?`Phone: ${details.get("phone")}`:null,
    details.get("subject")?`Subject: ${details.get("subject")}`:null,
    "",
    "Message:",
    details.get("message")
  ].filter(line=>line!==null).join("\n");
  const whatsappUrl=`https://wa.me/27655834191?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl,"_blank","noopener,noreferrer");
  document.getElementById("successMessage").classList.remove("hidden");
  setTimeout(()=>document.getElementById("successMessage").classList.add("hidden"),7000);
});
document.getElementById("year").textContent=new Date().getFullYear();
