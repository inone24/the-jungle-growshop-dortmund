import * as React from "react";

export default function ImageLightboxIsland(){
  const [open,setOpen]=React.useState(false);
  const [payload,setPayload]=React.useState({url:"",alt:"",title:""});

  React.useEffect(()=>{
    function onClick(e:MouseEvent){
      const t = e.target as HTMLElement;
      const opener = t.closest?.("[data-lightbox-src]") as HTMLElement | null;
      if (opener){
        e.preventDefault();
        setPayload({
          url: opener.getAttribute("data-lightbox-src") || "",
          alt: opener.getAttribute("data-lightbox-alt") || "",
          title: opener.getAttribute("data-lightbox-title") || ""
        });
        setOpen(true);
      }
    }
    document.addEventListener("click", onClick);
    return ()=>document.removeEventListener("click", onClick);
  },[]);

  if(!open) return null;
  return (
    <div aria-modal role="dialog" className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <button aria-label="Schließen" onClick={()=>setOpen(false)} className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 p-2 text-white">✕</button>
      <div className="w-full h-full flex items-center justify-center p-6">
        <figure className="max-w-5xl w-full">
          <img src={payload.url} alt={payload.alt} className="w-full h-auto object-contain rounded-xl border border-white/10"/>
          {payload.title && <figcaption className="text-center text-white/80 mt-3 text-sm">{payload.title}</figcaption>}
        </figure>
      </div>
    </div>
  );
}
